import config from "../site.config.json";

/** Public information only. Never put passwords or API keys in this file. */
export const site = {
  ...config,
  siteUrl: config.siteUrl.trim().replace(/\/+$/, ""),
  portraitPath: config.portraitPath.trim(),
  email: config.email.trim(),
  linkedInUrl: config.linkedInUrl.trim(),
  cvPath: config.cvPath.trim(),
};
