import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Privacy() {
  const lastUpdated = "September 2026";

  return (
    <div className="relative min-h-screen bg-[var(--canvas)] selection:bg-[var(--accent)] selection:text-[var(--text-inverse)]">
      
      {/* ── HEADER ── */}
      <section className="pt-36 pb-14 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 bg-[var(--accent)]" />
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Legal & Governance
              </p>
            </div>

            <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              Privacy Policy
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-[var(--text-muted)]">
              <span>SAPINEXAI LTD</span>
              <span>•</span>
              <span>Company No. 16478566</span>
              <span>•</span>
              <span>Last Revised: {lastUpdated}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── POLICY CONTENT ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="prose-clean space-y-12 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] font-sans">
            
            {/* 1. Introduction */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                1. Information About Us & Scope
              </h2>
              <p>
                This Privacy Policy sets out how <strong>SAPINEXAI LTD</strong> (&quot;Sapinex&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a private limited company incorporated in England and Wales under Company Registration Number <strong>16478566</strong> with its registered office at 5 Meon Way, Wolverhampton, England, WV11 2QT, collects, processes, and protects personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the UK Data Protection Act 2018.
              </p>
              <p className="mt-3">
                This document applies to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
                <li>Visitors to our website (<strong>sapinex.com</strong> and subdomains).</li>
                <li>Representatives of corporate clients evaluating or licensing our API products.</li>
                <li>Individuals contacting our sales, support, or security teams.</li>
              </ul>
            </div>

            {/* 2. Controller vs Processor */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                2. Data Controller vs. Data Processor Roles
              </h2>
              <p>
                Under the UK GDPR, our regulatory role depends on the specific context of the data interaction:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-[var(--container)] border border-[var(--border)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2">
                    Sapinex as Data Controller
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    We act as a Data Controller for business contact information, billing records, account credentials, and website operational telemetry.
                  </p>
                </div>
                <div className="p-4 bg-[var(--container)] border border-[var(--border)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-2">
                    Sapinex as Data Processor
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    When corporate clients submit identity payloads (e.g., customer names for NameGuard AI validation), we act strictly as a Data Processor under Article 28 of the UK GDPR.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. API Payload Zero-Retention Architecture */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                3. API Payloads & Zero Persistent Storage Guarantee
              </h2>
              <p>
                Our core technical design enforces strict <strong>data minimization and ephemeral execution</strong>:
              </p>
              <div className="p-4 bg-[var(--container)] border border-[var(--border-strong)] mt-4 font-mono text-xs text-[var(--text-primary)] space-y-2">
                <p>• Identity payloads submitted to the Sapinex API are held exclusively in volatile RAM during model inference.</p>
                <p>• Immediately following generation of the risk score response, the payload is purged from system memory.</p>
                <p>• We do NOT write customer name payloads to persistent disk, relational databases, cold storage, or log files.</p>
                <p>• We do NOT train foundation models on client-submitted customer PII.</p>
              </div>
            </div>

            {/* 4. Information We Collect */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                4. Categories of Data Collected
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">A. Information You Voluntarily Provide</h3>
                  <p className="mt-1">
                    When you request an API key, schedule an enterprise demo, or reach out via our contact forms, we collect your full name, work email address, company name, telephone number, and the technical scope of your inquiry.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">B. Technical & Authentication Metadata</h3>
                  <p className="mt-1">
                    When utilizing our services, we automatically capture IP addresses, API key tokens, request timestamp headers, HTTP response status codes, and rate-limit consumption counters. This metadata is strictly required for perimeter security and billing auditing.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Lawful Bases */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                5. Lawful Bases for Processing (UK GDPR Art. 6)
              </h2>
              <p>We process personal data under one or more of the following lawful bases:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Contractual Performance (Art. 6(1)(b)):</strong> To execute, deliver, and maintain our enterprise licensing contracts and service level agreements.</li>
                <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> To comply with applicable statutory accounting, tax, anti-fraud, and corporate governance laws in the United Kingdom.</li>
                <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> To maintain network perimeter security, detect adversarial API abuse, and improve infrastructural reliability.</li>
                <li><strong>Consent (Art. 6(1)(a)):</strong> Where explicitly granted for marketing announcements or non-essential telemetry.</li>
              </ul>
            </div>

            {/* 6. International Transfers */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                6. International Data Transfers
              </h2>
              <p>
                Sapinex operates server clusters situated within the United Kingdom and the European Economic Area (EEA). If technical support or infrastructure routing requires cross-border data transit, we implement robust transfer mechanisms in accordance with Chapter V of the UK GDPR, including the UK International Data Transfer Addendum or approved Standard Contractual Clauses (SCCs).
              </p>
            </div>

            {/* 7. Data Retention */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                7. Data Retention Periods
              </h2>
              <div className="border border-[var(--border)] overflow-hidden mt-4">
                <table className="w-full text-xs font-mono">
                  <thead className="bg-[var(--canvas)] border-b border-[var(--border)] text-[var(--text-muted)] text-left">
                    <tr>
                      <th className="p-3">Data Classification</th>
                      <th className="p-3 border-l border-[var(--border)]">Retention Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)] bg-[var(--container)]">
                    <tr>
                      <td className="p-3 text-[var(--text-primary)]">Client API Request Payloads</td>
                      <td className="p-3 border-l border-[var(--border)]">Ephemeral only (purged upon response delivery)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-[var(--text-primary)]">Corporate Inquiries & Sales Records</td>
                      <td className="p-3 border-l border-[var(--border)]">24 months following last commercial engagement</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-[var(--text-primary)]">Invoicing, VAT & Billing Audit Logs</td>
                      <td className="p-3 border-l border-[var(--border)]">7 years (UK statutory tax requirement)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8. Data Subject Rights */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                8. Your Legal Rights Under UK GDPR
              </h2>
              <p>Under UK data protection law, you possess enforceable rights regarding your personal data:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Right of Access (Art. 15):</strong> Obtain confirmation and copies of personal data held about you.</li>
                <li><strong>Right to Rectification (Art. 16):</strong> Request correction of inaccurate or incomplete records.</li>
                <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of data where retention is no longer legally justified.</li>
                <li><strong>Right to Restriction (Art. 18):</strong> Restrict processing under contested circumstances.</li>
                <li><strong>Right to Data Portability (Art. 20):</strong> Receive data in a structured, machine-readable format.</li>
                <li><strong>Right to Object (Art. 21):</strong> Object to processing based on legitimate interest justifications.</li>
              </ul>
              <p className="mt-3 text-xs">
                To exercise any of these rights, submit a formal request to <span className="font-mono text-[var(--text-primary)]">privacy@sapinex.com</span>. We respond within one calendar month as mandated by law.
              </p>
            </div>

            {/* 9. Supervisory Authority */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                9. Supervisory Authority & Inquiries
              </h2>
              <p>
                If you have concerns regarding our data handling, you have the right to lodge a formal complaint with the UK supervisory authority:
              </p>
              <div className="p-4 bg-[var(--container)] border border-[var(--border)] mt-3 font-mono text-xs">
                Information Commissioner&apos;s Office (ICO)<br />
                Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF<br />
                Helpline: 0303 123 1113 • Website: ico.org.uk
              </div>
            </div>

            {/* 10. Contact Officer */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                10. Corporate Legal Contact
              </h2>
              <p>Direct all statutory notices, privacy inquiries, and Data Protection Addendum (DPA) requests to:</p>
              <div className="p-4 bg-[var(--container)] border border-[var(--border)] mt-3 font-mono text-xs text-[var(--text-primary)]">
                Data Protection Officer<br />
                SAPINEXAI LTD<br />
                5 Meon Way, Wolverhampton, England, WV11 2QT<br />
                Electronic Mail: legal@sapinex.com
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-[var(--border)] flex items-center justify-between">
            <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)] hover:underline">
              <ArrowLeft size={14} />
              <span>Return to Home</span>
            </Link>
            <Link to="/terms" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
