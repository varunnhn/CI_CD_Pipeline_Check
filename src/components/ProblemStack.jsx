import Reveal from "./Reveal";

/* The four ways unverified input costs money. Kept deliberately plain:
 * a number, a claim, and the consequence. No stat chrome, no invented
 * benchmarks — the brochure doesn't make those claims either. */
const PROBLEMS = [
  {
    id: "synthetic-identities",
    title: "Synthetic data and form injection",
    description:
      "Bots and scrapers flood signup and checkout flows with disposable credentials, burner emails, and keyboard-mashed names. Rule-based filters wave them through before the database commit.",
    cost: "Polluted databases and dirty downstream pipelines",
  },
  {
    id: "inventory-hoarding",
    title: "Automated reservation and cart hoarding",
    description:
      "Scalpers hold limited inventory — event tickets, flash-sale stock, airline seats — under throwaway names with no intent to buy. Real customers get turned away while the slots expire unsold.",
    cost: "Locked inventory that never converts",
  },
  {
    id: "latency-dropoff",
    title: "Checkout friction and abandonment",
    description:
      "Traditional fraud tooling adds CAPTCHAs, SMS loops, and second-long delays to the one moment you cannot afford them. Every point of friction is paid for in conversions.",
    cost: "Abandoned carts from legitimate buyers",
  },
  {
    id: "downstream-waste",
    title: "False signals and downstream waste",
    description:
      "Unverified traffic distorts demand forecasting, triggers authorization fees on transactions that were never going to complete, and burns retargeting spend on accounts that do not exist.",
    cost: "Budget and compute spent on traffic that isn't real",
  },
];

export default function ProblemStack() {
  return (
    <section className="py-24 sm:py-28 relative z-10" style={{ background: "var(--canvas)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section header — left aligned, sized down so the list below can breathe */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--text-muted)" }}>
              What we solve
            </p>
            <h2
              className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              The hidden cost of unverified input.
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Four ways a bad name costs you money long after the form was submitted.
            </p>
          </Reveal>
        </div>

        {/* Editorial list — hairlines, not cards */}
        <div className="border-t border-[var(--border-strong)]">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.id} delay={i * 0.08}>
              <article className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-8 sm:py-10 border-b border-[var(--border)]">
                {/* Number + title */}
                <div className="md:col-span-5 flex gap-5">
                  <span className="font-mono text-xs text-[var(--text-muted)] pt-1.5 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl leading-snug text-[var(--text-primary)] max-w-[22ch]">
                    {problem.title}
                  </h3>
                </div>

                {/* Description + consequence */}
                <div className="md:col-span-7 pl-10 md:pl-0">
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                    {problem.description}
                  </p>
                  <p className="mt-4 font-mono text-xs text-[var(--text-primary)]">
                    <span className="text-[var(--text-muted)]">Cost — </span>
                    {problem.cost}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
