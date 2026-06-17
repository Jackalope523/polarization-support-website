'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact us' },
];

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();

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
            alt="Polarisation Support logo"
            width={32}
            height={32}
            priority
          />
          Polarisation Support
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
                    : 'text-sm text-muted transition-colors hover:text-foreground'
                }>
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={pathname}
            locale={otherLocale}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark">
            {otherLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
