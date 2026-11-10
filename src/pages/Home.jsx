import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";
import ProblemStack from "../components/ProblemStack";
import Counter from "../components/Counter";
import ValidationEvidence from "../components/ValidationEvidence";
import BorderGlow from "../components/BorderGlow";
import Backdrop from "../components/Backdrop";

const PIPELINE = [
  {
    n: "01",
    timing: "< 5ms transit",
    title: "Instant capture",
    body: "Data is sent securely via a single API call as soon as a user submits a form. No bulky client-side code required.",
  },
  {
    n: "02",
    timing: "~16ms inference",
    title: "Smart risk scoring",
    body: "Instant rule screening and parallel AI ensemble models evaluate phonetics, character distributions, and cultural patterns.",
  },
  {
    n: "03",
    timing: "< 30ms total",
    title: "Immediate decision",
    body: "Receive a calibrated VALID, NEEDS REVIEW, or INVALID decision with machine-readable reason codes.",
  },
];

/* Each step's rule draws as the section scrolls, so scroll position maps to
 * the pipeline's own timeline. Reduced motion renders the rules already drawn. */
function PipelineStep({ step, index, total, progress }) {
  const prefersReduced = useReducedMotion();
  const fill = useTransform(progress, [index / total, (index + 1) / total], [0, 1], { clamp: true });

  return (
    <div className="relative pt-6">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--border-strong)]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-[var(--text-primary)]"
        style={{ scaleX: prefersReduced ? 1 : fill }}
      />
      <div className="flex items-baseline justify-between">
        <span className="font-display font-bold text-5xl leading-none text-[var(--text-primary)] tabular-nums">
          {step.n}
        </span>
        <span className="font-mono text-xs text-[var(--text-muted)]">{step.timing}</span>
      </div>
      <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mt-6 mb-3">
        {step.title}
      </h3>
      <p className="text-[var(--text-muted)] font-sans leading-relaxed text-sm max-w-[40ch]">
        {step.body}
      </p>
    </div>
  );
}

