'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

const links = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/resources', key: 'resources' },
  { href: '/contact', key: 'contact' },
] as const;

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Header');

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const otherLabel = locale === 'fr' ? 'English' : 'Français';

  return (
    <header className="sticky top-0 z-50 border-b border-line-strong bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[57px] w-full max-w-[1192px] items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-foreground">
          <Image
            src="/heart-love.png"
            alt={t('logoAlt')}
            width={32}
            height={32}
            priority
          />
          {t('brand')}
        </Link>
        <nav className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? 'text-sm text-foreground'
                    : 'text-sm text-muted transition-colors hover:text-foreground max-md:active:text-foreground'
                }>
                {t(link.key)}
              </Link>
            ))}
          </div>
          <Link
            href={pathname}
            locale={otherLocale}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark max-md:active:bg-accent-dark">
            {otherLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
