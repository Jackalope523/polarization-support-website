import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Polarisation Support provides specialized, confidential support to individuals and families affected by the current social climate and increasing polarization.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            About us
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight">
            A confidential space for difficult concerns.
          </h1>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            What we do
          </h2>
          <p className="mt-6 font-serif text-2xl leading-9">
            We provide specialized support to individuals and their families
            suffering from the current social climate and increasing
            polarization.
          </p>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            We offer a confidential and non-judgemental space to discuss
            concerns related to social polarization — whether you are worried
            about a loved one&apos;s changing beliefs, their behaviour, or the
            toll the situation is taking on you.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            Who we are
          </h2>
          <p className="mt-6 font-serif text-2xl leading-9">
            We work in collaboration with RAPS, a multi-disciplinary team
            offering social support, community engagement, psychotherapy,
            psychiatry, and access to medical services.
          </p>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            Alongside our regional partners, we assist individuals and families
            throughout Québec affected by contemporary social conditions that
            cause widespread distress. Our services are free, and everything
            you share with us stays confidential.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <p className="font-serif text-lg leading-8 text-muted">
            Wondering whether your situation is &ldquo;serious enough&rdquo; to
            reach out? It is. No concern is too small.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
