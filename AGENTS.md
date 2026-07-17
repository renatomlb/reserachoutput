<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Simple Research Outputs

A showcase site for research outputs (articles, datasets, preprints, reports, software).

## Stack

- **Next.js 16.2** — App Router, Turbopack, `src/` dir, `@/*` import alias
- **React 19.2**
- **Tailwind CSS v4** — CSS-first config. There is **no `tailwind.config.ts`**; theme lives in `@theme inline` inside [src/app/globals.css](src/app/globals.css)
- **shadcn/ui** — `radix-nova` style, Radix primitives, Lucide icons, CSS variables

Add components with `npx shadcn@latest add <name>`. They land in [src/components/ui/](src/components/ui/). Prefer adding a shadcn component over hand-rolling one.

## Design system — read this before writing any UI

Source of truth for the palette: [Sources/color-palette.md](Sources/color-palette.md). It is already
translated into tokens in [src/app/globals.css](src/app/globals.css) — **use the tokens, never raw hex**.

### Brand colors

| Token | Utility | Hex | Use |
|---|---|---|---|
| `--background` | `bg-background` | `#F8F8F6` | Page background |
| `--foreground` | `text-foreground` | `#0b3044` | Navy — all text, dark sections, primary buttons |
| `--gold` | `bg-gold` / `text-gold` | `#c9a84c` | Accent: links, CTAs, icons, highlights |
| `--gold-light` | `bg-gold-light` | `#e8c97a` | Subtle accents, glows |
| `--gold-dim` | `bg-gold-dim` | `#b8973b` | Hover/active for gold |

Status colors: `success` `#22c55e`, `caution` `#eab308`, `warning` `#f97316`, `error` `#ef4444`,
`urgency` `#b8860b` — as `text-success`, `bg-warning`, etc. `--destructive` aliases `--error`.

### The one rule that matters: opacity-scaled navy & gold

Do **not** introduce gray shades or new tints. Derive text hierarchy, borders and subtle
backgrounds from navy and gold at varying opacity. Because `--foreground` **is** navy, write
`text-foreground/65` rather than `text-[#0b3044]/65`.

**Navy** (`foreground`):
```
/80  → secondary body text
/65  → tertiary text, subheadlines
/50  → muted/placeholder text
/40  → faint captions, timestamps
/20  → borders (this is what --border already is)
/8   → hairline dividers, subtle section backgrounds
```

**Gold**:
```
/40  → borders on gold-tinted callout boxes
/20  → gold-tinted background fills (info boxes)
/10  → very subtle gold wash
```

### Gotcha: `accent` is not the brand accent

In shadcn, `--accent` is the **hover/active surface** token (menu items, list rows), not a brand
color. It is set to a subtle gold wash (`gold/15`). For brand gold, use `gold` / `gold-light` /
`gold-dim`. Never set `--accent` to solid gold — every dropdown hover would turn gold.

### Light theme only

There is deliberately **no `.dark` block** and no theme toggle. The palette is defined as a light
theme; a dark variant would have to be invented. Don't add `dark:` variants to new code. If dark
mode is ever wanted, that's a design decision to raise first, not to infer.

### Type

**NewTransport** (local, [src/app/fonts/](src/app/fonts/)) is the sans, wired via `next/font/local` in
[src/app/layout.tsx](src/app/layout.tsx) and exposed as `--font-new-transport` → `font-sans`
(the default on `<html>`). Available weights — **nothing else exists, don't reference others**:

| Weight | Class |
|---|---|
| 400 Regular | `font-normal` |
| 500 Medium | `font-medium` |
| 600 Semibold | `font-semibold` |
| 700 Bold | `font-bold` |

`font-mono` is Geist Mono. Fonts are committed to `src/app/fonts/` because **`Sources/` is
gitignored** — edit the copies there; `Sources/NewTransport/` is the original drop.

## Conventions

