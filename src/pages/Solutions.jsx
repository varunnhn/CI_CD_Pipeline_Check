import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Check
} from "lucide-react";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import SplitText from "../components/SplitText";
import GlareHover from "../components/ui/GlareHover";

const VERTICALS = [
  {
    id: "fintech",
    name: "Fintech & Digital Banking",
    tagline: "Pre-KYC name validation with zero onboarding dropout",
    stat: "< 30ms",
    statLabel: "real-time in-form validation latency",
    problem: "Synthetic account creations and bot registrations flood onboarding queues with keyboard-mashed or dummy names, triggering expensive and unnecessary downstream KYC verification fees.",
    solution: "NameGuard AI validates full name submissions in under 30 milliseconds before data hits your KYC pipeline, filtering out fake and bot-generated names while accepting authentic names across 14 global cultural regions.",
    capabilities: [
      "Sub-30ms inline screening before core banking KYC ingestion",
      "Eliminates wasted identity verification and credit bureau fees",
      "Correctly accepts authentic international names, avoiding false rejections",
      "Calibrated tri-state decisions (VALID, NEEDS REVIEW, INVALID) with reason codes"
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare & Public Services",
    tagline: "Ensure patient and citizen record integrity at the point of intake",
    stat: "100% In-Flight",
    statLabel: "Zero-PII retention for strict data compliance",
    problem: "Typographical errors, placeholder entries, and improperly formatted names during patient triage create fragmented medical charts and billing reconciliation headaches.",
    solution: "NameGuard AI acts as an intelligent validation layer at digital intake terminals, verifying genuine name structures in-memory with zero PII retention, keeping your customer and patient databases pristine.",
    capabilities: [
      "Zero-PII storage: names are processed entirely in-memory with no disk logging",
      "Compliant with UK GDPR, DPA 2018, and international data protection standards",
      "Recognizes complex naming conventions including hyphenated surnames and patronymics",
      "Drop-in REST API integration with no infrastructure to maintain"
    ]
  },
  {
    id: "travel",
    name: "Travel & Passenger Ticketing",
    tagline: "High-concurrency passenger name validation at booking",
    stat: "< 30ms",
    statLabel: "deterministic response time for booking workflows",
    problem: "Scalper bots lock up limited flight seats and event tickets using throwaway names, while real travelers make typographic errors that lead to expensive ticket reissue and change fees.",
    solution: "NameGuard AI validates passenger names in real time during the reservation flow, catching bot entries and character errors before inventory is locked or tickets are issued.",
    capabilities: [
      "Benchmarked for high-concurrency booking and ticket drop surges",
      "Catches keyboard-mashing, test names, and automated bot gibberish",
      "Prevents costly passenger name change fees and downstream re-ticketing",
      "Under 30ms latency guarantee prevents checkout hesitation"
    ]
  },
  {
    id: "ecommerce",
    name: "High-Volume E-Commerce",
    tagline: "Stop fake buyer names and delivery failures at checkout",
    stat: "90% Accuracy",
    statLabel: "across 14 global cultural naming regions",
    problem: "Bot accounts, promo abusers, and fraudulent orders use fake or nonsensical recipient names, leading to failed courier deliveries, return shipping costs, and payment chargebacks.",
    solution: "NameGuard AI evaluates name validity directly on the checkout form without adding CAPTCHAs or OTP friction, letting real buyers complete purchases smoothly while rejecting junk entries.",
    capabilities: [
      "Detects keyboard-mashing, joke names, brand names, and dictionary words instantly",
      "Zero added customer friction — operates directly on standard form fields",
      "Reduces package return rates and delivery carrier dispute costs",
      "Supports 14 global naming regions covering worldwide customer bases"
    ]
  }
];

const COMPARISON_ROWS = [
  {
    metric: "Evaluation Latency (p99)",
    legacy: "250ms - 1,200ms (causes checkout lag)",
    sapinex: "Under 30ms globally (in-memory execution)"
  },
  {
    metric: "Data Retention Policy",
    legacy: "Stores raw PII in vendor databases",
    sapinex: "Zero persistent storage; ephemeral memory only"
  },
  {
    metric: "Multilingual & Script Support",
    legacy: "ASCII-only or basic Levenshtein distance",
    sapinex: "Cross-script phonetics & cultural transliteration"
  },
  {
    metric: "Synthetic Identity Detection",
    legacy: "Blind to coordinated token recycling",
    sapinex: "Statistical entropy & token anomaly scoring"
  },
  {
    metric: "Regulatory Compliance",
    legacy: "Complex third-party data processing chains",
    sapinex: "UK GDPR & EU GDPR compliant processor"
  }
];

export default function Solutions() {
  const [activeVertical, setActiveVertical] = useState(VERTICALS[0]);

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] selection:bg-[var(--accent)] selection:text-[var(--text-inverse)]">
      
      {/* ── HERO SECTION ── */}
      <section className="pt-36 pb-20 border-b border-[var(--border)] relative overflow-hidden">
        <Backdrop src="/backdrops/solutions.jpg" opacity={0.075} saturation={0.3} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal direction="left" y={28}>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 bg-[var(--accent)]" />
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Enterprise Infrastructure / Industry Solutions
              </p>
            </div>

            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] max-w-4xl leading-[1.1]">
              <SplitText delay={0.06} as="span">From signup forms to boarding passes.</SplitText>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-3xl leading-relaxed font-sans">
              Wherever your platform accepts a name, NameGuard AI can validate it. Most tools fail in one of two ways — they let synthetic fraud through, or they add friction that drives real customers away. We do neither, in under 30ms.
            </p>

            {/* Structured Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[var(--border)]">
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Evaluation Latency</p>
                <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">&lt; 30ms p99</p>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Privacy Architecture</p>
                <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">Zero-PII Storage</p>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Uptime SLA</p>
                <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">99.9% Target</p>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Interface</p>
                <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">Cloud SaaS REST</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INTERACTIVE INDUSTRY MATRIX ── */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Deployment Verticals
              </h2>
            </div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Tailored for critical operational pipelines
            </h3>
          </Reveal>

          {/* Vertical Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {VERTICALS.map((v) => {
              const isSelected = activeVertical.id === v.id;
              return (
                <GlareHover
                  key={v.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveVertical(v)}
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderColor="transparent"
                  glareOpacity={0.2}
                  className={`text-left p-5 transition-all duration-200 border ${
                    isSelected 
                      ? "bg-[var(--container)] border-[var(--accent)] shadow-sm" 
                      : "bg-[var(--container)]/40 border-[var(--border)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <div className="flex flex-col h-full w-full justify-start items-start">
                    <div className="flex items-center justify-end mb-3 w-full">
                      <span className="font-mono text-xs text-[var(--text-muted)]">0{VERTICALS.indexOf(v) + 1}</span>
                    </div>
                    <h4 className="font-display font-semibold text-sm text-[var(--text-primary)]">
                      {v.name}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2">
                      {v.tagline}
                    </p>
                  </div>
                </GlareHover>
              );
            })}
          </div>

          {/* Active Vertical Deep Dive */}
          <div className="mt-8 p-8 sm:p-12 border border-[var(--border-strong)] bg-[var(--container)]">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-7 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 border border-[var(--border-strong)] bg-[var(--canvas)] text-[var(--text-primary)]">
                    Use Case Architecture
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    ID: {activeVertical.id.toUpperCase()}
                  </span>
                </div>

                <h4 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                  {activeVertical.tagline}
                </h4>

                <div className="space-y-6 mt-6 text-sm text-[var(--text-muted)] leading-relaxed">
                  <div>
                    <h5 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-1">
                      The Operational Problem
                    </h5>
                    <p>{activeVertical.problem}</p>
                  </div>

                  <div>
                    <h5 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-1">
                      The Sapinex Architecture
                    </h5>
                    <p>{activeVertical.solution}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-3">
                    Core Technical Capabilities
                  </h5>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {activeVertical.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                        <Check size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Stat & Verification Card */}
              <div className="lg:col-span-5 bg-[var(--canvas)] border border-[var(--border)] p-6 sm:p-8 min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Measured Impact
                </p>
                <div className="mt-3 mb-6">
                  <p className="font-display font-bold text-4xl text-[var(--text-primary)]">
                    {activeVertical.stat}
                  </p>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
                    {activeVertical.statLabel}
                  </p>
                </div>

                <div className="p-4 bg-[var(--container)] border border-[var(--border)] space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-[var(--border)] pb-2">
                    <span className="text-[var(--text-muted)]">API Handshake:</span>
                    <span className="text-[var(--text-primary)]">TLS 1.3 Strict</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--border)] pb-2">
                    <span className="text-[var(--text-muted)]">Payload Audit:</span>
                    <span className="text-[var(--text-primary)]">HMAC SHA-256</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Processing State:</span>
                    <span className="text-[var(--text-primary)]">Stateless / Ephemeral</span>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="mt-6 w-full cta-primary text-center justify-center flex items-center gap-2"
                >
                  <span>Request Dedicated Integration Spec</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL COMPARISON MATRIX ── */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Architectural Rigor
                </h2>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Deterministic validation versus legacy heuristics
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-4 leading-relaxed">
                Rules engines and rudimentary string distance algorithms are brittle and vulnerable to coordinated adversarial attacks. Here is how Sapinex compares to legacy identity vendors.
              </p>
            </div>

            {/* High-density Tabular Matrix */}
            <div className="overflow-x-auto border border-[var(--border-strong)] bg-[var(--container)]">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)] bg-[var(--canvas)] font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    <th className="py-4 px-6 font-medium w-1/3">Evaluation Criterion</th>
                    <th className="py-4 px-6 font-medium w-1/3 border-l border-[var(--border)]">Legacy Identity Engines</th>
                    <th className="py-4 px-6 font-medium w-1/3 border-l border-[var(--border)] text-[var(--text-primary)] font-bold">
                      Sapinex Deterministic AI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[var(--container-light)] transition-colors">
                      <td className="py-4 px-6 font-semibold text-[var(--text-primary)]">
                        {row.metric}
                      </td>
                      <td className="py-4 px-6 text-[var(--text-muted)] border-l border-[var(--border)]">
                        {row.legacy}
                      </td>
                      <td className="py-4 px-6 font-medium text-[var(--text-primary)] border-l border-[var(--border)] bg-[var(--container)]/50">
                        {row.sapinex}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="p-8 sm:p-14 bg-[var(--container)] border border-[var(--border-strong)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">Production Onboarding</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                Integrate real-time risk scoring in your workflow
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-2">
                Evaluate Sapinex endpoints in your sandbox environment with comprehensive documentation and dedicated engineering support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link to="/contact" className="cta-primary">
                <span>Request API Key</span>
                <ArrowUpRight size={14} className="cta-arrow" />
              </Link>
              <Link to="/products" className="cta-secondary">
                <span>Explore Technical Specs</span>
                <ArrowRight size={14} className="cta-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
