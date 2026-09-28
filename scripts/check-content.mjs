import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Check public identity settings and assets without network access. */
export function validateContent(config, publicRoot, strict = false) {
  const errors = [];
  const warnings = [];
  const missing = (message) => (strict ? errors : warnings).push(message);
  const required = ["name", "initials", "title", "description"];
  const optional = ["siteUrl", "portraitPath", "email", "linkedInUrl", "cvPath"];
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    return { errors: ["Site configuration must be a JSON object."], warnings };
  }
  for (const key of [...required, ...optional]) {
    if (typeof config[key] !== "string") {
      errors.push(`${key} must be a string.`);
    }
  }
  if (errors.length) return { errors, warnings };
  for (const key of required) {
    if (!config[key].trim()) errors.push(`${key} must not be empty.`);
  }

  const origin = config.siteUrl.trim();
  if (!origin) {
    missing("siteUrl is empty: canonical and social-image URLs are not emitted.");
  } else {
    try {
      const u = new URL(origin);
      if (u.protocol !== "https:" || u.username || u.password ||
          u.pathname !== "/" || u.search || u.hash) {
        errors.push("siteUrl must be an HTTPS origin, without credentials, a path, query or hash.");
      }
      if (["example.com", "www.example.com", "example.org", "www.example.org"].includes(u.hostname)) {
        errors.push("Replace the example siteUrl with the actual public domain.");
      }
    } catch {
      errors.push("siteUrl is not a valid absolute URL.");
    }
  }

  const email = config.email.trim();
  if (email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[?#%]/.test(email))) {
    errors.push("email must be a plain email address, without mailto: or URL parameters.");
  }
  const linkedin = config.linkedInUrl.trim();
  if (linkedin) {
    try {
      const u = new URL(linkedin);
      if (u.protocol !== "https:" || !/(^|\.)linkedin\.com$/.test(u.hostname) || u.username || u.password) {
        errors.push("linkedInUrl must be an HTTPS LinkedIn profile URL.");
      }
    } catch {
      errors.push("linkedInUrl is not a valid absolute URL.");
    }
  }
  if (!email && !linkedin) {
    missing("Add email or linkedInUrl: visitors currently have no direct contact link.");
  }

  for (const key of ["portraitPath", "cvPath"]) {
    const value = config[key].trim();
    if (!value) {
      missing(key === "portraitPath"
        ? "portraitPath is empty: the initials fallback is shown instead of the original portrait."
        : "cvPath is empty: the Download CV link is not displayed.");
      continue;
    }
    if (!value.startsWith("/") || value.startsWith("//") || /[\\?#%]/.test(value) || value.split("/").includes("..")) {
      errors.push(`${key} must be a local /images/... or /files/... path without traversal, query or hash.`);
      continue;
    }
    const base = resolve(publicRoot);
    const file = resolve(base, value.slice(1));
    const rel = relative(base, file);
    if (!rel || rel.startsWith(`..${sep}`) || rel === "..") {
      errors.push(`${key} must point to a file within public/.`);
      continue;
    }
    if (!existsSync(file) || !statSync(file).isFile()) {
      errors.push(`${key}: missing public${value}. Add the real file or leave this setting empty.`);
      continue;
    }
    const bytes = readFileSync(file);
    if (key === "cvPath") {
      if (!/\.pdf$/i.test(value) || bytes.subarray(0, 5).toString("ascii") !== "%PDF-") {
        errors.push("cvPath must point to a real PDF file, not an HTML download page.");
      }
    } else {
      const png = bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
      const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
      const webp = bytes.subarray(0,4).toString() === "RIFF" && bytes.subarray(8,12).toString() === "WEBP";
      const avif = bytes.subarray(4,8).toString() === "ftyp" && /avif|avis/.test(bytes.subarray(8,40).toString());
      if (!/\.(png|jpe?g|webp|avif)$/i.test(value) || !(png || jpeg || webp || avif)) {
        errors.push("portraitPath must point to a PNG, JPEG, WebP or AVIF image, not an HTML page.");
      }
    }
  }
  return { errors, warnings };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const config = JSON.parse(readFileSync(resolve(root, "src/site.config.json"), "utf8"));
    const result = validateContent(config, resolve(root, "public"), process.argv.includes("--strict"));
    for (const warning of result.warnings) console.warn(`WARNING: ${warning}`);
    for (const error of result.errors) console.error(`ERROR: ${error}`);
    if (result.errors.length) {
      process.exitCode = 1;
    } else {
      console.log(`Content configuration is valid${result.warnings.length ? " with unfinished content" : ""}.`);
    }
  } catch (error) {
    console.error(`Could not check site content: ${error.message}`);
    process.exitCode = 1;
  }
}
