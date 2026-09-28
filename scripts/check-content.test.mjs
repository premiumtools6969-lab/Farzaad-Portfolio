import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validateContent } from "./check-content.mjs";

const emptyConfig = {
  name: "Test Person", initials: "TP", title: "Test portfolio", description: "Test description",
  siteUrl: "", portraitPath: "", email: "", linkedInUrl: "", cvPath: "",
};

function fixture(t) {
  const dir = mkdtempSync(join(tmpdir(), "portfolio-content-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  mkdirSync(join(dir, "images"));
  mkdirSync(join(dir, "files"));
  writeFileSync(join(dir, "images", "photo.png"), Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jN1kAAAAASUVORK5CYII=", "base64"));
  writeFileSync(join(dir, "files", "cv.pdf"), "%PDF-1.7\n% test header\n");
  return dir;
}

test("empty optional content is a warning, not a broken deployment", (t) => {
  const r = validateContent(emptyConfig, fixture(t));
  assert.equal(r.errors.length, 0);
  assert.equal(r.warnings.length, 4);
});

test("strict handoff check fails until outstanding content is provided", (t) => {
  const r = validateContent(emptyConfig, fixture(t), true);
  assert.equal(r.errors.length, 4);
});

test("configured local files and a contact method pass strict checking", (t) => {
  const r = validateContent({ ...emptyConfig, siteUrl: "https://portfolio.test", email: "person@portfolio.test",
    portraitPath: "/images/photo.png", cvPath: "/files/cv.pdf" }, fixture(t), true);
  assert.deepEqual(r, { errors: [], warnings: [] });
});

test("missing referenced assets fail even in non-strict mode", (t) => {
  const r = validateContent({ ...emptyConfig, portraitPath: "/images/missing.png" }, fixture(t));
  assert.match(r.errors.join(" "), /missing/);
});

test("asset URLs cannot escape the public directory or use a remote host", (t) => {
  const dir = fixture(t);
  for (const path of ["/../secret.png", "//elsewhere.test/photo.png", "https://elsewhere.test/photo.png", "/images/%2e%2e/a.png"]) {
    assert.ok(validateContent({ ...emptyConfig, portraitPath: path }, dir).errors.length > 0);
  }
});

test("HTML saved as an image or PDF is rejected", (t) => {
  const dir = fixture(t);
  writeFileSync(join(dir, "images", "bad.png"), "<html>Not an image</html>");
  writeFileSync(join(dir, "files", "bad.pdf"), "<html>Not a PDF</html>");
  const r = validateContent({ ...emptyConfig, portraitPath: "/images/bad.png", cvPath: "/files/bad.pdf" }, dir);
  assert.equal(r.errors.length, 2);
});

test("unsafe or invalid contact and canonical URLs are rejected", (t) => {
  const r = validateContent({ ...emptyConfig, email: "mailto:not-an-email", linkedInUrl: "javascript:alert(1)", siteUrl: "http://portfolio.test/path" }, fixture(t));
  assert.equal(r.errors.length, 3);
});

test("LinkedIn is enough for a direct-contact method", (t) => {
  const r = validateContent({ ...emptyConfig, linkedInUrl: "https://www.linkedin.com/in/test-person/" }, fixture(t));
  assert.equal(r.errors.length, 0);
  assert.equal(r.warnings.length, 3);
});

test("a non-object or non-string configuration is rejected", (t) => {
  const dir = fixture(t);
  assert.ok(validateContent(null, dir).errors.length);
  assert.ok(validateContent({ ...emptyConfig, portraitPath: 123 }, dir).errors.length);
});
