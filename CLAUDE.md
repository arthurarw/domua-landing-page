# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # start dev server at localhost:3000
pnpm build      # production build
pnpm lint       # ESLint (Next.js + TypeScript rules)
```

No test suite is configured.

## Architecture

Single-page marketing landing for **Domua**, a Brazilian real estate CRM SaaS. The entire site lives in one Next.js App Router route (`/`).

**Page composition** (`src/app/page.tsx`):

```
<header class="hero-bg">   ← dark navy gradient background
  <Navbar />
  <HeroSection />
</header>
<main>
  <LogoBar />              ← social proof logos
  <ProblemSection />
  <FeaturesSection />
  <BenefitsSection />
  <TestimonialsSection />
  <CtaSection />           ← id="planos", anchor for CTA buttons
</main>
<Footer />
```

**Client vs. Server Components**: `Navbar` is the only `"use client"` component (mobile menu toggle state). Everything else is a Server Component.

**`DashboardMock`**: A fully static JSX component that simulates the product UI (no real data, no interactivity). It lives in `HeroSection`'s right column.

**`src/app copy/`**: An archived vanilla-CSS version of the page kept for reference. Not part of the active build.

## Styling

Tailwind CSS v4 (`@import "tailwindcss"` — no `tailwind.config.js`).

All reusable component classes and background utilities are defined in `globals.css` under `@layer components`. Add new UI primitives there rather than inlining long utility chains.

**Custom design tokens** (`domua-blue`, `domua-text`, `domua-border`, `domua-muted`, `domua-navy-deep`, `domua-blue-pale`, `domua-blue-soft`, `shadow-dash`) are referenced via `@apply` throughout components and `globals.css` but are **not yet declared in a `@theme {}` block**. In Tailwind v4, custom tokens must be declared inside `@theme {}` in a CSS file. If styles using these tokens appear broken, that is why.

**Fonts**: `Plus_Jakarta_Sans` (headings, `--font-plus-jakarta`) and `Inter` (body, `--font-inter`), loaded via `next/font/google` in `layout.tsx`.

## SEO / Metadata

- `layout.tsx` exports full `Metadata` with OpenGraph, Twitter card, and canonical URL (`https://domua.com.br`).
- `src/app/sitemap.ts` generates `/sitemap.xml` via Next.js App Router convention.
- `src/app/robots.ts` generates `/robots.txt`.
- All copy is in **Brazilian Portuguese** (`lang="pt-BR"`).

## Path alias

`@/*` resolves to `./src/*` (configured in `tsconfig.json`).
