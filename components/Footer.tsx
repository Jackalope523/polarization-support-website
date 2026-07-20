import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-line-strong">
      <div className="mx-auto w-full max-w-[1192px] px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-bold tracking-tight">{t("brand")}</p>
            <p className="mt-3 font-serif text-[15px] leading-6 text-muted">
              {t("tagline")}
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                {t("pagesHeading")}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted hover:text-foreground max-md:active:text-foreground"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted hover:text-foreground max-md:active:text-foreground"
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted hover:text-foreground max-md:active:text-foreground"
                  >
                    {t("resources")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted hover:text-foreground max-md:active:text-foreground"
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                {t("contactHeading")}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:info@polarisationsupport.ca"
                    className="text-muted hover:text-foreground max-md:active:text-foreground"
                  >
                    info@polarisationsupport.ca
                  </a>
                </li>
                <li className="text-muted">{t("replies")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-[13px] text-muted">
          <p>{t("emergency")}</p>
          <p className="mt-2">
            {t.rich("copyright", {
              year: new Date().getFullYear().toString(),
              privacy: (chunks) => (
                <a
                  href={t("privacyHref")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground max-md:active:text-foreground"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
