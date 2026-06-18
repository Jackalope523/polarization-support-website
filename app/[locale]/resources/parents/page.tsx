import type { Metadata } from 'next';
import { AudiencePage, audienceMetadata } from '@/components/AudiencePage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return audienceMetadata(locale, 'parents');
}

export default async function ParentsResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AudiencePage locale={locale} slug="parents" />;
}
