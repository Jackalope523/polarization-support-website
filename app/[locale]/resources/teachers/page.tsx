import type { Metadata } from 'next';
import { AudiencePage, audienceMetadata } from '@/components/AudiencePage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return audienceMetadata(locale, 'teachers');
}

export default async function TeachersResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AudiencePage locale={locale} slug="teachers" />;
}
