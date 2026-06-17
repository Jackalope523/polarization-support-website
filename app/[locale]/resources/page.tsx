import type { Metadata } from 'next';
import Link from 'next/link';
import { audiences } from './resources-data';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Resources for parents, teachers, and mental health professionals concerned about polarization and radicalization in Québec.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            Resources
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight">
            Support for the people standing closest.
          </h1>
          <p className="mt-8 font-serif text-lg leading-8 text-muted">
            Polarization rarely touches just one person. Whether you are a
            parent, a teacher, or a professional, there is a path forward and
            resources to help you take it. Choose what fits you best.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[1192px] px-6 py-16">
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line-strong bg-line-strong sm:grid-cols-3">
            {audiences.map((audience) => (
              <li key={audience.slug} className="bg-background">
                <Link
                  href={`/resources/${audience.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-brand-soft/50">
                  <h2 className="font-serif text-2xl tracking-tight">
                    {audience.navLabel}
                  </h2>
                  <p className="mt-3 flex-1 font-serif text-[15px] leading-7 text-muted">
                    {audience.intro.split('.')[0]}.
                  </p>
                  <span className="mt-6 text-sm font-medium text-brand group-hover:text-brand-dark">
                    View resources →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <p className="font-serif text-lg leading-8 text-muted">
            Not sure which of these fits you? It doesn&apos;t matter. If you are
            concerned about someone, contact us and we will point you to the
            right people — including clinical help, social workers, and partner
            resources across Québec.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}

