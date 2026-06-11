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
  /** Short label used in nav and cards, e.g. "Parents". */
  navLabel: string;
  /** Page heading, e.g. "For parents". */
  title: string;
  /** Intro paragraph shown under the heading. */
  intro: string;
  /**
   * PDF downloads for this audience. Leave empty until the files are ready —
   * the page will show a "coming soon" state automatically.
   *
   * To add one: drop the PDF in `public/resources/<slug>/` and add an entry:
   *   { title: "Talking to your teen", file: "/resources/parents/talking.pdf", meta: "PDF · 1.1 MB" }
   */
  downloads: ResourceDownload[];
};

export const audiences: Audience[] = [
  {
    slug: "parents",
    navLabel: "Parents",
    title: "For parents",
    intro:
      "You know your child better than anyone — and that is exactly why noticing them withdraw, harden their views, or pull toward extreme online spaces is so painful. These resources can help you understand what you are seeing, keep the conversation open, and decide when and how to seek further help.",
    downloads: [],
  },
  {
    slug: "teachers",
    navLabel: "Teachers",
    title: "For teachers",
    intro:
      "Educators are often the first to notice a student isolating themselves, echoing extreme rhetoric, or shifting in worrying ways. These resources offer guidance on how to respond in the classroom, how to raise concerns appropriately, and where to refer a student or family for support.",
    downloads: [],
  },
  {
    slug: "professionals",
    navLabel: "Mental health professionals",
    title: "For mental health professionals",
    intro:
      "If a client's situation touches on radicalization or social polarization, you don't have to navigate it alone. These resources support consultation and shared care through our collaboration with RAPS — a multi-disciplinary team spanning social support, psychotherapy, psychiatry, and medical services.",
    downloads: [],
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((audience) => audience.slug === slug);
}
