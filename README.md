# Farzaad Sarwar - Portfolio

A responsive, single-page professional portfolio built with React, TypeScript,
TanStack Start and Tailwind CSS. The production target is Vercel with Nitro.

## Before publishing

The source is configured for deployment, but the portrait, CV, real contact
links and production domain must still be supplied. Until then the site shows
an FS monogram, omits the CV button, and displays an honest contact notice.
No contact form or email-delivery backend is included.

Edit `src/site.config.json` and add the actual files to `public/`:

| Setting | Value to provide |
| --- | --- |
| `siteUrl` | Final HTTPS origin, with no path or query |
| `portraitPath` | `/images/farzaad-hero.png` after adding the real photo |
| `email` | Actual email address, without `mailto:` |
| `linkedInUrl` | Actual HTTPS LinkedIn profile URL, or an empty string |
| `cvPath` | `/files/farzaad-sarwar-cv.pdf` after adding the real PDF |

Do not put secrets in this JSON file; its values are public. At least one of
`email` and `linkedInUrl` is needed for working contact links. A photo and CV
must be real files, not saved HTML pages or renamed metadata files.

## Local setup

Use Node.js 22.x. The direct dependency versions are pinned. This handoff does
not contain a newly generated npm lockfile: create it on the first install and
commit it after successful checks. Do not change package versions at random to
solve an installation error.

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal (normally port 3000).

## Checks

```sh
npm test
npm run check
npm run check:content:strict
npm run build
npm run preview
```

`npm test` and the content checks use Node built-ins and need no installed
packages. `check:content` permits missing optional content with clear warnings,
but always fails for malformed settings or files referenced but absent.
`check:content:strict` also fails on missing portrait, CV, domain and contact
method, making it a useful final handoff gate.

`check` adds TypeScript and ESLint checks and requires installed dependencies.
Local production builds target a standalone Node server;
`preview` starts `.output/server/index.mjs` (normally port 3000). Run preview
after the build, not at the same time as a dev server using the same port.

## Deploy to Vercel

Import this folder's Git repository as a new Vercel project. The project root
must be the folder containing `package.json` and `vite.config.ts`.

| Setting | Value |
| --- | --- |
| Framework Preset | TanStack Start |
| Node.js Version | 22.x |
| Install Command, first deployment | `npm install` |
| Build Command | `npm run build` |
| Output Directory | Leave the framework default; do not force `dist` |
| App environment variables | None required |

`vite.config.ts` selects Nitro's `vercel` preset when Vercel sets `VERCEL=1`.
Nitro creates the Vercel deployment output, including server-side rendering.
Do not add an SPA rewrite to `/index.html`: this is a TanStack Start server
application, not a plain Vite SPA. Do not upload only a local `dist` folder.

After the first successful local `npm install`, commit `package-lock.json`.
Then change `installCommand` in `vercel.json` to `npm ci` for reproducible
installs of the locked dependency tree. Commit both changes together.

Once the preview deployment works, add the final domain in Vercel, use the DNS
records Vercel shows for that domain, and update `siteUrl`. Preserve unrelated
mail DNS records. Do not guess DNS values or remove email records.

## Content and appearance

- Main portfolio content: `src/components/portfolio/`
- Identity, contact and local file paths: `src/site.config.json`
- Page metadata: `src/routes/index.tsx` and `src/routes/__root.tsx`
- Theme and animations: `src/styles.css`
- Browser icon, touch icon and social image: `public/`

The FS icon and share image are local assets. The portrait switches to the real
local file when configured and falls back to initials if loading fails. The
page still loads Sora and Manrope through Google Fonts; these requests are not
required for the system-font fallback. Review external-font use against your
own deployment requirements.

The portfolio's existing biographical claims and achievements have not been
independently verified. Obtain the portfolio owner's approval before release.
Keep applicable third-party license notices when distributing dependencies.

## Verification status of this handoff

Content-validator tests, source syntax, internal imports and JSON configuration
were checked in the preparation environment. Dependency installation and a
full framework production build could not be completed because the npm
registry was unreachable there. No live Vercel deployment, domain change, or
real photo/CV/contact verification was performed. Follow the checks above
before treating this as an approved production release.
