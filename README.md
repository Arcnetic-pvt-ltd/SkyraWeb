# SkyRa — Water Solutions Platform

Next.js 16.2.10 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Pages

| Route | File |
|---|---|
| Landing | `src/app/page.tsx` |
| Services & Solutions | `src/app/services/page.tsx` |
| About | `src/app/about/page.tsx` |
| Contact | `src/app/contact/page.tsx` |

Header, footer, and the floating WhatsApp widget are shared layout, rendered once in `src/app/layout.tsx` around every page.

## Design sources

Built primarily from the Figma file `KFZImPx5Perim8H0rMtcFp` via the Figma MCP server. Figma's Starter-plan monthly tool-call quota (20 calls/month) was exhausted partway through the Landing page's build, before Services/About/Contact could be pulled from Figma at all. For everything after that point, the project's own HTML reference build (`stitch_skyra_water_solutions_platform/`, a Google Stitch export, one `code.html` + `screen.png` per screen) was used instead for copy, structure, and real asset URLs.

That reference build is **not visually consistent with itself** — the Landing HTML matches the Figma-verified design system closely, but the Services/About/Contact HTML each use a *different* Stitch-generated design system (different exact brand colors, different body fonts, different icon sets — Material Symbols on Services/About, Lucide on Contact, vs. Landing's plain SVG icons). Rather than importing each page's design system wholesale — which would have made the site look like four different products — every page after Landing was re-skinned onto the single token/component system established from Figma, keeping only the source's content and layout structure. This is called out in a comment at the top of each affected page file.

## Design tokens

Defined in `src/app/globals.css`. `get_variable_defs` returned empty for the Figma file (no Figma Variables/Styles exist in it), so these were derived by sampling raw values across sections — and nearly all of them turned out to be **exact matches for Tailwind v4's default theme** (spacing, radii, font sizes/line-heights, letter-spacing, most colors, most shadows). Component code uses Tailwind's default utilities directly wherever a default matches; custom tokens exist only for what's genuinely brand-specific:

| Token | Value | Used for |
|---|---|---|
| `--color-brand-teal` | `#0098a6` | Wordmark "Sky", eyebrow accents, links, kickers |
| `--color-brand-green` | `#00c896` | Primary CTA / WhatsApp action color |
| `--color-ink` | `#05151d` | Dark surfaces (hero, header, footer, dark sections) |
| `--color-ink-elevated` | `#0d1e26` | Raised elements on ink (dark pill buttons, cards) |
| `--font-sans` | Plus Jakarta Sans | All type, loaded via `next/font/google` |
| `--shadow-cta-glow` | tinted green shadow | Primary CTA button |

Everywhere else: Tailwind defaults — e.g. `slate-50…950`, `emerald-500`, `sky-600`, `amber-600`, `rounded-2xl`/`rounded-3xl`, `text-6xl`/`tracking-tight`, `shadow-sm`/`shadow-2xl`.

## Component structure

```
src/app/
  layout.tsx              Root layout — header, footer, WhatsApp widget, font
  page.tsx                Landing
  services/page.tsx       Services & Solutions
  about/page.tsx          About
  contact/page.tsx        Contact

src/components/
  layout/                 Shared across every page
    site-header.tsx         Fixed nav, hamburger overlay below md
    site-footer.tsx
    whatsapp-widget.tsx      Floating fixed-corner link
    logo.tsx                 SkyRa wordmark (header/footer size variants)

  shared/
    final-cta.tsx           "Your water problem has a solution" — reused
                             verbatim on Landing, Services, About, Contact
                             (identical copy/contact info in every source)

  ui/                      Generic primitives
    container.tsx            max-w-[1280px] content container, used everywhere
    eyebrow.tsx               "— LABEL" section kicker (dash / no-dash / centered variants)
    button.tsx                CtaButton — primary/secondary/secondary-teal/dark variants

  landing/                 Landing-page sections (see src/app/page.tsx for order)
    hero.tsx, problem-section.tsx, opportunity-banner.tsx, core-solutions.tsx,
    solution-card.tsx, how-it-works.tsx, impact-metrics.tsx, metric-card.tsx,
    bigger-vision.tsx, vision-pillar.tsx

  services/                Services-page sections
    services-hero.tsx, rainwater-harvesting.tsx, stormwater-management.tsx,
    implementation-process.tsx, sector-capabilities.tsx, sector-card.tsx,
    inline-cta-box.tsx

  about/                   About-page sections
    about-hero.tsx, our-story.tsx, what-drives-us.tsx, our-reach.tsx, the-team.tsx

  contact/                 Contact-page sections
    contact-hero.tsx, contact-channels.tsx, consultation-form.tsx (client
    component — controlled form, native required-field validation, local
    success state; submit handler is a marked TODO, nothing is posted
    anywhere)

  icons/                   Inline SVG icon components, one file per related
                            group (whatsapp, arrow, menu, problem, solution,
                            vision, metric, service, about, contact icons).
                            No icon fonts, no <img> icons.

src/lib/
  nav.ts                   Shared nav links, WhatsApp number, contact details
```

**Reused across ≥2 places**, per the brief's instruction to extract rather than repeat: `Container`, `Eyebrow`, `CtaButton`, `Logo`, `WhatsAppIcon`, `ArrowRightIcon`, `FinalCta` (3 pages), `WaterSecurityIcon` / `DropletIcon` / `CheckIcon` (cross-page icon reuse where the concept matches).

## Responsive assumptions

The Figma file has desktop frames only (1280/1417/1294/1280px). Everything below was derived, not designed — applied consistently through every page as it was built, not as a separate retrofit pass:

- **Container**: the four differing frame widths are artboard padding, not four designs — every section's real content wrapper is `max-w-[1280px]` regardless of frame. Normalized to one `Container` component, `px-5` → `sm:px-6` → `lg:px-8`.
- **Header**: nav links + CTA collapse to a hamburger below `md`, opening a full-screen overlay menu (`site-header.tsx`). Note: the header's `backdrop-blur` had to live on an *inner* wrapper, not `<header>` itself — `backdrop-filter` on an ancestor establishes a new containing block for `position: fixed` descendants, which was collapsing the mobile overlay to a sliver (see that file's comment; caught via screenshot verification, not assumed).
- **Grids**: every multi-column grid (service cards, capability badges, metric cards, sector cards, team cards, phase cards, footer rows) collapses to 1 column below `md`/`lg` depending on density; a few 2-up at `sm`/`md` before going to full width.
- **Opportunity Banner flow diagram**: Figma positions this with absolute `calc(50% ± Npx)` offsets sized for one fixed desktop width. Rebuilt as a wrapping flex row with text-arrow separators instead — same content/order, no fixed positioning to break at narrow widths.
- **Impact Metrics dashboard**: 3-column grid stacks to 1 column below `lg`; count-up and progress-bar animations are unaffected by breakpoint.
- **Type**: no fluid `clamp()` scaling was needed — Tailwind's responsive prefixes (`text-4xl sm:text-5xl lg:text-6xl`, etc.) cover every heading actually used; body text never drops below 14px/16px.
- **Section padding**: kept on Tailwind's default scale at every breakpoint rather than a separate mobile-reduced value — the default scale already reads fine at 320–768px for this design's spacing rhythm.
- **Nothing scrolls horizontally at 320px**: verified with a script driving headless Chrome via CDP (comparing `document.documentElement.scrollWidth` to `window.innerWidth`, not just a visual check) on every page at 320/375/768/1280px — see verification notes below.

