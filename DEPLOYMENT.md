# Deployment and launch checklist

## 1. Prepare the missing content

Get the original portrait from the portfolio owner or download the actual image
from the currently working website. A JSON asset manifest is not an image.
Save it as `public/images/farzaad-hero.png`, or use a matching filename and
extension in the configuration. PNG, JPEG, WebP and AVIF are accepted.

Save the approved CV as `public/files/farzaad-sarwar-cv.pdf`. It will be publicly
accessible after deployment. Confirm that the owner approves all contact and
personal information contained in it.

Edit the empty values in `src/site.config.json`. Do not invent email addresses,
profiles or an unregistered domain. Leave a setting empty until its real value
is available. The page must not be handed off as content-complete while the
contact notice or initials-only fallback remains unapproved.

Run `npm run check:content:strict` to identify what remains. If the owner
intentionally does not want a CV or portrait, document that decision rather
than substituting a fake file just to satisfy the strict check.

## 2. Install and test

Install a maintained Node.js 22.x release, then open a terminal in this folder.

```sh
node --version
npm --version
npm install
npm test
npm run check
npm run check:content:strict
npm run dev
```

The local dev server normally uses port 3000. Check desktop and phone widths,
all navigation sections, opening and closing the mobile menu, Escape to close,
keyboard focus, the portrait, email link, LinkedIn destination and PDF download.

Stop the dev server with Ctrl+C and test the production server:

```sh
npm run build
npm run preview
```

Test the homepage and a nonexistent path. The nonexistent path should show the
branded 404, not a platform error. Check the browser console and Network tab.

This is a normal application with public client-side JavaScript. Disabling
production source maps is not secrecy for browser code. Never place a secret
in a client component, public directory, JSON setting or a `VITE_` variable.

## 3. Store the source

Keep an untouched backup of the original project separately. Use a dedicated
repository for this release so an unrelated editor or build integration does
not overwrite the production configuration. Keep legitimate original project
records; there is no need to rewrite or destroy existing repository history.

Create an empty repository and replace the URL placeholder below with its URL.
Run these commands only inside this new extracted folder:

```sh
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin YOUR_NEW_REPOSITORY_URL
git push -u origin main
```

Do not commit `node_modules`, `.env`, `.output`, `.vercel` or credentials.
Commit the generated `package-lock.json`. Once that lockfile exists and passes
all checks, use `npm ci` in `vercel.json` instead of `npm install` and commit
both changes. Do not use `npm ci` before a matching lockfile exists.

## 4. Import in Vercel

Create a new Vercel project, import the repository, select the team that will
own the site, and verify these settings before deploying:

| Setting | Required value |
| --- | --- |
| Root Directory | The folder containing `package.json` |
| Framework | TanStack Start |
| Node.js | 22.x |
| Install Command | `npm install`; later `npm ci` with the committed lockfile |
| Build Command | `npm run build` |
| Output Directory | Default / no override |
| Environment variables | None for this portfolio |

The included Nitro integration creates the server and assets for Vercel.
Do not choose plain Vite and force `dist`, do not add an `/index.html` catch-all,
and do not add unrelated backend credentials. Leave `NITRO_PRESET` unset in
Vercel so the configured provider selection applies. `VERCEL=1` is supplied by
Vercel, not a secret you need to create.

Review the build log. A successful build is necessary but not sufficient:
open the resulting URL and test the actual live site as well.

## 5. Domain and launch

After the Vercel preview works, open the project's domain settings. Add the
owner-approved domain and optional www version. At the domain's DNS provider,
apply the exact records Vercel supplies. Preserve MX, SPF, DKIM, DMARC and other
unrelated service records. Only replace records for the hostname being moved.

Set the final HTTPS origin in `src/site.config.json` under `siteUrl`, with no
subdirectory or query. Commit and redeploy. This enables the canonical URL,
Open Graph URL and local `og-image.png` social preview.

Confirm HTTPS and the chosen www/non-www behavior on the final domain. Test in
a private browser window. A preview visible to a logged-in owner is not proof
that an ordinary visitor can access the production domain.

Use a Vercel plan appropriate to the site's use. Vercel documents Hobby as
personal, non-commercial; a commercial client site should use a plan permitting
that use. Check the current plan terms rather than assuming every portfolio is
commercial or every client project can use the free tier.

## 6. Final approval

Check portrait, real contact method, CV, correct favicon, metadata and social
image. Verify all profile claims with the owner. Check mobile, desktop,
keyboard navigation, reduced-motion preferences, and the 404 page. Confirm
that the Google Fonts requests and all local assets behave as intended.

The contact section opens the visitor's email application and/or LinkedIn. It
is not a server-backed contact form, so no email-send success message should
be expected and no delivery claim is made.

For updates, edit the source, run the checks, commit and push. Vercel's linked
repository deployment handles the release. Preserve a known-good deployment
for rollback. The original backup can be archived after approval, but do not
remove old hosting or move DNS before verifying the replacement.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Registry/DNS failure during install | Network, proxy and npm registry access; this is not solved by deleting random dependencies |
| `npm ci` fails with missing lockfile | Run `npm install`, commit a matching `package-lock.json`, then use `npm ci` |
| Framework detected incorrectly | Verify root directory and select TanStack Start |
| Empty site or missing CSS | Check build errors, Nitro configuration and local CSS imports; remove a forced `dist` output override |
| Server 404 or missing server entry | Remove a copied SPA rewrite and verify Nitro's Vercel output |
| FS monogram instead of photo | Set `portraitPath` and include the actual image at that public path |
| Build reports missing file | File name, case, extension and configuration must match exactly |
| No Download CV link | Set `cvPath` after adding the real PDF |
| No email or LinkedIn button | Add a real contact method to `site.config.json` |
| Old icon or social preview | Check the deployed asset, then allow for browser/social cache refresh |
| Old site still shown on domain | Verify the hostname's DNS records and propagation; do not change email records |

## Official references

Vercel TanStack Start: `https://vercel.com/docs/frameworks/full-stack/tanstack-start`

Nitro Vercel provider: `https://nitro.build/deploy/providers/vercel`

Vercel domain setup: `https://vercel.com/docs/domains/working-with-domains/add-a-domain`

Vercel plan eligibility: `https://vercel.com/docs/plans/hobby`
