'use client';

import { useTranslations } from 'next-intl';
import { setConsentCookie, declineConsentCookie } from '@/lib/actions/consent';

export default function CookieBanner() {
  const t = useTranslations('CookieConsent');

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('title')}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line-strong bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1192px] flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="flex-1 font-serif text-[15px] leading-6 text-muted">
          {t('message')}{' '}
          <a
            href="/privacy-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-brand">
            {t('learnMore')}
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => declineConsentCookie()}
            className="inline-flex h-10 items-center justify-center rounded-full border border-line-strong px-5 text-sm font-medium text-foreground transition-colors hover:bg-brand-soft">
            {t('reject')}
          </button>
          <button
            type="button"
            onClick={() => setConsentCookie()}
            className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-dark">
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
