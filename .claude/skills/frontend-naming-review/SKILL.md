---
name: frontend-naming-review
description: Review frontend/src file/folder organization and naming conventions for consistency. Use when reviewing a PR or diff that adds, moves, or renames files under frontend/src, or when asked to check naming consistency, file organization, or folder structure in the frontend.
---

This skill documents the naming and organization conventions for
`frontend/src/`, established 2026-06 when the tree was migrated from a
mixed PascalCase/snake_case `components/` blob to a flat, kebab-case,
feature-based layout. Use it as the checklist when reviewing any diff
that touches `frontend/src/`.

## The rules

1. **Every folder and file name is lowercase kebab-case.** Multi-word
   names use hyphens: `landing-page`, `binomial-distribution-card`,
   `project-cards`. No PascalCase, camelCase, or snake_case anywhere
   in a path.
2. **Exception: code identifiers, not paths.** React component/export
   names inside a file stay PascalCase per normal JS/React convention
   — only the file and folder name are kebab-case. Example:
   `about/about.tsx` exports `AboutPage`; `city/seoul/seoul.tsx`
   exports `Seoul` and `SeoulResumeComponent`. Don't flag a PascalCase
   `export const Foo` as a violation — only flag PascalCase/snake_case
   in the *file path*.
3. **A page/feature's main file matches its folder name**, not a
   generic name. `landing-page/landing-page.tsx`, not
   `landing-page/index.tsx` or `landing-page/LandingPage.tsx`. This
   makes the file tree scannable without opening files.
4. **Single-word folders stay a single lowercase word** — don't
   hyphenate `resume` into `re-sume`. Hyphens are only for genuine
   multi-word names.
5. **Dead code is archived, not deleted.** Code unreachable from
   `app.tsx`'s router goes in `unused/`, with the same kebab-case
   rules applied, so it doesn't silently rot with broken imports that
   are extra-confusing to debug later. It's still expected to type-check
   independent of being dead (imports should resolve) unless it was
   *already* broken before the move (e.g. referencing files deleted in
   an earlier commit) — don't "fix" those, just don't make them worse.

## Where things live (as of this migration)

```
src/
├── app.tsx, index.tsx, index.css      # entry points, exempt from feature grouping
├── landing-page/                      # the "/" route — kept top-level, not nested in city/ or pages/
├── city/<city-name>/                  # one folder per city sub-page (seoul, london, seattle)
├── about/, resume/                    # single-page features
├── projects/                          # the interactive-projects listing + everything under it
│   ├── projects.tsx                   # the listing page itself
│   ├── bar-chart.tsx, slider.tsx      # generic chart widgets used by probability pages
│   ├── probabilities/<distribution>/  # one folder per probability distribution page
│   └── project-cards/                 # small preview-card components linked from projects.tsx
├── features/
│   ├── navigation/                    # navbar
│   └── mouse/                         # mouse-driven effects (e.g. the WebGL fluid background)
├── styles/                            # cross-cutting CSS with no single owning component
├── unused/                            # archived/dead code, not imported by app.tsx
└── images/                            # untouched by this convention — own (separate) review
```

**New top-level folder rule of thumb:** a folder under `src/` should
correspond to either a route/page (`city`, `about`, `resume`,
`landing-page`, `projects`) or a cross-cutting concern (`features`,
`styles`). If a new file doesn't obviously belong to an existing
folder, that's worth a comment in review rather than silently dropping
it in the nearest folder.

## Review checklist for a diff touching `frontend/src/`

- [ ] New/renamed files and folders are lowercase kebab-case (rule 1).
- [ ] No PascalCase/snake_case has crept back into a *path* (component
      export names inside the file are fine — see rule 2).
- [ ] A new page/feature's main file is named after its folder, not
      `index.tsx` or a generic name (rule 3).
- [ ] Every `import`/`url()` path in a moved or renamed file was
      updated — run `npx tsc -p tsconfig.app.json --noEmit` from
      `frontend/` and confirm no *new* errors versus the base branch
      (some pre-existing errors are expected; see Known pre-existing
      issues below — don't let new ones hide among them).
  - When checking, count from the same fixed baseline below — new
    deviations in count or content (not just total > 0) are the signal,
    since the baseline itself may shift if someone resolves one.
- [ ] If a file moved into or out of `unused/`, confirm that's
      intentional (i.e. it actually is/isn't reachable from
      `app.tsx`'s router) rather than a stray drag.
- [ ] CSS `url(...)` and JS image-import relative paths were
      recalculated for the new file depth, not just search-replaced
      (a file moving up or down a directory level changes how many
      `../` it needs even if the target didn't move).

## Known pre-existing issues (not introduced by the naming migration — don't re-flag)

- `resume/resume.tsx` uses `require('../../images/...')` for some
  image imports, which doesn't type-check cleanly under the project's
  strict ESM `tsconfig.app.json` (`Cannot find name 'require'`).
- `unused/home.tsx` imports two files that don't exist
  (`HomeComponent/ResumeTab/ResumeHomeComponent`,
  `HomeComponent/AboutTab/AboutHomeComponent`) — they were deleted in
  an earlier commit before this file was archived. Leave as-is; it's
  dead code already.
- `projects/projects.tsx` has an unused `React` import
  (`noUnusedLocals` flags it).
- `city/seattle/seattle.tsx` references several images
  (`cafes.jpg`, `worldCup.jpg`, `laMer.jpg`, `ascend.jpg`,
  `queenAnne.jpg`, `spaceNeedle.jpg`) that don't match the actual
  filenames in `images/CityPage/Seattle/` (which has `cafe.jpg`,
  `lamer.jpg`, `altitude.jpg`, `queenanne.jpg`, `spaceneedle.jpg`, and
  no `worldCup` equivalent at all). This is unrelated in-progress work,
  not a naming-convention issue — flag it as a separate bug, not as
  part of a naming review.

## Migration history

This structure replaced a `components/` tree that mixed PascalCase
folders (`AboutPage/`, `CityPage/Seoul/`), snake_case files
(`binomial_distribution.tsx`, `cancer_analysis.tsx`), and a typo
(`probabilities/bionomial/` → fixed to `binomial/`). Notable renames:

| Old | New |
|---|---|
| `components/LandingPage/LandingPage.tsx` | `landing-page/landing-page.tsx` |
| `components/CityPage/Seoul/SeoulResumeComponent.tsx` | `city/seoul/seoul.tsx` |
| `components/navigation-bar/Navbar.tsx` | `features/navigation/navbar.tsx` |
| `components/tools/BackgroundFluid.tsx` | `features/mouse/background-fluid.tsx` |
| `components/tools/{bar-chart,slider}.tsx` | `projects/{bar-chart,slider}.tsx` |
| `components/interactive-projects/` | `projects/` |
| `.../ProjectCards/binomial_distribution.tsx` | `projects/project-cards/binomial-distribution-card.tsx` |
| `components/Global.css`, `Section.css` | `styles/global.css`, `styles/section.css` |
| `App.tsx` | `app.tsx` |

Dead code moved (not deleted) into `unused/`: `Home.tsx`,
`PortfolioHomeComponent`, three orphaned project cards
(cancer/breast-cancer/korea-export), `analysis.tsx`, `types.tsx`,
`resumeideas.tsx` — none of these were reachable from `app.tsx`'s
router at time of migration.
