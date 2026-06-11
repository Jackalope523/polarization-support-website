import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach Polarisation Support by phone, text, or email. Free and confidential — we respond within 24 hours, Monday to Friday.",
};

const methods = [
  {
    label: "Call or text",
    value: "438-824-2718",
    href: "tel:+14388242718",
    note: "Leave a message if we can't pick up — we will get back to you.",
  },
  {
    label: "Email",
    value: "info@polarisationsupport.ca",
    href: "mailto:info@polarisationsupport.ca",
    note: "Share as much or as little as you are comfortable with.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            Contact us
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] tracking-tight">
            Reaching out is the first step.
          </h1>
          <p className="mt-8 font-serif text-lg leading-8 text-muted">
            Everything you tell us is confidential, and our support is free. We
            respond within 24 hours, Monday to Friday.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <ul>
            {methods.map((method) => (
              <li
                key={method.label}
                className="border-b border-line py-8 first:pt-0 last:border-b-0 last:pb-0"
              >
                <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
                  {method.label}
                </p>
                <a
                  href={method.href}
                  className="mt-3 inline-block font-serif text-3xl tracking-tight text-foreground underline-offset-4 hover:underline"
                >
                  {method.value}
                </a>
                <p className="mt-3 font-serif text-base leading-7 text-muted">
                  {method.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            What to expect
          </h2>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            A member of our team will listen to your situation without
            judgement, help you make sense of what you are seeing, and — if it
            would help — connect you with clinical support, social workers, or
            partner resources near you in Québec.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-16">
          <div className="border-l-2 border-foreground pl-6">
            <h2 className="text-base font-bold tracking-tight">
              In an emergency
            </h2>
            <p className="mt-3 text-base leading-7 text-muted">
              If someone is in immediate danger, call 911. If you or someone
              you know is in crisis, call or text{" "}
              <a
                href="tel:988"
                className="text-foreground underline underline-offset-4"
              >
                9-8-8
              </a>{" "}
              — Canada&apos;s suicide crisis helpline, available 24/7.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
