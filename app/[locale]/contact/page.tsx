import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const methods = [
  { key: "email", href: "mailto:info@polarisationsupport.ca" },
  { key: "liveChat", href: null },
] as const;

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t("eyebrow")}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-8 font-serif text-lg leading-8 text-muted">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <ul>
            {methods.map((method) => (
              <li
                key={method.key}
                className="border-b border-line py-8 first:pt-0 last:border-b-0 last:pb-0"
              >
                <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                  {t(`methods.${method.key}.label`)}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-3 inline-block font-serif text-3xl tracking-tight text-foreground underline-offset-4 hover:underline max-md:active:underline"
                  >
                    {t(`methods.${method.key}.value`)}
                  </a>
                ) : (
                  <p className="mt-3 font-serif text-3xl tracking-tight text-foreground">
                    {t(`methods.${method.key}.value`)}
                  </p>
                )}
                <p className="mt-3 font-serif text-base leading-7 text-muted">
                  {t(`methods.${method.key}.note`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            {t("expectHeading")}
          </h2>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            {t("expectBody")}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <div className="border-l-2 border-foreground pl-6">
            <h2 className="text-base font-bold tracking-tight">
              {t("emergencyHeading")}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">
              {t.rich("emergencyBody", {
                crisis: (chunks) => (
                  <a
                    href="tel:988"
                    className="text-foreground underline underline-offset-4"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
