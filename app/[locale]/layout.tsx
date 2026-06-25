import type { Metadata } from 'next';
import { Geist, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import CookieBanner from '@/components/CookieBanner';
import { cookies, headers } from 'next/headers';
import { GoogleTagManager } from '@next/third-parties/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const requestHeaders = await headers();
  const host = requestHeaders.get('host');
  const siteUrl = host ? `https://${host}` : 'https://polarisationsupport.ca';

  const ogTitle = t('ogTitle');
  const description = t('description');

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('defaultTitle'),
      template: t('titleTemplate'),
    },
    description,
    openGraph: {
      type: 'website',
      url: '/',
      siteName: t('siteName'),
      title: ogTitle,
      description,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/twitter-image.png'],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const consent = (await cookies()).get('cookie-consent')?.value;
  const accepted = consent === 'accepted';

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${sourceSerif.variable} h-full antialiased`}>
      {accepted ? <GoogleTagManager gtmId="#TODO" /> : null}

      <Script
        id="tawk-to"
        strategy="lazyOnload"
        src="https://embed.tawk.to/670961204304e3196ad05eb1/1i9ua6q5g"
        crossOrigin="anonymous"
      />

      <body className="flex min-h-full flex-col font-sans">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          {!accepted ? <CookieBanner /> : null}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

