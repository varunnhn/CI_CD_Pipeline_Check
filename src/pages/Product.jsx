import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2
} from "lucide-react";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import SplitText from "../components/SplitText";
import CodeSnippet from "../components/CodeSnippet";
import BorderGlow from "../components/BorderGlow";

/* The four failure modes from the NameGuard brochure. Rendered as an
 * editorial list rather than cards — same pattern as ProblemStack. */
const PROBLEMS = [
  {
    id: "junk-in",
    title: "Junk gets in",
    body: "Keyboard mashes, placeholder text, and bot entries pass basic form checks and pollute your database.",
    result: "Polluted databases and dirty pipelines",
  },
  {
    id: "real-rejected",
    title: "Real users get rejected",
    body: "Simple rule-based filters don't understand international naming conventions and wrongly block legitimate customers.",
    result: "Frustrated legitimate customers",
  },
  {
    id: "cleanup",
    title: "Teams spend hours cleaning up",
    body: "Manual review of suspicious entries is slow, expensive, and fails to scale as signup volumes climb.",
    result: "Unscalable operational overhead",
  },
  {
    id: "cascade",
    title: "Bad data cascades",
    body: "Invalid names cause failed deliveries, broken identity checks, and unreliable customer records downstream.",
    result: "Failed KYC, chargebacks and delivery loss",
  },
];

