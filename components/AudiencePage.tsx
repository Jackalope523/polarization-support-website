import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ResourceDownloads } from '@/components/ResourceDownloads';
import { getAudience, resolveDownloads, type AudienceSlug } from '@/app/[locale]/resources/resources-data';

/**
 * Shared metadata for an audience resource page. Each static audience route
 * (`parents`, `teachers`, `professionals`) calls this from its own
 * `generateMetadata` with its fixed slug.
 */
export async function audienceMetadata(
  locale: string,
  slug: AudienceSlug,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Audiences' });
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.intro`),
  };
}

/**
 * Shared content for an audience resource page. The slug is fixed per route,
 * so there is no dynamic param to validate — `getAudience` always resolves.
 */
export async function AudiencePage({
  locale,
  slug,
}: {
  locale: string;
  slug: AudienceSlug;
}) {
  const audience = getAudience(slug)!;
  const downloads = resolveDownloads(audience.downloads, locale);

  const t = await getTranslations({ locale, namespace: 'Audience' });
  const tAudiences = await getTranslations({ locale, namespace: 'Audiences' });

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-24">
          <Link
            href="/resources"
            className="text-sm text-muted underline underline-offset-4 hover:text-foreground max-md:active:text-foreground">
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
            <ResourceDownloads downloads={downloads} />
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
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark max-md:active:bg-accent-dark">
            {t('contactButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
