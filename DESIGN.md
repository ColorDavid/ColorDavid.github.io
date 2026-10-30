# Design

## Source of truth

- Status: Active
- Last refreshed: 2026-10-30
- Primary product surfaces: homepage, publications index, publication detail pages
- Evidence reviewed: `_pages/about.md`, `_includes/publication-card.html`, `_layouts/publication.html`, `_sass/_modern-home.scss`, and [Junquan Deng's homepage](https://pvz122.github.io/)
- Applied guidance: [Landing page design skill](https://github.com/elayadesign/ai-design-skills/blob/main/skills/landing-page-design/SKILL.md) and [Redesign existing projects skill](https://github.com/elayadesign/redesign-skill/blob/main/skills/redesign-existing-projects/SKILL.md). Adopted type/spacing scales, focused in-place redesign, neutral surfaces, accessible states, and a stronger visual hierarchy. Marketing sections, decorative navigation, and new icon dependencies are intentionally omitted for this academic site.
- EngiWorld metadata checked against its [project](https://engiworld.github.io/), [arXiv entry](https://arxiv.org/abs/2609.37686), and [repository](https://github.com/Hongcheng-Gao/EngiWorld). The publication date is the first arXiv submission, September 29, 2026. Author order is preserved; abbreviated lists expand to all authors.

## Brand

- Personality: clear, research-led, contemporary, and quietly confident
- Trust signals: accurate paper metadata, readable research figures, named resources, and accessible external links
- Avoid: generic card grids, decorative effects without research meaning, fabricated activity metrics, and a current institutional affiliation after graduation

## Product goals

- Goals: make Jingyi's research easy to scan, show concrete work before generic labels, and provide unmistakable paths to papers, projects, code, data, and models
- Non-goals: reproduce another researcher's visual identity or turn the site into a dashboard
- Success signals: visitors can identify research themes, open a paper resource, and understand education history without parsing a dense CV

## Personas and jobs

- Primary personas: prospective collaborators, hiring researchers, conference peers, and students
- User jobs: understand current research, evaluate publications, contact Jingyi, and verify academic background
- Key contexts of use: desktop research browsing and quick mobile scanning from a paper or search result

## Information architecture

- Primary navigation: Research, News, Publications, Education
- Core routes/screens: homepage, all publications index, publication detail page
- Content hierarchy: identity and research statement, selected projects, news, publications, education

## Design principles

- Let research artifacts carry visual interest; layout should not compete with figures or titles.
- Use compact, labeled actions for publication resources instead of bare text links.
- Use structure and typography rather than surrounding every module with a card.
- Tradeoffs: education uses the official ICT and Peking University marks, cropped to their circular emblems so the small row treatment remains legible.

## Visual language

- Color: warm light surface with restrained teal accent and an accessible dark theme
- Typography: Manrope at 400–700, 48px desktop name, 24px section headings, 18px publication titles, 16px body copy; no duplicated section eyebrows
- Spacing/layout rhythm: 1040px reading column, 64px section gaps, larger project figures, compact news and education rows
- Shape/radius/elevation: 4px resource buttons and 8px images; no decorative portrait frame, card outlines, cropping, or shadows
- Motion: brief hover feedback only; respect reduced-motion preferences
- Imagery/iconography: research project figures, official school marks for education, and familiar Font Awesome / Academicons symbols with text labels

## Components

- Existing components to reuse: `publication-card`, modern homepage sections, theme toggle, Font Awesome and Academicons
- New/changed components: shared `publication-resources` include, two image-led project features, native author disclosures, compact news, official school marks, keyboard skip link
- Variants and states: paper, project, code, data, and model actions; hover and keyboard-focus styles must remain apparent
- Token/component ownership: `_sass/_modern-home.scss` owns homepage and publication presentation; content remains in `_pages`, `_publications`, and `_data`

## Accessibility

- Target standard: WCAG 2.1 AA for contrast, focus, and readable type
- Keyboard/focus behavior: every resource and institution link receives a visible focus ring
- Contrast/readability: resource buttons retain text labels and do not rely on icons or color alone
- Screen-reader semantics: decorative icons are hidden; resource groups and education entries have descriptive labels
- Reduced motion and sensory considerations: retain the existing reduced-motion rules

## Responsive behavior

- Supported breakpoints/devices: desktop, tablet, and narrow mobile screens
- Layout adaptations: education dates move beneath content on narrow screens; resource buttons wrap without truncation; news remains a two-column date/content list until the smallest breakpoint
- Touch/hover differences: touch users retain visible labels and do not depend on hover-only content

## Interaction states

- Loading: native image loading only; no blocking visual skeleton is required
- Empty: hide an unavailable publication resource rather than show a disabled button
- Error: external links remain ordinary anchors and open in a new tab where applicable
- Success: no submit flows
- Disabled: not applicable
- Offline/slow network: project images are stored locally and lazy loaded; the text and resource links remain usable independently

## Image provenance

- `images/projects/engiworld-showcase.jpg`: EngiWorld's official task-video poster, `https://engiworld.github.io/assets/videos/EngiWorld_88Tasks_70s_20261009.jpg`.
- `images/projects/engiworld-overview.webp`: official benchmark figure, `https://engiworld.github.io/assets/figures/benchmark_overview.webp`.
- `images/projects/spatialworld.png`: `https://raw.githubusercontent.com/Hongcheng-Gao/SpatialWorld/main/assets/spatialworld_main.png`.
- `images/projects/simpletes.png`: `https://raw.githubusercontent.com/wq-will/SimpleTES/main/assets/simpletes-overview.png`.
- `images/projects/haven.png`: `https://raw.githubusercontent.com/Hongcheng-Gao/HAVEN/main/Fig/Main.png`.
- Assets are unchanged project materials, not generated illustrations. The full graduation photograph remains unchanged.

## Content voice

- Tone: direct, precise, and research-first
- Terminology: use Paper, Project, Code, Data, and Model consistently
- Microcopy rules: label every icon; keep news to one concise, factual sentence

## Implementation constraints

- Framework/styling system: Jekyll / Academic Pages with Sass overrides and GitHub Pages deployment
- Design-token constraints: reuse `--site-*` custom properties in `_sass/_modern-home.scss`
- Performance constraints: add no new JavaScript or external UI framework for these patterns
- Compatibility constraints: retain native links and server-rendered content
- Test/screenshot expectations: validate generated markup, responsive CSS, and the production deployment after each change
- Validation: GitHub Pages-compatible Jekyll build and `_scripts/check-homepage.rb`; browser checks at 1280px, 390px, and 320px, including author disclosures, theme switching, mobile navigation and Escape. Publication images are shown in full without cover-cropping.

## Open questions

- [ ] No open design decision currently.

## Hallmark polish — 2026-10-30

- Mode: redesign / polish, scoped to the existing homepage and shared publication presentation. Reviewed [Hallmark](https://github.com/Nutlope/hallmark); its source was inspected in a temporary checkout, not installed globally. The existing palette, Manrope, academic content hierarchy and unboxed layout remain locked.
- Kept: all 36 existing unique homepage link destinations, seven publications, full biography and research links, contact labels, figures, routes, education entries and native author disclosures. No page or component was deleted. Resource icons retain their text labels.
- Changes: aligned the masthead to the 1040px content column; placed project names before topic captions; removed redundant external-arrow decorations and white gallery padding; consolidated figure/font tokens; themed selection; kept immediate focus outlines and reduced-motion support; added standard search/Open Graph descriptions. SpatialWorld retains its full column width after review rejected an initial smaller treatment.
- Copy changes: “Engineering agents · 2026” → “Engineering agents”; “Spatial reasoning · 2026” → “Spatial reasoning”. Their years remain in Publications. “View all →” → “View all”; “← All publications” → “All publications”. Biography and academic titles were not rewritten. No abstract blurbs were introduced.
- Functional fix found during review: greedy navigation previously restored only one hidden link per resize. It now remeasures all links after resize and font readiness, restores every desktop destination, and preserves mobile menu handlers. Compiled JavaScript was regenerated using the existing build command. CSS/JS receive build-version query strings so returning visitors do not retain obsolete assets.
- HAVEN content correction, separate from visual polish: [ACL Anthology](https://aclanthology.org/2026.tacl-1.116/) and [Crossref](https://api.crossref.org/works/10.1162/TACL.a.813) verify TACL 2026, volume 14, pages 2500–2527, DOI 10.1162/tacl.a.813, online October 13, 2026. The journal spells the author name “Liang Li”. The Paper button uses the supplied publisher link, with separate arXiv and Code buttons. The old detail permalink remains; `preprint_date` preserves March 25, 2025. Removed unused, outdated preprint highlights rather than presenting them as journal results. Added an October News item and the verified journal citation to the detail page.
- Verification: Jekyll build, generated-markup checks, JavaScript syntax and whitespace checks pass. Browser checks cover 320, 375, 768, 1024, 1280, 1440 and 1920px; no measured content overflow. Narrow-to-wide navigation restores all links. Checked mobile menu/Escape, light/dark themes, keyboard author disclosure and visible 2px focus. The full photograph and research images retain their aspect ratios.
- Review: fresh-context Hallmark finish reviewer initially identified the navigation restoration defect and reduced SpatialWorld readability; both fixed, final screenshot verdict “ship”. Before/after artifacts were captured at 1440px. The old page's full-width diagram was retained because it was more legible.
- Lint scope: static Hallmark comparison preserved 36/36 homepage links. Browser rendering was checked through the available browser interface, not Hallmark's Puppeteer runner. The scanner still reports legacy theme/icon-font rules and marketing-oriented budgets; this is **not** a claim of full Hallmark certification or a complete accessibility audit. A broader theme replacement is outside this polish.
