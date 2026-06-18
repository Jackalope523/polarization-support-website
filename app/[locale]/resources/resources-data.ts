export type ResourceDownload = {
  /** Display name of the document. */
  title: string;
  /** Optional one-line description of what the document covers. */
  description?: string;
  /** Path to the file under /public, e.g. "/resources/parents/talking-guide.pdf". */
  file: string;
  /** Optional human-readable size, e.g. "PDF · 1.2 MB". Shown next to the title. */
  meta?: string;
};

export type AudienceSlug = "parents" | "teachers" | "professionals";

export type Audience = {
  slug: AudienceSlug;
  /**
   * PDF downloads for this audience. Leave empty until the files are ready —
   * the page will show a "coming soon" state automatically.
   *
   * To add one: drop the PDF in `public/resources/<slug>/` and add an entry:
   *   { title: "Talking to your teen", file: "/resources/parents/talking.pdf", meta: "PDF · 1.1 MB" }
   */
  downloads: ResourceDownload[];
};

/**
 * Structural data only. The user-facing text for each audience (nav label,
 * page title, intro) lives in `messages/<locale>.json` under the `Audiences`
 * namespace, keyed by slug.
 */
export const audiences: Audience[] = [
  { slug: "parents", downloads: [] },
  { slug: "teachers", downloads: [] },
  { slug: "professionals", downloads: [] },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((audience) => audience.slug === slug);
}