## Known gaps / TODOs before launch

- **`src/components/contact/consultation-form.tsx`**: submit handler is a stub (marked `TODO` in code) — no backend, CRM, or email service is wired up.
- **`src/components/about/the-team.tsx`**: all four profiles are placeholder content *in the source itself* (generic names, initials-only avatars, explicitly commented "Skeleton Avatar Placeholder" in the reference HTML). Needs real founder names/photos/bios.
- **Source photography** is 512×279px natively across every page (confirmed the same asset at that resolution in both the Figma export and the HTML reference — not a fetch issue on this end). Soft when stretched to full width/card size; worth commissioning real photography.
- **Footer legal links** (`Privacy Policy`, `Terms of Service`, `KSPCB Compliance`) point to `#` — no destination pages exist in the four-page scope.
- Social links (Instagram/LinkedIn/YouTube on Landing/About/Contact, Facebook added on Contact) point to `#` — no real profile URLs were in any source.
- `npm audit` reports 3 high-severity advisories in Next.js itself; the fix requires bumping past the pinned `16.2.10` to `16.3.4`. Left pinned as requested — bump on request.

## Verification performed

No browser automation tool was available in this environment, so all visual/interaction verification was done by driving headless Chrome directly over the DevTools Protocol (scripts not included in the repo — ad hoc, run from a scratch directory) for every page:

- Full-page screenshots at 1280px, compared against Figma/reference screenshots section by section.
- Overflow check at 320/375/768/1280px via `document.documentElement.scrollWidth` vs `window.innerWidth` (not just a visual glance) — zero horizontal scroll at any width, on any page.
- Console error/warning capture on every page — zero errors.
- Mobile-width screenshots (375px) reviewed section by section for stacking/overlap.
- The mobile nav overlay and the consultation form's submit flow (empty-submit blocked, filled-submit shows success, no network call) were exercised programmatically, not just visually inspected.

`npm run build` and `npm run lint` are clean (zero TypeScript errors, zero ESLint errors) as of the last change to this repo.
