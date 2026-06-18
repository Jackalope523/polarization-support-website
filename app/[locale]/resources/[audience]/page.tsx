import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { ResourceDownloads } from '@/components/ResourceDownloads';
import { audiences, getAudience } from '../resources-data';

export function generateStaticParams() {
  return audiences.map((audience) => ({ audience: audience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; audience: string }>;
}): Promise<Metadata> {
  const { locale, audience: slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};
  const t = await getTranslations({ locale, namespace: 'Audiences' });
  return {
    title: t(`${audience.slug}.title`),
    description: t(`${audience.slug}.intro`),
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ locale: string; audience: string }>;
}) {
  const { locale, audience: slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  const t = await getTranslations({ locale, namespace: 'Audience' });
  const tAudiences = await getTranslations({ locale, namespace: 'Audiences' });

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-24">
          <Link
            href="/resources"
            className="text-sm text-muted underline underline-offset-4 hover:text-foreground">
            {t('backLink')}
          </Link>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight">
            {tAudiences(`${audience.slug}.title`)}
          </h1>
          <p className="mt-8 font-serif text-lg leading-8 text-muted">
            {tAudiences(`${audience.slug}.intro`)}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('downloadsHeading')}
          </h2>
          <div className="mt-6">
            <ResourceDownloads downloads={audience.downloads} />
          </div>
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
