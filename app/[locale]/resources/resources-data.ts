import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

/** A value provided in every supported locale. */
export type Localized<T> = Record<Locale, T>;

export type ResourceDownload = {
  /** Display name of the document, per locale. */
  title: Localized<string>;
  /** Optional one-line description of what the document covers, per locale. */
  description?: Localized<string>;
  /**
   * Path to the file under /public, per locale, e.g.
   * { en: "/resources/en/guide.pdf", fr: "/resources/fr/guide.pdf" }.
   * The active locale's file is served, so French visitors get the French PDF.
   */
  file: Localized<string>;
  /** Optional human-readable size, per locale, e.g. "PDF · 1.5 MB". */
  meta?: Localized<string>;
};

/** A download with its localized fields resolved to a single active locale. */
export type ResolvedDownload = {
  title: string;
  description?: string;
  file: string;
  meta?: string;
};

export type AudienceSlug = "parents" | "teachers" | "professionals";

export type Audience = {
  slug: AudienceSlug;
  /**
   * PDF downloads for this audience. Leave empty to show a "coming soon" state.
   *
   * To add one: drop the EN/FR PDFs in `public/resources/en/` and
   * `public/resources/fr/`, then add an entry with both paths:
   *   {
   *     title: { en: "Talking to your teen", fr: "Parler à votre ado" },
   *     file: { en: "/resources/en/talking.pdf", fr: "/resources/fr/parler.pdf" },
   *   }
   */
  downloads: ResourceDownload[];
};

/**
 * Structural data only. The user-facing text for each audience (nav label,
 * page title, intro) lives in `messages/<locale>.json` under the `Audiences`
 * namespace, keyed by slug.
 */
export const audiences: Audience[] = [
  {
    slug: "parents",
    downloads: [
       {
        title: {
          en: "Preventing Online Radicalization",
          fr: "Prévenir la radicalisation en ligne",
        },
        file: {
          en: "/resources/en/prev-radicalization-pamphlet.pdf",
          fr: "/resources/fr/prev-radicalization-pamphlet.pdf",
        },
        meta: { en: "PDF · 450 KB", fr: "PDF · 448 ko" },
      },
      {
        title: { en: "Best Practices in the Context of Social Tensions", fr: "Bonnes pratiques en contexte de tensions sociales" },
        file: {
          en: "/resources/en/raps-reassure-and-protect.pdf",
          fr: "/resources/fr/raps-rassurer-et-proteger.pdf",
        },
        meta: { en: "PDF · 1.5 MB", fr: "PDF · 98 ko" },
      },
    ],
  },
  {
    slug: "teachers",
    downloads: [
       {
        title: {
          en: "Intervening After a Violent Incident",
          fr: "Intervenir après un incident violent",
        },
        file: {
          en: "/resources/en/raps-intervening-after-a-violent-incident.pdf",
          fr: "/resources/fr/raps-intervenir-apres-un-incident-violent.pdf",
        },
        meta: { en: "PDF · 841 KB", fr: "PDF · 636 ko" },
      },
      {
        title: {
          en: "Interventions Against Social Polarization in the Classroom",
          fr: "Interventions en classe contre la polarisation sociale",
        },
        file: {
          en: "/resources/en/raps-interventions-against-social-polarization-in-the-classroom.pdf",
          fr: "/resources/fr/raps-interventions-en-classe-contre-la-polarisation-sociale.pdf",
        },
        meta: { en: "PDF · 781 KB", fr: "PDF · 392 ko" },
      },
      {
        title: {
          en: "Polarization and DEI: Interventions in the School Setting",
          fr: "Polarisation et DEI: interventions en milieu scolaire",
        },
        file: {
          en: "/resources/en/raps-polarization-and-dei.pdf",
          fr: "/resources/fr/raps-polarisation-et-dei.pdf",
        },
        meta: { en: "PDF · 179 KB", fr: "PDF · 112 ko" },
      },
    ],
  },
  {
    slug: "professionals",
    downloads: [
      {
        title: {
          en: "Handbook for Practitioners",
          fr: "Manuel pour les praticiens",
        },
        file: {
          en: "/resources/en/ran-h-and-sc-handbook-for-practitioners.pdf",
          fr: "/resources/fr/ran-h-and-sc-handbook-for-practitioners.pdf",
        },
        meta: { en: "PDF · 1.0 MB", fr: "PDF · 531 ko" },
      },
      {
        title: {
          en: "Toolkit for Social Workers",
          fr: "Boîte à outils pour les travailleurs sociaux",
        },
        file: {
          en: "/resources/en/precobias-toolkit-for-social-workers.pdf",
          fr: "/resources/fr/precobias-toolkit-for-social-workers.pdf",
        },
        meta: { en: "PDF · 1.5 MB", fr: "PDF · 1,5 Mo" },
      },
      {
        title: {
          en: "Preventing Online Radicalization",
          fr: "Prévenir la radicalisation en ligne",
        },
        file: {
          en: "/resources/en/prev-radicalization-pamphlet.pdf",
          fr: "/resources/fr/prev-radicalization-pamphlet.pdf",
        },
        meta: { en: "PDF · 450 KB", fr: "PDF · 448 ko" },
      },
      {
        title: { en: "Best Practices in the Context of Social Tensions", fr: "Bonnes pratiques en contexte de tensions sociales" },
        file: {
          en: "/resources/en/raps-reassure-and-protect.pdf",
          fr: "/resources/fr/raps-rassurer-et-proteger.pdf",
        },
        meta: { en: "PDF · 1.5 MB", fr: "PDF · 98 ko" },
      },
    ],
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((audience) => audience.slug === slug);
}

function toLocale(locale: string): Locale {
  return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
}

/**
 * Resolve an audience's downloads to a single locale: pick the matching-language
 * title, description, and file, and URL-encode the path so accented filenames
 * resolve correctly.
 */
export function resolveDownloads(
  downloads: ResourceDownload[],
  locale: string,
): ResolvedDownload[] {
  const active = toLocale(locale);
  return downloads.map((download) => ({
    title: download.title[active],
    description: download.description?.[active],
    file: encodeURI(download.file[active]),
    meta: download.meta?.[active],
  }));
}
