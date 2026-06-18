import type { Metadata } from 'next';
import { AudiencePage, audienceMetadata } from '@/components/AudiencePage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return audienceMetadata(locale, 'professionals');
}

export default async function ProfessionalsResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AudiencePage locale={locale} slug="professionals" />;
}
