import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-line-strong">
      <div className="mx-auto w-full max-w-[1192px] px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-bold tracking-tight">
              Polarisation Support
            </p>
            <p className="mt-3 font-serif text-[15px] leading-6 text-muted">
              Free and confidential psychosocial support in Québec, in
              collaboration with RAPS.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                Pages
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-muted hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted hover:text-foreground">
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted hover:text-foreground">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted hover:text-foreground">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                Reach us
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+14388242718"
                    className="text-muted hover:text-foreground">
                    438-824-2718
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@polarisationsupport.ca"
                    className="text-muted hover:text-foreground">
                    info@polarisationsupport.ca
                  </a>
                </li>
                <li className="text-muted">Replies within 24h, Mon–Fri</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-[13px] text-muted">
          <p>
            If someone is in immediate danger, call 911. In crisis, call or text
            9-8-8 anytime.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Polarisation Support · Privacy policy
            available in English and French on request.
          </p>
        </div>
      </div>
    </footer>
  );
}
