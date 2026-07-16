# Polarisation Support — Bilingual Psychosocial Support Website

A production website for a Québec-based support service offering free, confidential,
non-judgmental help to anyone worried about a loved one drifting toward radicalization or
risky ideologies. One codebase serves the service in both of Québec's languages, with
native-feeling URLs and fully-mirrored content in each.

| Locale | URL |
|--------|-----|
| **French** (default) | [polarisationsupport.ca/fr]([https://polarisationsupport.ca/fr](https://polarization-support-website.vercel.app/fr)) |
| **English** | [polarisationsupport.ca/en]([https://polarisationsupport.ca/en](https://polarization-support-website.vercel.app/en) |

Built in collaboration with RAPS, a multi-disciplinary team spanning social support,
psychotherapy, psychiatry, and medical services.

---

## Why this project is worth a look

This is a live public service with real constraints: a vulnerable audience reaching out at a
hard moment, two official languages that must stay in perfect sync, privacy/consent law, SEO
and social-sharing requirements, and the need to be reachable through whatever channel a
person in distress is comfortable with.

## Tech stack

- **Next.js 16** — App Router, React Server Components, Server Actions
- **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — design system built from theme tokens (`@theme` + CSS custom properties)
- **next-intl v4** — internationalization + locale-aware routing and middleware
- **Vercel** — hosting & edge middleware
- Integrations: **Tawk.to** (real-time live chat), **Google Tag Manager** (consent-gated)

## Engineering highlights

**🌐 Fully bilingual, French-first**
The entire site is mirrored in English and French with locale-prefixed routing (`/fr`, `/en`),
French as the default for a Québec audience, and a language toggle that keeps you on the same
page when you switch. Locale is negotiated in `next-intl` middleware; adding a language is a
config change, not a rewrite.

**📝 Strict content/presentation separation**
Every user-facing string lives in structurally-mirrored `messages/en.json` / `messages/fr.json`
catalogs. Components are pure presentation that read from translation namespaces, so copywriters
and translators can work without touching JSX — and the two languages can't drift apart
structurally.

**🧩 Typed, localized resource library**
Downloadable PDF guides are segmented by audience (parents / teachers / mental-health
professionals) and served per-locale, so a French visitor gets the French document. The catalog
is a single typed data file — adding a guide is a small, documented data change — and empty
audiences render a graceful "coming soon" state instead of a broken page. Accented filenames are
URL-encoded so they resolve correctly.

**🔒 Privacy-first analytics & consent**
Google Tag Manager is *never injected* until the visitor explicitly accepts. Consent — both
**accept and decline** — is persisted in a secure, `httpOnly`, `SameSite` cookie set through a
**Server Action**, and the privacy policy is surfaced both in the consent banner and the footer.

**🔍 SEO & social sharing**
Per-locale `generateMetadata` produces localized titles, descriptions, and Open Graph / Twitter
cards (`fr_CA` / `en_CA`) with a 1200×630 preview image, so links shared in either language
preview correctly. `metadataBase` is derived from the request host.

**♿ Accessibility & polish**
Semantic landmarks throughout, an ARIA-labelled consent dialog (`role="dialog"`, `aria-live`),
`aria-hidden` on decorative icons, descriptive image alt text, native `download` attributes on
resource links, and a fully responsive layout with dedicated touch/tap-state feedback on mobile.

**📞 Multi-channel contact**
First-class `tel:` (call or text) and `mailto:` entry points, an embedded live-chat widget, and a
clearly surfaced emergency path (911 / the 9-8-8 crisis line) — so a visitor can reach out through
whichever channel they're comfortable with.

## What this demonstrates

- Shipping and maintaining a **real, user-facing product** with a sensitive audience.
- **Modern React/Next.js** (Server Components, Server Actions, App Router) used deliberately.
- **Internationalization at production scale** — routing, middleware, metadata, and content all localized.
- Sound judgment on **privacy, consent, SEO, and accessibility** — the parts that don't show up
  in a screenshot but matter in production.
- A clean, **content-driven architecture** that non-engineers can safely contribute to.

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to the default locale, /fr)

npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```
