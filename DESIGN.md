# Design

## Source of truth

- Status: Active
- Last refreshed: 2026-08-03
- Primary product surfaces: homepage, publications index, publication detail pages
- Evidence reviewed: `_pages/about.md`, `_includes/publication-card.html`, `_layouts/publication.html`, `_sass/_modern-home.scss`, and [Junquan Deng's homepage](https://pvz122.github.io/)

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
- Tradeoffs: small semantic icons replace institution logos until approved logo assets are available.

## Visual language

- Color: warm light surface with restrained teal accent and an accessible dark theme
- Typography: large, compact name treatment; legible sans-serif body copy; small all-caps section labels
- Spacing/layout rhythm: wide desktop reading column, generous section gaps, compact rows for updates and credentials
- Shape/radius/elevation: low-radius resource buttons and soft education icon fields; no decorative card shadows
- Motion: brief hover feedback only; respect reduced-motion preferences
- Imagery/iconography: research project figures and familiar Font Awesome / Academicons symbols with text labels

## Components

- Existing components to reuse: `publication-card`, modern homepage sections, theme toggle, Font Awesome and Academicons
- New/changed components: typed publication resource buttons, compact news rows, education rows with a semantic degree icon and linked school name
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
- Offline/slow network: homepage remains readable when remote project images do not load

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

## Open questions

- [ ] Consider replacing generic degree icons with approved ICT and Peking University logo assets if Jingyi wants institutional marks displayed.
