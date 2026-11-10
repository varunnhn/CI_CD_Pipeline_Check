import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import SplitText from "../components/SplitText";
import BorderGlow from "../components/BorderGlow";

export default function Products() {
  return (
    <div className="relative min-h-screen bg-[var(--canvas)] overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--text-inverse)]">
      {/* ── HEADER ── */}
      <section className="pt-36 pb-16 relative z-10">
        <Backdrop src="/backdrops/products.jpg" opacity={0.08} saturation={0.35} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.1]" style={{ color: "var(--text-primary)" }}>
                <SplitText delay={0.08} as="span">Risk-scoring,</SplitText>
                <br />
                <SplitText delay={0.16} as="span">one tool at a time.</SplitText>
              </h1>
              <p className="text-[var(--text-muted)] font-sans text-lg sm:text-xl mt-6 leading-relaxed max-w-[50ch]">
                SapinexAI builds fast, reliable validation APIs for industries where speed is essential. Stop fraud early without annoying your customers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP PRODUCT: NAMEGUARD ── */}
      <section className="pt-4 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline-block">
                Production SLA: &lt;30ms Latency
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <BorderGlow
              className="w-full shadow-2xl"
              backgroundColor="var(--container)"
              glowColor="213 77 45"
              borderRadius={20}
              colors={['#0F2C59', '#1E4D8C', '#0A1E3F']}
            >
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  
                  {/* Left Column: Product Summary */}
                  <div className="lg:col-span-7 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono bg-[var(--accent)] text-[var(--text-inverse)]">
                        FLAGSHIP
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-full bg-[var(--canvas)]">
                        Sub-30ms Validation
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-full bg-[var(--canvas)]">
                        90% Accuracy
                      </span>
                    </div>

                    <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)]">
                      NameGuard AI
                    </h2>
                    
                    <p className="text-[var(--text-muted)] font-mono text-sm sm:text-base mt-2">
                      Smart Name Validation as a Service
                    </p>

                    <p className="text-[var(--text-muted)] mt-6 font-sans text-base sm:text-lg leading-relaxed max-w-[55ch]">
                      Real Names In. Fake Names Out. Delivered as a cloud-hosted SaaS API, NameGuard AI validates names in under 30 milliseconds — catching keyboard mashing, bot gibberish, joke names, and dictionary words while recognizing real international names across 14 global naming regions.
                    </p>

                    {/* Target Environments */}
                    <div className="mt-8 pt-6 border-t border-[var(--border)]">
                      <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                        Active Deployment Targets:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Banking & Fintech KYC",
                          "Travel & Ticketing",
                          "E-Commerce Checkout",
                          "SaaS & App Signups",
                          "Healthcare & Government",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-3 py-1.5 rounded-md bg-[var(--canvas)] border border-[var(--border)] text-[var(--text-primary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 mt-10">
                      <Link
                        to="/products/nameguard"
                        className="group cta-primary"
                      >
                        Explore NameGuard AI & Specs
                        <ArrowRight size={16} className="cta-arrow" />
                      </Link>
                      
                      <a
                        href="https://nameguardtest.sapinex.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cta-secondary"
                      >
                        Try It Yourself
                        <ExternalLink size={15} className="cta-arrow" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Performance & Spec Highlights */}
                  <div className="lg:col-span-5 flex flex-col gap-4 min-w-0">
                    <div className="p-6 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                          Response Latency
                        </span>
                      </div>
                      <p className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
                        &lt; 30ms <span className="text-sm font-sans font-normal text-[var(--text-muted)]">real-time</span>
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                        Instant rule-based screening and parallel AI ensemble analysis for seamless in-form validation.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                          Global Accuracy
                        </span>
                      </div>
                      <p className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
                        90% <span className="text-sm font-sans font-normal text-[var(--text-muted)]">across 14 regions</span>
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                        Recognizes authentic naming conventions worldwide — including hyphenated surnames, patronymics, and short names.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                          Zero-PII Storage
                        </span>
                      </div>
                      <p className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
                        100% In-Flight
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                        Names evaluated strictly in-flight with zero disk logging. Built for GDPR and regulatory compliance.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </BorderGlow>
          </Reveal>
        </div>
      </section>

      {/* ── ROADMAP: NEXT ON SLATE — NATIVE AI ── */}
      <section className="py-20 relative z-10 border-t border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3">
                Roadmap
              </p>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-[var(--text-primary)]">
                Where we're headed next.
              </h2>
              <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg mt-4 leading-relaxed">
                NameGuard AI is our sole focus today. Longer term, we're exploring how the same
                deterministic, low-latency approach could extend beyond the name field to
                broader transaction-time signals.
              </p>
            </Reveal>
          </div>

          <div className="max-w-4xl">
            <Reveal delay={0.1}>
              <div className="p-8 sm:p-12 rounded-2xl bg-[var(--container)] border border-[var(--border)] h-full flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-300 shadow-sm relative overflow-hidden">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono bg-[var(--canvas)] border border-[var(--border)] text-[var(--accent)]">
                      EARLY EXPLORATION
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Not yet on the roadmap timeline
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] mb-2">
                    Beyond the name field
                  </h3>

                  <p className="text-sm font-mono text-[var(--text-muted)] mb-5">
                    Contextual, transaction-time risk signals
                  </p>

                  <p className="text-base text-[var(--text-muted)] font-sans leading-relaxed max-w-2xl">
                    We're researching whether the same deterministic, sub-30ms approach behind
                    NameGuard AI could evaluate broader transaction context — intent and identity
                    coherence at checkout — without adding friction for real users. No release date.
                  </p>

                  <div className="mt-8 pt-6 border-t border-[var(--border)]">
                    <p className="text-xs font-mono uppercase text-[var(--text-muted)] mb-3">
                      Core Research Pillars:
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-3 text-xs font-mono text-[var(--text-primary)]">
                      <li className="pt-3 border-t border-[var(--border)]">In-line transactional scoring</li>
                      <li className="pt-3 border-t border-[var(--border)]">Behavioral trust &amp; anomaly detection</li>
                      <li className="pt-3 border-t border-[var(--border)]">Frictionless flow, zero extra steps</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-5 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Focus: Long-term foundational risk modeling
                  </span>
                  <Link to="/contact" className="text-xs font-semibold text-[var(--accent)] hover:underline flex items-center gap-1">
                    Inquire About Research Partnerships <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CORE PILLARS ── */}
      <section className="py-20 relative z-10 border-t border-[var(--border)] bg-[var(--container)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-6 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full">
                <span className="font-mono text-xs text-[var(--accent)]">01 / ZERO FRICTION</span>
                <h4 className="font-display font-bold text-lg text-[var(--text-primary)] mt-3 mb-2">
                  No Extra Form Fields
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Plug directly into your existing form submissions. Authentic users never solve puzzles, click CAPTCHAs, or wait on OTP codes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full">
                <span className="font-mono text-xs text-[var(--accent)]">02 / REAL-TIME EDGE</span>
                <h4 className="font-display font-bold text-lg text-[var(--text-primary)] mt-3 mb-2">
                  Sub-30ms Guarantee
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Distributed across edge runtimes so transactions commit without hesitation. Inference completes before database locks trigger.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-6 rounded-xl bg-[var(--canvas)] border border-[var(--border)] h-full">
                <span className="font-mono text-xs text-[var(--accent)]">03 / FAIL-OPEN DESIGN</span>
                <h4 className="font-display font-bold text-lg text-[var(--text-primary)] mt-3 mb-2">
                  100% Checkout Continuity
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  If an API timeout ever occurs, requests automatically fail-open. Your revenue and user conversions are never held hostage.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative z-10 border-t border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-5xl text-[var(--text-primary)]">
              Build with SapinexAI
            </h2>
            <p className="text-[var(--text-muted)] font-sans mt-5 text-lg sm:text-xl max-w-[48ch] mx-auto leading-relaxed">
              Integrate NameGuard AI today or partner with our team on pilot programs for upcoming roadmap modules.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link
                to="/contact"
                className="group cta-primary"
              >
                Request API Access <ArrowUpRight size={16} className="cta-arrow" />
              </Link>
              <Link
                to="/products/nameguard"
                className="group cta-secondary"
              >
                View NameGuard AI Deep Dive <ArrowRight size={16} className="cta-arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
