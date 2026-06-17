import type { Metadata } from 'next';
import { Geist, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import CookieBanner from '@/components/CookieBanner';
import { cookies } from 'next/headers';
import { GoogleTagManager } from '@next/third-parties/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Polarisation Support — We can help',
    template: '%s — Polarisation Support',
  },
  description:
    'Free and confidential psychosocial support in Québec for anyone concerned about a loved one drifting toward risky ideologies.',
};

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

