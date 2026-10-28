# Thomas Gilchrist — Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to create the production site in `dist/`.

## Personalise the content

- Replace `src/assets/profile-placeholder.svg` with a portrait and update the
  image import and alt text in `src/components/Intro.tsx`.
- Update the introductory copy, email address, and social profile links in
  `src/components/Intro.tsx`.
- Edit the bio and skills in `src/components/About.tsx`.
- Add project names, descriptions, website URLs, and video file paths in
  `src/components/Projects.tsx`. Place local MP4 files in `public/videos/` and
  reference them as `/videos/your-project.mp4`.

The starter project entries and contact links are placeholders. Replace them
with your own details before publishing.

## Deploy to GitHub Pages

The Vite base path is configured for the `MG_Portfolio` repository. A GitHub
Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site
to GitHub Pages when changes are pushed to `main`. Enable **GitHub Actions** as
the Pages build and deployment source in the repository settings.
