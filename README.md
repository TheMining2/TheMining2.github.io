# Alan Koh — Portfolio

A custom, responsive three-page portfolio built with plain HTML, CSS, and JavaScript. It is designed for static hosting on GitHub Pages and requires no build step or dependencies.

## Pages
- `index.html` — Home, introduction, coding approach, featured work, internship-focused contact CTA
- `about.html` — Background, education, experience, and skills
- `works.html` — Selected project case studies

## Run locally
Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a repository. For a user site, name it `YOUR-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root (not the containing folder).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Before publishing — personalize these details
Search the files for the following:
- `https://github.com/` — replace with your exact GitHub profile URL.
- `alankoh1122@outlook.com` — verify this is the email you want public.
- LinkedIn URL — verify it is current.
- The portrait currently loads from the original Wix-hosted photo; download it into `assets/` if you want the site to be fully self-contained.
- The Resume button points to the PDF currently linked from your original Wix site; replace it with `assets/resume.pdf` if you add a local copy.
- Add project screenshots and repository/demo links to the relevant project cards.
- Confirm education, dates, skills, and project details against your latest resume.
- Consider adding a downloadable, up-to-date resume PDF in `assets/` and linking it from the header or About page.

## Design
Palette: deep slate `#111c25`, raised slate `#1b2a35`, soft white `#edf2f4`, electric blue `#8cb8ff`, and mint `#a8d8cc`. The hybrid direction pairs editorial typography and portrait photography with technical mono labels and project visuals.

Typography: Manrope for interface/headings and DM Mono for technical labels. Google Fonts is used as a progressive enhancement; system fallbacks remain available.