- Server Components by default. Add `"use client"` only when a component needs state, effects or browser APIs.
- Data lives in [src/lib/](src/lib/). [projects.ts](src/lib/projects.ts) is the real, current data source for
  the four flagship projects. [outputs.ts](src/lib/outputs.ts)/[output-card.tsx](src/components/output-card.tsx)
  are **fictional placeholder** content, unused on the homepage — kept around in case a future "all
  publications" list reuses the shape, not because the data is trustworthy.
- Feature components in [src/components/](src/components/); leave [src/components/ui/](src/components/ui/) to shadcn.
- Use the `cn()` helper from [src/lib/utils.ts](src/lib/utils.ts) to merge classes.
- Images that need to ship in the repo (fonts, project photos, paper PDFs) are copied out of
  `Sources/` into `src/assets/` / `public/`, because **`Sources/` is gitignored**. Edit the copies;
  `Sources/` is the original drop.

### Project timeline

[project-timeline.tsx](src/components/project-timeline.tsx) renders the four projects
(SAMURAI → MEMENTO → PRYSMA → SOON.AI) as a curved timeline, fed by
[projects.ts](src/lib/projects.ts). It's the homepage's main content.

**The curve encodes certainty, not just chronology.** Each `Project` has a `stage`:
`published` | `in-review` | `proposal`. The segment leading *into* a node is styled by that
node's stage — solid through published work, dashed once a project is only in review, dotted
and faded for an unrun proposal (SOON.AI). Don't add a project without deciding what its stage
should look like on the line; don't reorder `projects` without checking the order is still both
chronological and maturity-ordered — the whole device depends on that being true.

**Structural CSS lives in [project-timeline.module.css](src/components/project-timeline.module.css),
not Tailwind utilities.** This is a deliberate, documented exception to the rest of the app: the
alternating-side desktop layout (`nth-of-type` odd/even, per-breakpoint `translateX` nudges, a
container query) isn't expressible as readable utility classes. Colors inside it still come from
the tokens in `globals.css` (`var(--gold)`, `color-mix(in srgb, var(--foreground) 65%, transparent)`,
etc.) — there are no new hex values in the module. If you touch this file, keep it that way.

**The layout is container-query driven** (`container-type: inline-size` on the component root, not
a media query), so it reflows off its own width wherever it's placed — below 820px the serpentine
straightens into a left rail with hairline cards (added so adjacent projects stay visually
separated in one column); at 820px+ it alternates sides with the curve threading down the empty
middle column.

**The curve's SVG path is computed in JS** (`project-timeline.tsx`), not hand-authored — it reads
each node's real `getBoundingClientRect()` and generates a cubic bezier between consecutive nodes,
rebuilding on `ResizeObserver` and `document.fonts.ready`. It draws itself on scroll into view via
`IntersectionObserver` and respects `prefers-reduced-motion` (skips straight to the fully-drawn
state). If you change card heights/spacing, this keeps working without hand-tuned coordinates —
don't reintroduce fixed offsets.

**Paper links only exist where they're real.** SAMURAI and MEMENTO link out to their DOI
(`doi.org/...`), not the local PDFs in `public/papers/` — those files are now unused leftovers,
kept only until someone decides whether to delete them. PRYSMA and SOON.AI have no link — PRYSMA's
preprint link was deliberately removed, SOON.AI is an unpublished, competitively-sensitive EIC
Pathfinder proposal, not a public output. Don't add one without checking that's still true.

## Commands

```bash
npm run dev     # dev server
npm run build   # production build — run before declaring UI work done
npm run lint    # eslint
```

## Known gaps

- `outputs.ts` / `OutputCard` are fictional and unused — either wire them into a real
  "all publications" page or remove them. (`src/lib/publications.ts` +
  `PublicationsList` now cover the real "all publications" need, so removing these is likely
  the right call.)
- Project `impactTag` copy is placeholder ("Shaped exoskeleton training protocols", etc.) — real
  wording still needed. Keep it to ~30 characters; longer text wraps and breaks the pill.
- No detail page per project — cards link straight to the PDF (or nowhere, for SOON.AI).
