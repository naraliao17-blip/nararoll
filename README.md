# nararoll

Film photography + writing site. Built with Astro, deployed free on Cloudflare Pages.

## Deploy (one-time)

1. Push this repo to GitHub (repo name: `nararoll`).
2. Cloudflare dashboard → Workers & Pages → Create application → Pages → Continue to Pages → Connect to Git → pick this repo.
3. Build settings: Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Deploy. Site is live at `nararoll.pages.dev` (or whatever Cloudflare assigns if taken).

## Add a new post

1. Copy `POST_TEMPLATE.md` into `src/content/posts/`, rename it, fill it in.
2. Drop any photos into `public/photos/` (compress to ~2000px on the long edge first).
3. Commit. Cloudflare rebuilds automatically in about a minute.

## Change the look

Open `src/site.config.ts` and change the `theme` line to `'film'`, `'mono'`, or `'editorial'`. Commit. That's it — no content files need touching.

## Local preview (optional)

```
npm install
npm run dev
```