export default function Home() {
  const pipelineRef = useRef(null);
  const { scrollYProgress: pipelineProgress } = useScroll({
    target: pipelineRef,
    offset: ["start 0.9", "end 0.65"],
  });

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] overflow-hidden selection:bg-[var(--accent)] selection:text-[var(--text-inverse)]">
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 z-10">
        <Backdrop src="/backdrops/home.jpg" opacity={0.085} saturation={0.35} priority />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text */}
            <div className="max-w-2xl min-w-0">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] mb-5">
                  Built by airline systems engineers
                </p>
              </Reveal>
              <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] mt-2"
                  style={{ color: "var(--text-primary)" }}>
                <SplitText delay={0.08} as="span">Trust infrastructure</SplitText>{" "}
                <br className="hidden sm:block" />
                <SplitText delay={0.16} as="span">for industries</SplitText>{" "}
                <br className="hidden lg:block" />
                <SplitText delay={0.24} as="span">that</SplitText>{" "}
                <SplitText delay={0.28} as="em" className="font-light">can't slow down.</SplitText>
              </h1>
              <Reveal delay={0.32}>
                <p className="font-sans text-base sm:text-lg mt-6 leading-relaxed max-w-[48ch]" style={{ color: "var(--text-muted)" }}>
                  Engineered by airline systems architects who lived through the chaos of bot seat-hoarding and PNR errors. NameGuard AI validates human names in under 30ms before bad data locks inventory or pollutes downstream systems.
                </p>
              </Reveal>
              <Reveal delay={0.40}>
                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <Link to="/products" className="cta-primary group">
                    <span className="flex items-center gap-2">
                      Explore NameGuard AI
                      <ArrowUpRight size={16} className="cta-arrow" />
                    </span>
                  </Link>
                  <a
                    href="https://nameguardtest.sapinex.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary group"
                  >
                    <span>Try It Yourself</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: real decisions from the engine, not stock photography */}
            <Reveal delay={0.3} className="h-full min-w-0">
              <ValidationEvidence />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT WE SOLVE: STICKY STACK SECTION ── */}
      <ProblemStack />

      {/* ── HOW IT WORKS: ARCHITECTURE PIPELINE ── */}
      <section className="py-28 relative z-10 border-t border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--text-muted)" }}>
                Execution pipeline
              </p>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-5xl leading-tight" style={{ color: "var(--text-primary)" }}>
                Decisions made in milliseconds.
              </h2>
              <p className="mt-5 font-sans text-lg leading-relaxed max-w-[52ch]" style={{ color: "var(--text-muted)" }}>
                We analyze risk behind the scenes. Your customers never see a CAPTCHA, and your database never waits.
              </p>
            </Reveal>
          </div>

          {/* Numbered pipeline — rules, not cards */}
          <div ref={pipelineRef} className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {PIPELINE.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12} direction="up">
                <PipelineStep step={step} index={i} total={PIPELINE.length} progress={pipelineProgress} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULAR INTELLIGENCE SUITE: FEATURING NAMEGUARD ── */}
      <section className="py-28 relative z-10 bg-[var(--canvas)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>
                  Product Portfolio
                </p>
                <h2 className="font-display font-bold tracking-tight text-3xl sm:text-5xl leading-tight" style={{ color: "var(--text-primary)" }}>
                  NameGuard AI
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link to="/products/nameguard" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline">
                View NameGuard AI Specifications <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-8 items-stretch">
            {/* Featured Product: NameGuard */}
            <Reveal delay={0.1}>
              <BorderGlow
                className="w-full h-full shadow-md"
                backgroundColor="var(--container)"
                glowColor="213 77 45"
                borderRadius={16}
                colors={['#0F2C59', '#15529E', '#0A1E3F']}
              >
              <div className="p-8 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono bg-[var(--accent)] text-[var(--text-inverse)]">
                      FLAGSHIP PRODUCT
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-full bg-[var(--canvas)]">
                      Sub-30ms Validation
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] mb-3">
                    NameGuard AI
                  </h3>
                  <p className="text-[var(--text-muted)] font-sans text-base sm:text-lg leading-relaxed max-w-[55ch] mb-6">
                    Real Names In. Fake Names Out. Delivered as a cloud SaaS API, NameGuard AI validates full names at the point of entry in under 30ms — stopping bot entries and keyboard mashes across 14 global naming regions without disrupting legitimate users.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Banking & Fintech", "Travel & Ticketing", "E-Commerce", "SaaS Signups", "Healthcare & Govt"].map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--canvas)] border border-[var(--border)] text-[var(--text-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
                      <p className="font-mono text-xs text-[var(--text-muted)] mb-1">Latency</p>
                      <p className="font-display font-bold text-xl text-[var(--text-primary)]">
                        <Counter value={30} prefix="< " suffix="ms" />
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)] font-sans mt-0.5">Real-time in-form</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
                      <p className="font-mono text-xs text-[var(--text-muted)] mb-1">Accuracy</p>
                      <p className="font-display font-bold text-xl text-[var(--text-primary)]">
                        <Counter value={90} suffix="%" />
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)] font-sans mt-0.5">All global regions</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--canvas)] border border-[var(--border)]">
                      <p className="font-mono text-xs text-[var(--text-muted)] mb-1">Cultural Reach</p>
                      <p className="font-display font-bold text-xl text-[var(--text-primary)]">
                        <Counter value={14} suffix=" Regions" />
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)] font-sans mt-0.5">Worldwide coverage</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[var(--text-muted)] font-sans">
                    Multi-stage rule screening & parallel AI ensemble analysis.
                  </span>
                  <Link to="/products/nameguard" className="cta-primary group">
                    <span className="flex items-center gap-2">
                      Deep Dive NameGuard AI <ArrowUpRight size={15} className="cta-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              </BorderGlow>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-32 relative overflow-hidden z-10 border-t border-[var(--border)]">
        <Backdrop src="/backdrops/home-cta.jpg" opacity={0.06} saturation={0.3} />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              Integrate the endpoint today.
            </h2>
            <p className="mt-5 mx-auto leading-relaxed font-sans text-base max-w-[48ch]" style={{ color: "var(--text-muted)" }}>
              Connect directly to our API. No massive migrations, no frontend alterations, and sub-30ms performance guaranteed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link to="/contact" className="cta-primary group">
                <span className="flex items-center gap-2">
                  Request API Key <ArrowUpRight size={16} className="cta-arrow" />
                </span>
              </Link>
              <Link to="/products" className="cta-secondary group">
                <span>View Documentation & Schema</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