export default function Product() {
  return (
    <div className="relative min-h-screen bg-[var(--canvas)] overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--text-inverse)]">
      
      {/* ── HERO ── */}
      <section className="pt-36 pb-16 relative z-10 overflow-hidden">
        <Backdrop src="/backdrops/product.jpg" opacity={0.08} saturation={0.35} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Breadcrumbs */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left: Headline & Core Value */}
            <div className="lg:col-span-6 min-w-0">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] mb-5">
                  High-concurrency name validation
                </p>
                <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] text-[var(--text-primary)]">
                  <SplitText delay={0.08} as="span">NameGuard API</SplitText>
                </h1>
                
                <p className="font-mono text-sm sm:text-base text-[var(--accent)] mt-3">
                  Smart Name Validation as a Service
                </p>

                <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-6 leading-relaxed max-w-[50ch]">
                  Real Names In. Fake Names Out. NameGuard AI is an intelligent name validation engine that tells you instantly whether a name entered on your platform is a genuine human name — delivered as a cloud-hosted SaaS API.
                </p>

                {/* Key Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 max-w-lg">
                  <div className="p-3 rounded-lg bg-[var(--container)] border border-[var(--border)]">
                    <p className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Latency</p>
                    <p className="font-display font-bold text-lg text-[var(--text-primary)]">&lt; 30ms</p>
                    <p className="text-[10px] text-[var(--text-muted)] font-sans">Real-time in-form</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--container)] border border-[var(--border)]">
                    <p className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Accuracy</p>
                    <p className="font-display font-bold text-lg text-[var(--text-primary)]">90%</p>
                    <p className="text-[10px] text-[var(--text-muted)] font-sans">All global regions</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--container)] border border-[var(--border)] col-span-2 sm:col-span-1 min-w-0">
                    <p className="text-[10px] font-mono uppercase text-[var(--text-muted)]">Cultural Reach</p>
                    <p className="font-display font-bold text-lg text-[var(--text-primary)]">14 Regions</p>
                    <p className="text-[10px] text-[var(--text-muted)] font-sans">Worldwide coverage</p>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-9">
                  <a
                    href="https://nameguardtest.sapinex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cta-primary"
                  >
                    Try It Yourself
                    <ExternalLink size={16} className="cta-arrow" />
                  </a>
                  
                  <Link
                    to="/contact"
                    className="group cta-secondary"
                  >
                    Request API Key
                    <ArrowUpRight size={16} className="cta-arrow" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Live Interactive Terminal / Animation Widget */}
            <div className="lg:col-span-6 relative min-w-0">
              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="rounded-2xl border border-[var(--border-strong)] overflow-hidden shadow-2xl bg-[var(--container)]">
                    <div className="px-4 py-3 bg-[var(--canvas)] border-b border-[var(--border)] flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--container)] border border-[var(--border)] text-[var(--text-primary)]">
                        Example request
                      </span>
                    </div>

                    <div className="p-2 sm:p-4 bg-[var(--canvas)]">
                      <CodeSnippet />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE PROBLEM: IF YOUR DATA IS WRONG, EVERYTHING AFTER IT IS WRONG TOO ── */}
      <section className="py-24 relative z-10 border-t border-[var(--border)] bg-[var(--container)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
                The Core Challenge
              </p>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)]">
                If your data is wrong, everything after it is wrong too.
              </h2>
              <p className="text-[var(--text-muted)] font-sans text-lg sm:text-xl mt-5 leading-relaxed">
                Every platform that accepts user-entered names faces the same dilemma: how do you stop junk without blocking real people?
              </p>
            </Reveal>
          </div>

          <div className="border-t border-[var(--border-strong)] mb-16">
            {PROBLEMS.map((problem, i) => (
              <Reveal key={problem.id} delay={i * 0.08}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-8 sm:py-10 border-b border-[var(--border)]">
                  <div className="md:col-span-5 flex gap-5 min-w-0">
                    <span className="font-mono text-xs text-[var(--text-muted)] pt-1.5 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl leading-snug text-[var(--text-primary)] max-w-[22ch]">
                      {problem.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7 pl-10 md:pl-0 min-w-0">
                    <p className="font-sans text-sm sm:text-base leading-relaxed text-[var(--text-muted)] max-w-[62ch]">
                      {problem.body}
                    </p>
                    <p className="mt-4 font-mono text-xs text-[var(--text-primary)]">
                      <span className="text-[var(--text-muted)]">Result — </span>
                      {problem.result}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* The Sapinex Solution Callout */}
          <Reveal delay={0.2}>
            <BorderGlow
              className="w-full"
              backgroundColor="var(--canvas)"
              glowColor="213 77 45"
              borderRadius={16}
              colors={['#0F2C59', '#15529E', '#0A1E3F']}
            >
            <div className="p-8 sm:p-10 relative overflow-hidden">
              <div>
                <div className="max-w-3xl">
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                    Smarter Than a Blocklist. Faster Than a Human.
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] mt-2 mb-3">
                    One Name In. One Decision Out.
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-muted)] font-sans leading-relaxed">
                    NameGuard AI catches keyboard mashing, bot-generated gibberish, test entries, joke names, fictional characters, brand names, and dictionary words — while correctly accepting real names from every culture, language, and region worldwide in under 30ms.
                  </p>
                </div>
              </div>
            </div>
            </BorderGlow>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS: 3-STAGE VALIDATION PIPELINE ── */}
      <section className="py-24 relative z-10 border-t border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
                Validation Pipeline
              </p>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)]">
                How it works.
              </h2>
              <p className="text-[var(--text-muted)] font-sans text-lg sm:text-xl mt-5 leading-relaxed">
                NameGuard AI doesn't rely on a single check or a static word list. It runs every name through a multi-stage validation pipeline in under 30ms.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Stage 1: Instant Rule-Based Screening */}
            <Reveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-lg text-[var(--text-primary)]">
                      1. Instant Screening
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--canvas)] border border-[var(--border)] text-[var(--accent)]">
                      Rule-Based
                    </span>
                  </div>
                  
                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed mb-6">
                    Catches structurally invalid input immediately with zero compute waste:
                  </p>

                  <ul className="space-y-3 font-mono text-xs text-[var(--text-primary)]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span><strong>Syntax & Symbols:</strong> Numbers, illegal symbols, and punctuation anomalies.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span><strong>Homoglyph Attacks:</strong> Mixed character sets and deceptive lookalike glyphs.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span><strong>Prank & Placeholder:</strong> Common test phrases, repeated chars, and known joke entries.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Fast, deterministic exit with clear rejection codes.
                </div>
              </div>
            </Reveal>

            {/* Stage 2: AI Ensemble Analysis */}
            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-lg text-[var(--text-primary)]">
                      2. AI Ensemble
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--canvas)] border border-[var(--border)] text-[var(--accent)]">
                      Parallel Models
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed mb-6">
                    Multiple parallel models evaluate different aspects of what makes a name real:
                  </p>

                  <ul className="space-y-3 font-mono text-xs text-[var(--text-primary)]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span><strong>Phonetics & Spelling:</strong> How the name sounds and conforms to authentic phonetic structures.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span><strong>Non-Name Matching:</strong> Checks against brands, pop-culture personas, and dictionary nouns.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                      <span><strong>14 Naming Regions:</strong> Cultural patterns across South Asia, East Asia, Europe, Africa, Middle East, and Latin America.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Ensemble output is more reliable than any single rule.
                </div>
              </div>
            </Reveal>

            {/* Stage 3: Calibrated Final Decision */}
            <Reveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-lg text-[var(--text-primary)]">
                      3. Final Decision
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--canvas)] border border-[var(--border)] text-[var(--accent)]">
                      Calibrated Output
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed mb-6">
                    All model signals combine into a single score and clear tri-state outcome:
                  </p>

                  <ul className="space-y-3 font-mono text-xs text-[var(--text-primary)]">
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">VALID</span>
                      <span className="pt-0.5">Name is accepted as genuine human name.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold whitespace-nowrap">NEEDS REVIEW</span>
                      <span className="pt-0.5">Borderline case for secondary review.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold">INVALID</span>
                      <span className="pt-0.5">Rejected with an actionable reason code.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Under 30ms. No manual review for clear-cut cases.
                </div>
              </div>
            </Reveal>

          </div>

          {/* Privacy & Compliance Guarantee */}
          <Reveal delay={0.3}>
            <div className="p-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    Zero-PII Storage
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1 max-w-2xl leading-relaxed">
                    NameGuard AI evaluates names entirely in-flight. Inputs are never logged to disk or shared with third parties, keeping you compliant with GDPR and data residency laws.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold px-4 py-2 rounded-full bg-[var(--canvas)] border border-[var(--border)] text-[var(--accent)] whitespace-nowrap">
                Zero-PII &amp; UK GDPR Aligned
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHERE IT'S USED: FROM SIGNUP FORMS TO BOARDING PASSES ── */}
      <section className="py-24 relative z-10 border-t border-[var(--border)] bg-[var(--container)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
                Where It's Used
              </p>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)]">
                From signup forms to boarding passes.
              </h2>
              <p className="text-[var(--text-muted)] font-sans text-lg sm:text-xl mt-5 leading-relaxed">
                NameGuard AI fits into your existing workflows with no disruption — wherever your platform accepts a name, NameGuard AI can validate it.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Use Case 1: Banking & Fintech */}
            <Reveal delay={0.1}>
              <div className="p-7 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                    Banking & Fintech
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-2 mb-3">
                    KYC & Account Opening
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Clean name data at account opening, before it hits your KYC pipeline, stopping synthetic accounts without blocking real international customers.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Impact: Eliminates wasted KYC & bureau fees
                </div>
              </div>
            </Reveal>

            {/* Use Case 2: Travel & Ticketing */}
            <Reveal delay={0.15}>
              <div className="p-7 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                    Travel & Ticketing
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-2 mb-3">
                    Passenger Booking
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Catch passenger name errors at booking to avoid costly correction fees and prevent scalper bots from locking up ticket inventory.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Impact: Avoids costly passenger name change fees
                </div>
              </div>
            </Reveal>

            {/* Use Case 3: E-Commerce */}
            <Reveal delay={0.2}>
              <div className="p-7 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                    E-Commerce
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-2 mb-3">
                    High-Volume Checkout
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Prevent failed package deliveries and chargebacks from fake buyer names, while ensuring frictionless checkout for real shoppers.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Impact: Stops delivery failures & dispute fees
                </div>
              </div>
            </Reveal>

            {/* Use Case 4: SaaS & App Signups */}
            <Reveal delay={0.25}>
              <div className="p-7 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                    SaaS & App Signups
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-2 mb-3">
                    Registration Forms
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Filter bot registrations, disposable trial accounts, and keyboard-mashing at the door to keep your customer database pristine.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Impact: Zero bot registration pollution
                </div>
              </div>
            </Reveal>

            {/* Use Case 5: Healthcare & Government */}
            <Reveal delay={0.3}>
              <div className="p-7 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                    Healthcare & Government
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-2 mb-3">
                    Patient & Citizen Records
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Ensure accurate patient and citizen name records at intake before data syncs to electronic health records (EHR) and identity registries.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Impact: 100% reliable clinical record integrity
                </div>
              </div>
            </Reveal>

            {/* Use Case 6: Drop-In API */}
            <Reveal delay={0.35}>
              <div className="p-7 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                    Cloud-Hosted SaaS
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-2 mb-3">
                    Drop-In Integration
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    No infrastructure to manage and no models to train. Integrate directly into your frontend forms, backend middleware, or edge workers in minutes.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Impact: Deploy in minutes, not weeks
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── API SCHEMA PREVIEW ── */}
      <section className="py-24 relative z-10 border-t border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 min-w-0">
              <Reveal>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
                  Developer Integration
                </p>
                <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-[var(--text-primary)]">
                  One API call. Under 30ms. Zero infrastructure.
                </h2>
                <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-5 leading-relaxed">
                  Call NameGuard AI directly from your frontend handler, backend middleware, or edge worker. Send a name, receive a calibrated decision, confidence score, and reason code.
                </p>

                <div className="mt-8 space-y-4 font-mono text-xs">
                  <div className="flex items-center gap-3 text-[var(--text-primary)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Sub-30ms response for in-form validation</span>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--text-primary)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Clear tri-state output: VALID, NEEDS REVIEW, INVALID</span>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--text-primary)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Machine-readable reason code with every decision</span>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--text-primary)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>14 global naming regions covered out of the box</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/contact" className="cta-secondary group inline-flex items-center gap-2">
                    Request API Documentation & Keys <ArrowUpRight size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 min-w-0">
              <Reveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-[var(--border)] font-mono text-xs shadow-2xl text-left">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-white/50 text-[11px]">
                    <span className="text-[10px] text-white/40">cURL</span>
                    <span className="text-[10px] text-emerald-400/80">POST /v1/evaluate/name</span>
                  </div>

                  <pre className="text-white/80 leading-relaxed overflow-x-auto">
                    <code>{`curl -X POST https://api.sapinex.com/v1/evaluate/name \\
  -H "Authorization: Bearer <API_KEY>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "James H. Smith",
    "context": {
      "channel": "checkout",
      "country_code": "GB"
    }
  }'`}</code>
                  </pre>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-[11px] text-white/40 mb-2">Response telemetry (200 OK - 18.8ms):</div>
                    <pre className="text-emerald-400/90 leading-relaxed overflow-x-auto text-[11px]">
                      <code>{`{
  "name": "James H. Smith",
  "decision": "VALID",
  "confidence_score": 0.96,
  "reason_code": "GENUINE_HUMAN_NAME",
  "pipeline_stage": "calibrated_final",
  "latency_ms": 18.8,
  "regions_evaluated": 14,
  "request_id": "ng_a0594d9458c8"
}`}</code>
                    </pre>

                    <p className="mt-5 pt-4 border-t border-white/10 text-[11px] leading-relaxed text-white/40">
                      Illustrative. Your endpoint URL and API key are issued when
                      access is granted — try the live sandbox in the meantime.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── DEDICATED CONVERSION HUB ── */}
      <section className="py-24 relative z-10 border-t border-[var(--border)] bg-[var(--container)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal>
            <BorderGlow
              className="w-full shadow-2xl"
              backgroundColor="var(--canvas)"
              glowColor="213 77 45"
              borderRadius={20}
              colors={['#0F2C59', '#1E4D8C', '#0A1E3F']}
            >
              <div className="p-10 sm:p-14 text-center">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--accent)] text-[var(--text-inverse)]">
                  CLEAN DATA STARTS AT THE DOOR
                </span>

                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mt-5">
                  Ready to see NameGuard AI in action?
                </h2>
                
                <p className="text-[var(--text-muted)] mt-5 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
                  Integration takes minutes — no complex setup required. Request an API key, or test a few names in the sandbox first.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                  <Link
                    to="/register"
                    className="group cta-primary text-base px-8 py-3.5"
                  >
                    Request access
                    <ArrowUpRight size={18} className="cta-arrow" />
                  </Link>

                  <a
                    href="https://nameguardtest.sapinex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cta-secondary text-base px-8 py-3.5"
                  >
                    Try It Yourself
                    <ExternalLink size={18} className="cta-arrow" />
                  </a>
                </div>

                <p className="text-xs font-mono text-[var(--text-muted)] mt-8">
                  Hosted on nameguardtest.sapinex.com — Free sandbox access
                </p>
              </div>
            </BorderGlow>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
