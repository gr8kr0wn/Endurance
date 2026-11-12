# Endurance — portfolio website

A static site: no build step. Open `index.html` locally, or deploy the folder as is (Vercel, Netlify or GitHub Pages).

## Pages
- `index.html`: home (hero, about, case studies, videos, skills, proof of work, contact)
- `nige.html`, `gamdom.html`, `sovra.html`: the three case studies

## Editing
Most of the content you'll want to change lives at the top of `assets/js/site.js`:

- `SITE`: email, socials, the Proof of Work and Drive links, and the live domain (`url`).
  - **LinkedIn:** uncomment the `linkedin:` line and paste the full URL. It then shows up in the footer and on the CV automatically.
- `VIDEOS`: the homepage video showcase. Each item is either `{ type: "drive", id }`, using the file ID from a Drive link (`/file/d/<ID>/view`), or `{ type: "x", id }`, using the post ID from an X link.
- `CV`: the text used by the **Download CV** button. The PDF is generated in the browser with jsPDF, which is bundled in `assets/js/vendor`.

## Notes
- Video thumbnails and the popup player use Google Drive's own preview, so the Drive files must stay shared as "Anyone with the link".
- Telegram member names in the Nige collage are blurred for privacy.
