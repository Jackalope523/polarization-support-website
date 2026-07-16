# Polarisation Support

**A bilingual, accessibility-minded support website for a Québec psychosocial service** — helping people who are worried about a loved one drifting toward radicalization find free, confidential help.

Built with the Next.js App Router, fully internationalized (English / French), server-rendered, and SEO-optimized.

🔗 **Live:** [polarisationsupport.ca](https://polarisationsupport.ca) · Delivered in collaboration with RAPS

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-1f6feb)

---

## About the project

This is a production website for a public-interest service in Québec. Its audience is people in a difficult moment such as parents, teachers, and clinicians concerned about someone close to them. The priorities were **clarity, trust, calm design, and access in both official languages.**

Because much of the audience is French-first, the site is **French by default** and fully mirrored in English, with every route, resource, and PDF served in the visitor's language.

## What it demonstrates

| Area | Highlights |
|------|-----------|
| **Internationalization** | End-to-end EN/FR with locale-prefixed routing, middleware-based locale negotiation, and translated metadata — content and code cleanly separated |
| **Modern Next.js** | App Router, React Server Components, Server Actions, streaming layouts, per-locale dynamic metadata |
| **SEO & sharing** | Per-locale Open Graph + Twitter cards, dynamic `metadataBase`, semantic markup, title templating |
| **Privacy & compliance** | Cookie-consent gate with an `httpOnly` server-set cookie; analytics and third-party scripts load *only* after consent |
| **Content architecture** | Structural data (TypeScript) separated from copy (translation catalogs); localized PDF resources resolved per audience and language |
| **Design & UX** | Editorial typographic system (Geist + Source Serif), fully responsive, mobile-tuned interactions, live-chat support |

## Tech stack

- **Framework:** Next.js 16 (App Router) · React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **i18n:** `next-intl` (locale routing + middleware, `en` / `fr`, French default)
- **State/data:** React Server Components + Server Actions
- **Integrations:** Google Tag Manager (consent-gated), Tawk.to live chat
- **Tooling:** ESLint (`eslint-config-next`), Google Fonts optimization via `next/font`

## Engineering highlights

**Bilingual by construction, not bolted on.**
Routing lives under `app/[locale]/`, with `next-intl` middleware negotiating the locale and every page pulling copy from per-locale message catalogs. Even resource downloads resolve to the right language so a French visitor gets the French PDF with accented filenames URL-encoded so they resolve correctly.

**Consent-first analytics.**
The cookie banner writes an `httpOnly`, `secure` consent cookie through a Server Action and revalidates the layout. Google Tag Manager is rendered **only** when consent has been granted — privacy is the default state, not an afterthought.

**Clean separation of content and structure.**
Audience data (which resources belong to *parents* vs. *teachers* vs. *professionals*) is modeled in typed TypeScript, while all user-facing text lives in translation files. Adding a new downloadable guide is a small, well-documented data change.

**Server-first rendering.**
Pages are React Server Components with metadata generated per request and per locale, keeping the client bundle lean and the content indexable.

## Project structure

```
app/[locale]/          Locale-scoped routes (home, about, contact, resources)
  resources/           Audience pages + typed resource data
components/             Header, Footer, CookieBanner, resource downloads
i18n/                  Routing config + request/navigation helpers
lib/actions/           Server Actions (cookie consent)
messages/              en.json / fr.json translation catalogs
public/resources/      Localized PDF guides (en/ and fr/)
proxy.ts               next-intl locale middleware
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app redirects to the default locale (`/fr`); switch to `/en` for English.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```
