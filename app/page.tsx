import Link from "next/link";

const concerns = [
  "Are you concerned that someone you care about is heading toward risky ideologies?",
  "Have you noticed worrying changes in their behaviour or beliefs?",
  "Do you feel helpless about how to support them?",
];

const goals = [
  {
    title: "Support you",
    body: "We stand alongside anyone worried about a loved one's radicalization, offering a confidential and non-judgemental space to talk it through.",
  },
  {
    title: "Protect your wellbeing",
    body: "Carrying concern for someone takes a real toll. We help mitigate the impact this situation has on your own mental health.",
  },
  {
    title: "Equip you with tools",
    body: "We give you practical tools and guidance so you can be there for the person at risk, without losing yourself in the process.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[1192px] px-6 py-24 sm:py-32">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            Free &amp; confidential support in Québec
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-7xl">
            Are you concerned about someone?
            <span className="block text-brand">We can help.</span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-xl leading-8 text-muted">
            When someone you love starts drifting toward a dark place, it is
            hard to know what to do — or who to turn to. You don&apos;t have to
            carry it alone.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Reach out to us
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center px-2 text-base text-muted underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Learn how we work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-brand-soft">
        <div className="mx-auto w-full max-w-[680px] px-6 py-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-brand">
            Does this sound familiar?
          </p>
          <ul className="mt-6">
            {concerns.map((concern, i) => (
              <li
                key={concern}
                className="flex gap-6 border-b border-brand/15 py-7 last:border-b-0"
              >
                <span className="pt-1 text-sm font-medium tabular-nums text-brand">
                  0{i + 1}
                </span>
                <p className="font-serif text-2xl leading-9">{concern}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif text-lg leading-8 text-muted">
            If you answered yes to any of these, you are in the right place —
            and you are not alone.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-[1192px] gap-10 px-6 py-20 md:grid-cols-[200px_1fr]">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            What we offer
          </p>
          <div className="max-w-[680px]">
            <p className="font-serif text-3xl leading-[1.35] tracking-tight">
              Free and confidential psychosocial support in Québec — we listen
              first, then connect you with clinical help, social workers, and
              partner resources suited to your situation.
            </p>
            <p className="mt-8 font-serif text-lg leading-8 text-muted">
              We work in collaboration with RAPS, a multi-disciplinary team
              offering social support, community engagement, psychotherapy,
              psychiatry, and access to medical services.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-[1192px] px-6 py-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
            Our mission
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

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-20 text-center">
          <h2 className="font-serif text-4xl leading-tight tracking-tight">
            Talk to someone today.
          </h2>
          <p className="mt-5 font-serif text-lg leading-8 text-muted">
            Call or text us at{" "}
            <a
              href="tel:+14388242718"
              className="text-foreground underline underline-offset-4"
            >
              438-824-2718
            </a>
            , or write to{" "}
            <a
              href="mailto:info@polarisationsupport.ca"
              className="text-foreground underline underline-offset-4"
            >
              info@polarisationsupport.ca
            </a>
            . We respond within 24 hours, Monday to Friday.
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
