# Visual direction

The September 2026 redesign is inspired by Arknights: Lone Trail's Apollo-era scientific and editorial visual language. Its references were researched and actual interface/artwork images were visually inspected before implementation.

## References

- [Official event trailer — Arknights / Yostar](https://www.youtube.com/watch?v=U_laI-G21fo)
- [Official event teaser — Arknights / Yostar](https://www.youtube.com/watch?v=vDDcG6fSMms)
- [Official event introduction graphic](https://x.com/ArknightsEN/status/1721731700479422519) — cream architectural surfaces, orange numbered sections, round scientific diagrams, charcoal typography.
- [Event menu screenshot](https://stat.ameba.jp/user_images/20231127/01/eule/ae/a5/p/o1600090015369668333.png) — warm graphite, white geometric symbols, orbit lines, tiny tracked labels, rust/mustard/mint registration stripes.

The palette is an authored interpretation, not a claim to use official brand values. The orbital scene and monogram are original SVG artwork; event artwork is not shipped with the website. Existing local project images are retained.

## Page and behavior

- Large geometric masthead, dark orbital illustration, selected projects, then personal links.
- Space Grotesk is retained for the Lymdun masthead and wordmarks. Other headings use Michroma, with Barlow supporting text and IBM Plex Mono technical labels, loaded through Google Fonts with system fallbacks.
- Square edges, fine rules, warm paper and graphite; accents are restrained.
- Responsive two-column project layout and three-column links layout stack on phones.
- A simple circular marker follows the original orbit. Clipped cloud bands drift beneath fixed lighting and an atmospheric rim; the secondary orbit and traveling trajectory highlight add subtle movement. The links section uses the original circular registration graphic.
- All SVG animations share one pause control; system reduced-motion preferences disable them and show a truthful static status. Motion uses CSS transforms and stroke offsets rather than animating filter parameters or running JavaScript animation loops.
- Keyboard focus styles, skip link, descriptive image alternatives, and semantic headings.
- `/projects` redirects to `/#projects`; `/about` redirects to `/`; unknown URLs display a styled 404 with a home link.

## Content

Contact and social destinations come from the existing website. Project descriptions were checked against [AstolfoBot on Top.gg](https://top.gg/fr/bot/917838231788204062) and [Fateful Bullet on Steam](https://store.steampowered.com/app/3055070/Fateful_Bullet/). The old 2025 release promise and historical bot metrics were removed.

Main copy and personal links live in `src/views/Home.vue`, project content in `src/components/Projects.vue`, shared tokens in `src/assets/main.css`, and landing-page styles in `src/assets/home.css`.
