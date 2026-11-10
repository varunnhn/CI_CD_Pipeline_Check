import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";
import Counter from "../components/Counter";
import Backdrop from "../components/Backdrop";

function LinkedInIcon({ size = 13, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

/** Portrait with a graceful fallback: if the photo file isn't present
 *  (or fails to load) we show the founder's initials instead of a broken image. */
function FounderPortrait({ founder }) {
  const [failed, setFailed] = useState(false);
  const initials = founder.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  if (!founder.photo || failed) {
    return (
      <div
        className="aspect-square w-full rounded-xl border border-[var(--border-strong)] flex items-center justify-center font-display font-bold text-5xl text-[var(--accent)]"
        style={{ background: "var(--container)" }}
        aria-hidden="true"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="aspect-square w-full rounded-xl overflow-hidden border border-[var(--border-strong)] shadow-md">
      <img
        src={founder.photo}
        alt={founder.name}
        onError={() => setFailed(true)}
        loading="lazy"
        className="h-full w-full object-cover saturate-[0.85] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-100"
      />
    </div>
  );
}

const FOUNDER = {
  name: "Ajai Konnamveli Bhaskaran Pillay",
  role: "Founder Director",
  focus: "Chief Technology Officer & AI Modeling",
  bio: "With over two decades engineering high-concurrency travel booking platforms and NDC reservation engines, Ajai spearheads the multi-regional phonetic intelligence powering NameGuard AI.",
  expertise: [
    { years: "20+ yrs", domain: "High-concurrency travel booking platforms" },
    { years: "NDC", domain: "Reservation engine architecture" },
    { years: "PNR", domain: "Passenger name records & phonetic modeling" },
  ],
  linkedin: "https://www.linkedin.com/in/ajai-k-bhaskar-8a456234/",
  // Drop the photo at public/founders/ajai.jpg — falls back to initials if absent.
  photo: "/founders/ajai.jpg",
};

const PRINCIPLES = [
  {
    title: "Always Fast",
    description: "Our tools run in less than 30ms, so your checkout flows never feel sluggish."
  },
  {
    title: "Privacy First",
    description: "We analyze typing patterns and name validity in real-time without storing unnecessary personal data."
  },
  {
    title: "Clear Explanations",
    description: "Every risk score comes with a clear reason, so your team always knows why an action was taken."
  },
  {
    title: "Built to Last",
    description: "Designed to fail-open if needed, meaning your checkout pipeline stays online even during massive traffic spikes."
  }
];

const GOVERNANCE = [
  {
    title: "UK GDPR & DPA 2018",
    detail: "Strict compliance with UK data protection regulations.",
    badge: "Statutory Compliance"
  },
  {
    title: "Zero-PII Architecture",
    detail: "Evaluated 100% in-flight in volatile memory; zero personal names written to persistent storage.",
    badge: "Zero Retention"
  },
  {
    title: "Data Isolation",
    detail: "Client transaction data is never shared or pooled for unauthorized model training.",
    badge: "Information Isolation"
  },
  {
    title: "End-to-End Encryption",
    detail: "Mandatory TLS 1.3 in transit and AES-256 encrypted storage for telemetry.",
    badge: "Cryptographic Security"
  }
];

const MILESTONES = [
  {
    period: "2024 — Aviation Roots",
    title: "Airline Reservation & PNR Research",
    description: "Identified systemic seat-inventory locking and cross-cultural naming failures in global airline booking engines. Began foundational research into multi-regional phonetic structures and typographical anomalies."
  },
  {
    period: "May 2025 — Corporate Foundation",
    title: "UK Incorporation & Enterprise Focus",
    description: "Incorporated in England and Wales on 28 May 2025 (initially founded as AIGX, transitioning by resolution to SAPINEXAI LTD, Company No. 16478566). Formalized institutional data governance and UK GDPR data processor compliance."
  },
  {
    period: "Early 2026 — Engine Build",
    title: "Multi-Stage Ensemble & Sub-30ms Target",
    description: "Built the multi-stage validation ensemble combining instant rule screening, parallel cultural analysis, and calibrated decision outputs — engineered for sub-30ms responses with zero-PII retention."
  },
  {
    period: "2026 — Early Access",
    title: "NameGuard AI Cloud SaaS",
    description: "Delivering NameGuard AI as a drop-in cloud API to early-access partners across travel, fintech KYC, and high-volume e-commerce."
  }
];

export default function Company() {
  return (
    <div className="relative min-h-screen bg-[var(--canvas)] overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--text-inverse)]">
      
      {/* ── HEADER ── */}
      <section className="pt-36 pb-20 relative overflow-hidden"
               style={{ background: "var(--nav-bg)" }}>
        <Backdrop src="/backdrops/company.jpg" opacity={0.07} saturation={0.3} scrim="var(--nav-bg)" />
        <div className="absolute inset-0 grid-backdrop opacity-40" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.08]"
                style={{ color: "var(--nav-header)" }}>
              <SplitText delay={0.08} as="span">Fast identity verification,</SplitText>{" "}<br className="hidden sm:block" />
              <SplitText delay={0.16} as="span">built by engineers.</SplitText>
            </h1>
            
            <p className="mt-6 font-sans max-w-[55ch] leading-relaxed text-lg sm:text-xl" style={{ color: "var(--nav-text)" }}>
              SapinexAI is an identity intelligence company. We build fast, invisible risk-scoring systems that stop fraud without frustrating your genuine customers.
            </p>

            <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-wrap gap-x-10 gap-y-4 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              <span>Registered in England &amp; Wales</span>
              <span>UK GDPR &amp; DPA 2018</span>
              <span>Sub-30ms responses</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OUR ORIGIN: BORN IN AIRLINE SYSTEMS ── */}
      <section className="py-24 border-b border-[var(--border)]" style={{ background: "var(--canvas)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="max-w-3xl mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
                  Founder Origin &amp; Mission
                </p>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight"
                  style={{ color: "var(--text-primary)" }}>
                Born in airline booking engines. Proven under peak load.
              </h2>
              <p className="mt-5 font-sans leading-relaxed text-base sm:text-lg" style={{ color: "var(--text-muted)" }}>
                Our founding team comes directly from the airline and aviation reservation space. We didn't build NameGuard AI in a vacuum — we built it to solve the high-speed operational chaos we lived through firsthand on the airport flight line.
              </p>
            </Reveal>
          </div>

          {/* 3-Beat Editorial Narrative Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Beat 1: The Suffering */}
            <Reveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] h-full flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-300 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[var(--canvas)] border border-[var(--border)] text-[var(--text-muted)]">
                      BEAT 01 / THE CRISIS
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                    The Airline Reservation Chaos
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed">
                    In airline booking, a bad name isn't just a typo — it's an operational disaster. Scalper bots pumped in dummy names (<code className="text-[11px] font-mono bg-[var(--canvas)] px-1 py-0.5 rounded">asdfghjk</code>, <code className="text-[11px] font-mono bg-[var(--canvas)] px-1 py-0.5 rounded">test passenger</code>) during flash sales to lock seat inventory without paying. Meanwhile, crude regex rules wrongly rejected legitimate global travelers with hyphenated surnames, Arabic patronymics, or single-token names at the gate.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Cost: Empty locked seats &amp; gate delays
                </div>
              </div>
            </Reveal>

            {/* Beat 2: The Engineering Breakthrough */}
            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] h-full flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-300 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[var(--canvas)] border border-[var(--border)] text-[var(--text-muted)]">
                      BEAT 02 / THE BREAKTHROUGH
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                    Solving the Hardest Problem First
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed">
                    Airline reservation systems handle enormous request spikes and cannot tolerate slow LLMs or manual review queues. We engineered a multi-stage validation pipeline with zero compromises: <strong>sub-30ms response times</strong>, culturally calibrated across <strong>14 global naming regions</strong>, and operating strictly in-flight with <strong>Zero-PII storage</strong>.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Benchmark: &lt;30ms &amp; 90% accuracy
                </div>
              </div>
            </Reveal>

            {/* Beat 3: Broadening the Vision */}
            <Reveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] h-full flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-300 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[var(--canvas)] border border-[var(--border)] text-[var(--text-muted)]">
                      BEAT 03 / THE EXPANSION
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                    From Boarding Passes to Global Trust
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed">
                    If an engine can survive the extreme concurrency and cross-cultural demands of international aviation ticketing, it can protect anything. Today, Sapinex delivers NameGuard AI as a drop-in cloud API to stop synthetic accounts, checkout friction, and delivery failures across fintech KYC, e-commerce, and SaaS.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--border)] font-mono text-xs text-[var(--text-muted)]">
                  Vision: Universal input integrity
                </div>
              </div>
            </Reveal>

          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[var(--border)]">
            <div className="p-4 rounded-xl bg-[var(--container)] border border-[var(--border)]">
              <p className="font-mono text-xs uppercase text-[var(--text-muted)]">Response Latency</p>
              <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1"><Counter value={30} prefix="< " suffix="ms" /></p>
              <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">Real-time in-form SLA</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--container)] border border-[var(--border)]">
              <p className="font-mono text-xs uppercase text-[var(--text-muted)]">Global Accuracy</p>
              <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1"><Counter value={90} suffix="%" /></p>
              <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">Across 14 cultural regions</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--container)] border border-[var(--border)]">
              <p className="font-mono text-xs uppercase text-[var(--text-muted)]">Privacy Architecture</p>
              <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">Zero-PII</p>
              <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">100% In-Flight execution</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--container)] border border-[var(--border)]">
              <p className="font-mono text-xs uppercase text-[var(--text-muted)]">Deployment Mode</p>
              <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">Cloud REST</p>
              <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">Drop-in JSON endpoint</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE ENGINEERING PRINCIPLES ── */}
      <section className="py-24 border-b border-[var(--border)]" style={{ background: "var(--canvas)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Core Engineering Principles
            </h2>
            <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-3 max-w-[65ch]">
              We adhere to strict engineering constraints to ensure our scoring infrastructure remains deterministic, uncompromised, and enterprise-grade.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-12">
            {PRINCIPLES.map((principle, idx) => (
              <Reveal key={principle.title} delay={idx * 0.08}>
                <div className="pt-6 border-t-2 border-[var(--text-primary)]">
                  <span className="font-display font-bold text-5xl leading-none text-[var(--text-primary)] tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-6 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed max-w-[38ch]">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-24 border-b border-[var(--border)]" style={{ background: "var(--canvas)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Leadership
            </h2>
            <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-3 max-w-[60ch]">
              NameGuard AI is built and directed by engineers who spent their careers inside
              high-throughput reservation systems.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group mt-12 pt-10 border-t border-[var(--border-strong)] grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Portrait */}
              <div className="md:col-span-4 min-w-0">
                <FounderPortrait founder={FOUNDER} />
              </div>

              {/* Bio */}
              <div className="md:col-span-8 min-w-0 relative">
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute -left-6 top-0 bottom-0 w-[2px] bg-[var(--accent)] origin-top scale-y-0 transition-transform duration-[600ms] ease-out group-hover:scale-y-100"
                />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {FOUNDER.role}
                </p>
                <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-[var(--text-primary)] mt-2">
                  {FOUNDER.name}
                </h3>
                <p className="font-mono text-sm text-[var(--accent)] mt-2">
                  {FOUNDER.focus}
                </p>
                <p className="text-[var(--text-muted)] font-sans text-base leading-relaxed mt-6 max-w-[58ch]">
                  {FOUNDER.bio}
                </p>
                <dl className="mt-8 border-t border-[var(--border-strong)]">
                  {FOUNDER.expertise.map((item, idx) => (
                    <div
                      key={item.domain}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3 border-b border-[var(--border)]"
                    >
                      <dt
                        className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)] shrink-0 sm:w-24 transition-colors duration-300 ease-out group-hover:text-[var(--accent)]"
                        style={{ transitionDelay: `${idx * 90}ms` }}
                      >
                        {item.years}
                      </dt>
                      <dd
                        className="font-sans text-sm text-[var(--text-muted)] min-w-0 transition-colors duration-300 ease-out group-hover:text-[var(--text-primary)]"
                        style={{ transitionDelay: `${idx * 90}ms` }}
                      >
                        {item.domain}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  <LinkedInIcon size={15} />
                  LinkedIn profile
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECURITY, PRIVACY & GOVERNANCE ── */}
      <section className="py-24 border-b border-[var(--border)]" style={{ background: "var(--canvas)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Data Governance & Security Posture
            </h2>
            <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-3 max-w-[65ch]">
              We treat identity risk assessment as safety-critical infrastructure with strict isolation and statutory data protection compliance.
            </p>
          </Reveal>

          <div className="mt-12 border-t border-[var(--border-strong)]">
            {GOVERNANCE.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-6 border-b border-[var(--border)]">
                  <div className="md:col-span-3 min-w-0">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                      {item.badge}
                    </span>
                  </div>
                  <div className="md:col-span-4 min-w-0">
                    <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5 min-w-0">
                    <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAJECTORY & MILESTONES ── */}
      <section className="py-24 border-b border-[var(--border)]" style={{ background: "var(--canvas)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Milestones & Evolution
            </h2>
            <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-3 max-w-[65ch]">
              From foundational research in cross-lingual typographical entropy to UK incorporation and private tenant pilot deployments.
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {MILESTONES.map((m, idx) => (
              <Reveal key={m.title} delay={idx * 0.08}>
                <div className="p-6 sm:p-8 rounded-xl bg-[var(--container)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-start gap-6 shadow-sm">
                  <div className="shrink-0 sm:w-44">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {m.period}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICIAL CORPORATE DETAILS ── */}
      <section className="py-24 border-b border-[var(--border)]" style={{ background: "var(--canvas)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Official Corporate Registration
            </h2>
            <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-3 max-w-[65ch]">
              SapinexAI is an incorporated private limited company in England and Wales. Below are our verified statutory and legal records.
            </p>

            <div className="mt-8 rounded-2xl bg-[var(--container)] border border-[var(--border)] p-8 sm:p-10 shadow-sm">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Legal Entity Name
                  </p>
                  <p className="font-display font-bold text-lg text-[var(--text-primary)]">
                    SAPINEXAI LTD
                  </p>
                  <p className="text-xs font-mono text-[var(--accent)] mt-0.5">Private Limited Company</p>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Company Registration No.
                  </p>
                  <p className="font-mono font-bold text-lg text-[var(--text-primary)]">
                    16478566
                  </p>
                  <p className="text-xs font-mono text-emerald-600 mt-0.5">Active - Companies House UK</p>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Incorporation Jurisdiction
                  </p>
                  <p className="font-display font-bold text-lg text-[var(--text-primary)]">
                    England & Wales
                  </p>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">United Kingdom</p>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Nature of Business (SIC)
                  </p>
                  <p className="font-sans text-sm text-[var(--text-primary)]">
                    62012 — Software Development &amp; IT Services
                  </p>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">Companies House Classification</p>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Registered Office Address
                  </p>
                  <p className="font-sans text-sm text-[var(--text-primary)] leading-relaxed">
                    5 Meon Way, Wolverhampton, England, WV11 2QT
                  </p>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Compliance &amp; Legal Inquiries
                  </p>
                  <a 
                    href="mailto:office@sapinex.com"
                    className="font-mono text-xs text-[var(--accent)] hover:underline"
                  >
                    office@sapinex.com
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
                <span>Verified via UK Registrar of Companies (Companies House) • Director identities verified under UK corporate transparency standards.</span>
                <Link to="/contact" className="text-[var(--accent)] hover:underline flex items-center gap-1 font-semibold">
                  Request Due Diligence Pack <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARCHITECTURE BRIEFING / EXECUTIVE CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--canvas)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-5xl text-[var(--text-primary)]">
              Partner with the founding team.
            </h2>
            
            <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg max-w-[55ch] mx-auto mt-4 leading-relaxed">
              Evaluating NameGuard AI for production deployment? Speak directly with our founding directors and systems architects.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="cta-primary">
                <span className="flex items-center gap-2">
                  Request Architecture Briefing <ArrowRight size={16} />
                </span>
              </Link>
              <Link to="/products/nameguard" className="cta-secondary">
                <span className="flex items-center gap-2">
                  Explore NameGuard API <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
