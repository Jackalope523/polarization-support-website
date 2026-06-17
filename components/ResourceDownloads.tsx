import type { ResourceDownload } from "@/app/[locale]/resources/resources-data";

function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function ResourceDownloads({
  downloads,
}: {
  downloads: ResourceDownload[];
}) {
  if (downloads.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-line-strong bg-brand-soft/40 px-6 py-10 text-center">
        <p className="font-serif text-lg text-foreground">
          Resources are on the way.
        </p>
        <p className="mt-2 font-serif text-base leading-7 text-muted">
          We&apos;re preparing downloadable guides for this page. In the
          meantime, reach out and we&apos;ll share what you need directly.
        </p>
      </div>
    );
  }

  return (
    <ul className="border-t border-line">
      {downloads.map((download) => (
        <li key={download.file} className="border-b border-line">
          <a
            href={download.file}
            download
            className="group flex items-center gap-5 py-5 transition-colors hover:bg-brand-soft/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <DownloadIcon />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium text-foreground">
                {download.title}
              </span>
              {download.description ? (
                <span className="mt-0.5 block font-serif text-[15px] leading-6 text-muted">
                  {download.description}
                </span>
              ) : null}
            </span>
            {download.meta ? (
              <span className="hidden shrink-0 text-[13px] uppercase tracking-[0.08em] text-muted sm:block">
                {download.meta}
              </span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
