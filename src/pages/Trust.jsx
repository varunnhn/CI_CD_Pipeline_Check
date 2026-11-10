import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Backdrop from "../components/Backdrop";
import SplitText from "../components/SplitText";

const TRUST_PILLARS = [
  {
    title: "Zero Raw PII Retention",
    description: "Incoming identity payloads (such as full names and customer identifiers) exist solely in ephemeral memory during the scoring execution. Once the risk score response is returned, the payload is immediately purged. Sapinex does not retain, index, or sell client customer data.",
    spec: "Memory Lifetime: <50ms"
  },
  {
    title: "Cryptographic Transport Security",
    description: "All client communications enforce modern TLS 1.3 with strict cipher suites and HSTS. Legacy TLS versions (1.0, 1.1) and insecure ciphers are automatically terminated at the perimeter edge.",
    spec: "Cipher: AES-GCM / CHACHA20"
  },
  {
    title: "Data Sovereignty & Localization",
    description: "Sapinex infrastructure is hosted within secure, multi-availability zone European and UK data center clusters. Data is never routed outside compliant jurisdictions without explicit client contractual instruction.",
    spec: "Hosting: UK / EEA Regions"
  },
  {
    title: "Immutable Request Verification",
    description: "Every API request and response handshake supports HMAC-SHA256 signature verification, preventing man-in-the-middle tampering and ensuring deterministic audit logs for compliance officers.",
    spec: "Standard: HMAC-SHA256"
  }
];

const COMPLIANCE_ITEMS = [
  {
    standard: "UK GDPR & DPA 2018",
    status: "Statutory Compliance",
    scope: "Operates strictly as a Data Processor under UK GDPR Article 28. Standard Data Processing Addenda (DPA) available for all enterprise contracts.",
    reference: "Statutory UK Framework"
  },
  {
    standard: "Zero-PII Storage (Zero Retention)",
    status: "100% In-Flight Execution",
    scope: "Customer and passenger name submissions are evaluated strictly in volatile RAM. No personal identifiers are stored, logged to disk, or used for model training.",
    reference: "Privacy by Design"
  },
  {
    standard: "Security, Availability & Confidentiality Controls",
    status: "Implemented",
    scope: "Access control, encryption in transit and at rest, environment isolation, and change management are in place across our infrastructure. We have not yet completed a third-party audit — independent certification is on the enterprise roadmap.",
    reference: "Not yet audited"
  },
  {
    standard: "PCI-DSS Scoping Reduction",
    status: "Zero Cardholder Scope",
    scope: "Because Sapinex operates strictly on name verification metadata and never touches primary account numbers (PAN) or payment credentials, integration carries zero PCI scope expansion.",
    reference: "Zero Payment Data"
  }
];

