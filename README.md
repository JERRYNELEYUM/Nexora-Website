# Nexora Smart Services Ltd website
React + Vite + TypeScript + Tailwind CSS 3 + React Router.
## Setup
`npm install` then `npm run dev` (local) or `npm run build` (outputs `dist`).
## Editing
- Services, products, industries, portfolio projects and blog posts: `src/data/content.tsx`.
- Phone numbers and WhatsApp number: top of `src/data/content.tsx` (WhatsApp uses the first number).
- Replace `YOUR-DOMAIN` in `public/robots.txt`, `public/sitemap.xml` and `.env` (`VITE_SITE_URL`).
- Add the official email and office addresses on the Contact page once supplied.
- Contact form: with no `VITE_FORM_ENDPOINT` it opens a prefilled WhatsApp message. Set an endpoint (POST JSON) to send elsewhere.
## Backup
Keep the project in Git. `git add . && git commit -m "Update"`.
## GitHub
`git init && git add . && git commit -m "Initial site"`, create an empty GitHub repo, then `git remote add origin <url> && git push -u origin main`.
## Cloudflare Pages
Create a project, connect the GitHub repo, build command `npm run build`, output directory `dist`. Add `VITE_SITE_URL` under environment variables. `public/_redirects` handles page refreshes on routes.
