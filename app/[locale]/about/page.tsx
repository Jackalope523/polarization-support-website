import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default function AboutPage() {
  const t = useTranslations('About');

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
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('whatHeading')}
          </h2>
          <p className="mt-6 font-serif text-2xl leading-9">
            {t('whatPara1')}
          </p>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            {t('whatPara2')}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('whoHeading')}
          </h2>
          <p className="mt-6 font-serif text-2xl leading-9">
            {t('whoPara1')}
          </p>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            {t('whoPara2')}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <p className="font-serif text-lg leading-8 text-muted">
            {t('closing')}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark">
            {t('contactButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