export default function Trust() {
  return (
    <div className="relative min-h-screen bg-[var(--canvas)] selection:bg-[var(--accent)] selection:text-[var(--text-inverse)]">
      
      {/* ── HERO SECTION ── */}
      <section className="pt-36 pb-20 border-b border-[var(--border)] relative overflow-hidden">
        <Backdrop src="/backdrops/trust.jpg" opacity={0.07} saturation={0.3} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal direction="left" y={28}>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 bg-[var(--accent)]" />
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Security, Compliance & Infrastructure
              </p>
            </div>

            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] max-w-4xl leading-[1.1]">
              <SplitText delay={0.06} as="span">Enterprise security built on zero data retention.</SplitText>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-3xl leading-relaxed font-sans">
              Identity verification should never become a liability. Names are evaluated in memory and discarded — nothing is written to disk, logged, or used to train models. You get the decision; we keep none of the data.
            </p>

            {/* Status & Architecture Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[var(--border)]">
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Availability Target</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-2 w-2 bg-emerald-600 rounded-none" />
                  <p className="font-display font-bold text-2xl text-[var(--text-primary)]">99.9%</p>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">PII Storage Mode</p>
                <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">Zero-Retention</p>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Default Protocol</p>
                <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">TLS 1.3 Strict</p>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Data Sovereignty</p>
                <p className="font-display font-bold text-2xl text-[var(--text-primary)] mt-1">UK & EEA Nodes</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECURITY PILLARS ── */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Architectural Safeguards
                </h2>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Designed for institutional risk requirements
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {TRUST_PILLARS.map((pillar, idx) => {
                return (
                  <div 
                    key={idx} 
                    className="p-8 bg-[var(--container)] border border-[var(--border-strong)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-end mb-6">
                        <span className="font-mono text-xs text-[var(--text-muted)]">{pillar.spec}</span>
                      </div>

                      <h4 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                      <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                      <span>Enforced across all production cluster nodes</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DATA FLOW BLUEPRINT (AI SLOP FREE) ── */}
      <section className="py-24 border-b border-[var(--border)] bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Lifecycle Diagram
                </h2>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Ephemeral evaluation pipeline
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-4 leading-relaxed font-sans">
                Every request flows through an isolated, zero-disk pipeline. No databases, persistent object stores, or long-term caches store user identifiers.
              </p>
            </div>

            {/* Clean Architectural Flow Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 bg-[var(--container)] border border-[var(--border-strong)]">
                <p className="font-mono text-xs text-[var(--text-muted)] mb-2">STAGE 01</p>
                <h4 className="font-display font-bold text-base text-[var(--text-primary)] mb-2">Ingress Handshake</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  TLS 1.3 encrypted tunnel terminated at edge proxy. API key verified and rate-limit checked against token bucket.
                </p>
              </div>

              <div className="p-6 bg-[var(--container)] border border-[var(--border-strong)]">
                <p className="font-mono text-xs text-[var(--text-muted)] mb-2">STAGE 02</p>
                <h4 className="font-display font-bold text-base text-[var(--text-primary)] mb-2">In-Memory Inference</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Payload loaded directly into non-persistent RAM. Specialized deterministic model computes entropy and token anomalies.
                </p>
              </div>

              <div className="p-6 bg-[var(--container)] border border-[var(--border-strong)]">
                <p className="font-mono text-xs text-[var(--text-muted)] mb-2">STAGE 03</p>
                <h4 className="font-display font-bold text-base text-[var(--text-primary)] mb-2">Score Generation</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Risk confidence value (0.00-1.00) and actionable decision flags are signed with cryptographic response headers.
                </p>
              </div>

              <div className="p-6 bg-[var(--container)] border border-[var(--border-strong)] border-l-2 border-l-[var(--accent)]">
                <p className="font-mono text-xs text-[var(--accent)] font-semibold mb-2">STAGE 04</p>
                <h4 className="font-display font-bold text-base text-[var(--text-primary)] mb-2">Zero-Trace Purge</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Process memory is freed immediately upon response transmission. Zero raw name strings written to disk or logs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMPLIANCE & GOVERNANCE TABLE ── */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Regulatory Matrix
                </h2>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Governance, certifications & legal frameworks
              </h3>
            </div>

            <div className="border border-[var(--border-strong)] bg-[var(--container)] overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)] bg-[var(--canvas)] font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    <th className="py-4 px-6 font-medium w-1/4">Standard / Regulation</th>
                    <th className="py-4 px-6 font-medium w-1/6 border-l border-[var(--border)]">Status</th>
                    <th className="py-4 px-6 font-medium w-5/12 border-l border-[var(--border)]">Operational Scope</th>
                    <th className="py-4 px-6 font-medium w-1/6 border-l border-[var(--border)]">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {COMPLIANCE_ITEMS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[var(--container-light)] transition-colors">
                      <td className="py-4 px-6 font-semibold text-[var(--text-primary)]">
                        {item.standard}
                      </td>
                      <td className="py-4 px-6 border-l border-[var(--border)]">
                        <span className="font-mono text-xs text-[var(--accent)] font-medium">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[var(--text-muted)] border-l border-[var(--border)] leading-relaxed">
                        {item.scope}
                      </td>
                      <td className="py-4 px-6 font-mono text-xs text-[var(--text-muted)] border-l border-[var(--border)]">
                        {item.reference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VULNERABILITY REPORTING ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="p-8 sm:p-12 border border-[var(--border-strong)] bg-[var(--container)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  Coordinated Disclosure
                </span>
              </div>
              <h4 className="font-display font-bold text-2xl text-[var(--text-primary)] tracking-tight">
                Vulnerability Disclosure Policy
              </h4>
              <p className="text-sm text-[var(--text-muted)] mt-2 font-sans leading-relaxed">
                We welcome reports from security researchers and industry partners. We commit to a 24-hour initial triage SLA and safe harbor protections for good-faith vulnerability research.
              </p>
              <p className="font-mono text-xs text-[var(--text-primary)] mt-3">
                Security Office: security@sapinex.com
              </p>
            </div>

            <div className="shrink-0">
              <Link to="/contact" className="cta-secondary">
                <span>Request Enterprise DPA</span>
                <ArrowUpRight size={14} className="cta-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
