'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

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
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            className="-mr-2 flex h-10 w-10 items-center justify-center text-foreground md:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>
      {menuOpen ? (
        <nav
          id="mobile-menu"
          className="border-t border-line px-6 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === link.href
                  ? 'block py-2.5 text-sm text-foreground'
                  : 'block py-2.5 text-sm text-muted transition-colors hover:text-foreground active:text-foreground'
              }>
              {t(link.key)}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
