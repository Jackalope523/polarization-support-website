import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { audiences } from './resources-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Resources' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default function ResourcesPage() {
  const t = useTranslations('Resources');
  const tAudiences = useTranslations('Audiences');

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('eyebrow')}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight">
            {t('title')}
          </h1>
          <p className="mt-8 font-serif text-lg leading-8 text-muted">
            {t('intro')}
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
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-brand-soft/50 max-md:active:bg-brand-soft/50">
                  <h2 className="font-serif text-2xl tracking-tight">
                    {tAudiences(`${audience.slug}.navLabel`)}
                  </h2>
                  <p className="mt-3 flex-1 font-serif text-[15px] leading-7 text-muted">
                    {tAudiences(`${audience.slug}.intro`).split('.')[0]}.
                  </p>
                  <span className="mt-6 text-sm font-medium text-brand group-hover:text-brand-dark max-md:group-active:text-brand-dark">
                    {t('viewResources')}
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
            {t('closing')}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark max-md:active:bg-accent-dark">
            {t('contactButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
