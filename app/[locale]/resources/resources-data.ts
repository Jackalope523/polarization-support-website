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
        title: { en: "RAPS: Reassure and protect", fr: "RAPS: Rassurer et protéger" },
        file: {
          en: "/resources/en/RAPS-Reassure-and-protect.pdf",
          fr: "/resources/fr/RAPS-Rassurer-et-proteger.pdf",
        },
        meta: { en: "PDF · 1.5 MB", fr: "PDF · 98 ko" },
      },
      {
        title: {
          en: "Preventing online radicalization",
          fr: "Prévenir la radicalisation en ligne",
        },
        file: {
          en: "/resources/en/PREV_pamphlet01_online-rad_test14-en.pdf",
          fr: "/resources/fr/PREV_pamphlet01_online-rad_test15-fr.pdf",
        },
        meta: { en: "PDF · 450 KB", fr: "PDF · 448 ko" },
      },
    ],
  },
  {
    slug: "teachers",
    downloads: [
      {
        title: {
          en: "Interventions against social polarization in the classroom",
          fr: "Interventions en classe contre la polarisation sociale",
        },
        file: {
          en: "/resources/en/Interventions+against+social+polarization+in+the+classroom.pdf",
          fr: "/resources/fr/Interventions+en+classe+contre+la+polarisation+sociale_Exemples+chiosis+(Marie)+30.09.2024.pdf",
        },
        meta: { en: "PDF · 781 KB", fr: "PDF · 392 ko" },
      },
      {
        title: {
          en: "Polarization and DEI interventions in the school setting",
          fr: "Polarisation et DEI : interventions en milieu scolaire",
        },
        file: {
          en: "/resources/en/Polarization+and+DEI+Interventions+in+the+School+Setting_1.8.2024.pdf",
          fr: "/resources/fr/Polarisation+et+DEI+_+Interventions+en+milieu+scolaire_français+(30.09.2024).pdf",
        },
        meta: { en: "PDF · 179 KB", fr: "PDF · 112 ko" },
      },
      {
        title: {
          en: "Intervening after a violent incident",
          fr: "Intervenir après un incident violent",
        },
        file: {
          en: "/resources/en/Guide_Intervening+after+a+violent+incident_Augsut+2024+(30.09.2024).pdf",
          fr: "/resources/fr/Guide-intervenir+après+un+incident+violent_août+2024+(30.09.2024).pdf",
        },
        meta: { en: "PDF · 841 KB", fr: "PDF · 636 ko" },
      },
    ],
  },
  {
    slug: "professionals",
    downloads: [
      {
        title: {
          en: "PRECOBIAS: toolkit for social workers",
          fr: "PRECOBIAS : boîte à outils pour les travailleurs sociaux",
        },
        file: {
          en: "/resources/en/PRECOBIAS-Toolkit-for-social-workers-EN.pdf",
          fr: "/resources/fr/PRECOBIAS-Toolkit-for-social-workers-FR.pdf",
        },
        meta: { en: "PDF · 1.5 MB", fr: "PDF · 1,5 Mo" },
      },
      {
        title: {
          en: "Extremism, radicalisation and mental health: a handbook for practitioners",
          fr: "Extrémisme, radicalisation et santé mentale : manuel pour les praticiens",
        },
        file: {
          en: "/resources/en/ran_h-sc_handbook-for-practitioners_extremism-radicalisation-mental-health_112019_en.pdf",
          fr: "/resources/fr/ran_h-sc_handbook-for-practitioners_extremism-radicalisation-mental-health_112019_fr.pdf",
        },
        meta: { en: "PDF · 1.0 MB", fr: "PDF · 531 ko" },
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
