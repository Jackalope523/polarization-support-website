import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  const concerns = t.raw('concerns') as string[];
  const goals = t.raw('goals') as { title: string; body: string }[];

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[1192px] px-6 py-24 sm:py-32">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('eyebrow')}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-7xl">
            {t.rich('heroTitle', {
              highlight: (chunks) => (
                <span className="block text-brand">{chunks}</span>
              ),
            })}
          </h1>
          <p className="mt-8 max-w-xl font-serif text-xl leading-8 text-muted">
            {t('heroBody')}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark">
              {t('heroCtaPrimary')}
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center px-2 text-base text-muted underline underline-offset-4 transition-colors hover:text-foreground">
              {t('heroCtaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-brand-soft">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-brand">
            {t('concernsEyebrow')}
          </p>
          <ul className="mt-6">
            {concerns.map((concern, i) => (
              <li
                key={concern}
                className="flex gap-6 border-b border-brand/15 py-7 last:border-b-0">
                <span className="pt-1 text-sm font-medium tabular-nums text-brand">
                  0{i + 1}
                </span>
                <p className="font-serif text-2xl leading-9">{concern}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            {t('concernsClosing')}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-[1192px] gap-10 px-6 py-20 md:grid-cols-[200px_1fr]">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('helpEyebrow')}
          </p>
          <div className="max-w-[680px]">
            <p className="font-serif text-3xl leading-[1.35] tracking-tight">
              {t('helpPara1')}
            </p>
            <p className="mt-8 font-serif text-3xl leading-[1.35] tracking-tight">
              {t('helpPara2')}
            </p>
            <p className="mt-8 font-serif text-lg leading-8 text-muted">
              {t.rich('helpPara3', {
                link: (chunks) => (
                  <Link
                    href="/contact"
                    className="text-foreground underline underline-offset-4">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[1192px] px-6 py-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('missionEyebrow')}
          </p>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {goals.map((goal, i) => (
              <div key={goal.title}>
                <p className="text-sm font-medium tabular-nums text-brand">
                  0{i + 1}
                </p>
                <h2 className="mt-3 text-xl font-bold tracking-tight">
                  {goal.title}
                </h2>
                <p className="mt-3 font-serif text-[17px] leading-7 text-muted">
                  {goal.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-[1192px] gap-10 px-6 py-20 md:grid-cols-[200px_1fr]">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t('whoEyebrow')}
          </p>
          <div className="max-w-[680px]">
            <p className="font-serif text-3xl leading-[1.35] tracking-tight">
              {t('whoPara1')}
            </p>
            <p className="mt-8 font-serif text-lg leading-8 text-muted">
              {t('whoPara2')}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight">
            {t('ctaTitle')}
          </h2>
          <p className="mt-5 font-serif text-lg leading-8 text-muted">
            {t.rich('ctaBody', {
              phone: (chunks) => (
                <a
                  href="tel:+14388242718"
                  className="text-foreground underline underline-offset-4">
                  {chunks}
                </a>
              ),
              email: (chunks) => (
                <a
                  href="mailto:info@polarisationsupport.ca"
                  className="text-foreground underline underline-offset-4">
                  {chunks}
                </a>
              ),
            })}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark">
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
