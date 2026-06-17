import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceDownloads } from "@/components/ResourceDownloads";
import { audiences, getAudience } from "../resources-data";

export function generateStaticParams() {
  return audiences.map((audience) => ({ audience: audience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience: slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};
  return {
    title: audience.title,
    description: audience.intro,
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience: slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-24">
          <Link
            href="/resources"
            className="text-sm text-muted underline underline-offset-4 hover:text-foreground"
          >
            ← All resources
          </Link>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight">
            {audience.title}
          </h1>
          <p className="mt-8 font-serif text-lg leading-8 text-muted">
            {audience.intro}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            Downloads
          </h2>
          <div className="mt-6">
            <ResourceDownloads downloads={audience.downloads} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <p className="font-serif text-lg leading-8 text-muted">
            Have a question these documents don&apos;t answer? We&apos;re here
            to talk it through — confidentially and free of charge.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
