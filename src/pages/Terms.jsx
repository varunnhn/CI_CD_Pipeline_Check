import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Terms() {
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
                Legal & Commercial Terms
              </p>
            </div>

            <h1 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] leading-tight">
              Terms of Service
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-[var(--text-muted)]">
              <span>SAPINEXAI LTD</span>
              <span>•</span>
              <span>Company No. 16478566</span>
              <span>•</span>
              <span>Effective: {lastUpdated}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TERMS CONTENT ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="prose-clean space-y-12 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] font-sans">
            
            {/* 1. Binding Agreement */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                These Master Terms of Service (&quot;Agreement&quot; or &quot;Terms&quot;) constitute a legally binding agreement between <strong>SAPINEXAI LTD</strong> (&quot;Sapinex&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), registered in England and Wales under Company Number <strong>16478566</strong>, and the organization or entity (&quot;Customer&quot;, &quot;you&quot;, or &quot;your&quot;) accessing or using our website, application programming interfaces (APIs), software development kits (SDKs), or related identity risk-scoring services (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-3">
                By generating an API key, executing an Enterprise Order Form, or issuing queries against our endpoints, you affirm that you possess full corporate authority to bind your organization to these Terms. If you do not agree to these terms, you must not access or consume the Services.
              </p>
            </div>

            {/* 2. License Grant */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                2. API License Grant & Permitted Use
              </h2>
              <p>
                Subject to ongoing compliance with this Agreement and payment of applicable fees, Sapinex grants the Customer a non-exclusive, non-transferable, non-sublicensable, revocable license to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
                <li>Integrate the Sapinex API into internal software applications and business workflows.</li>
                <li>Submit identity evaluation queries for validation and risk analysis.</li>
                <li>Consume and store risk scores and confidence signals internally solely for operational risk and compliance decisioning.</li>
              </ul>
            </div>

            {/* 3. Acceptable Use & Prohibited Acts */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                3. Prohibited Activities & Usage Restrictions
              </h2>
              <p>Customer shall not, directly or indirectly, nor allow any third party to:</p>
              <div className="p-4 bg-[var(--container)] border border-[var(--border-strong)] mt-3 space-y-2 text-xs font-mono text-[var(--text-primary)]">
                <p>• Reverse-engineer, decompile, disassemble, or extract underlying model weights, heuristics, or algorithms.</p>
                <p>• Use outputs from the Services to train, fine-tune, or benchmark competing machine-learning models.</p>
                <p>• Conduct automated scraping or harvest data outside designated rate-limit and contract parameters.</p>
                <p>• Submit queries in violation of human rights, international sanctions, or unlawful surveillance prohibitions.</p>
                <p>• Probe, port-scan, or subject Sapinex endpoints to stress tests or penetration tests without prior written consent.</p>
              </div>
            </div>

            {/* 4. Authentication & Security */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                4. API Credentials & Account Security
              </h2>
              <p>
                Access to the Services requires unique API tokens and secret keys. Customer is strictly responsible for maintaining the confidentiality of all issued credentials. Any API activity authorized via Customer keys will be deemed authorized by Customer.
              </p>
              <p className="mt-3">
                Customer must notify Sapinex immediately at <span className="font-mono text-[var(--text-primary)]">security@sapinex.com</span> upon suspecting or confirming any key exposure or credential compromise.
              </p>
            </div>

            {/* 5. Service Availability & Maintenance */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                5. Availability & Service Level Agreement (SLA)
              </h2>
              <p>
                Sapinex targets a continuous system availability of <strong>99.9%</strong> across monthly measurement windows, excluding scheduled maintenance windows communicated at least 48 hours in advance.
              </p>
              <p className="mt-3">
                Enterprise tiers with custom SLA addenda specify financial service credits as the sole and exclusive remedy for unexcused downtime.
              </p>
            </div>

            {/* 6. Fees, Billing & Invoicing */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                6. Commercial Fees & Payment Terms
              </h2>
              <p>
                Services are metered on a query-volume basis according to the rates outlined in your Order Form or API Tier Schedule. Invoices are denominated in Great British Pounds (GBP), Euros (EUR), or US Dollars (USD) as contractually agreed.
              </p>
              <p className="mt-3">
                Undisputed invoices are payable within thirty (30) days from invoice date. Overdue balances accrue statutory interest under the UK Late Payment of Commercial Debts (Interest) Act 1998 at 8% above the Bank of England base lending rate.
              </p>
            </div>

            {/* 7. Intellectual Property */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                7. Intellectual Property Rights
              </h2>
              <p>
                <strong>Customer Data:</strong> As between the parties, Customer retains all title and intellectual property rights in customer data submitted to the API. In accordance with our Privacy Policy, Sapinex processes payloads ephemerally and retains zero ownership of raw customer inputs.
              </p>
              <p className="mt-3">
                <strong>Sapinex Technology:</strong> Sapinex retains all title, copyrights, patents, trade secrets, and intellectual property rights in the software, algorithms, documentation, API design, and trademarks associated with Sapinex AI.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                8. Warranties & Limitation of Liability
              </h2>
              <p>
                Except as expressly set forth herein, the Services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Sapinex disclaims all implied conditions, warranties, and terms of satisfactory quality, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="mt-3">
                To the maximum extent permitted under English law, neither party shall be liable for indirect, incidental, consequential, special, or punitive damages, or loss of profits, revenue, or business opportunity. The total aggregate liability of either party arising out of or related to this Agreement shall be capped at the total fees paid by Customer to Sapinex in the twelve (12) months preceding the incident.
              </p>
            </div>

            {/* 9. Termination */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                9. Suspension & Termination
              </h2>
              <p>
                Sapinex reserves the right to suspend API access immediately without notice if: (a) Customer breaches acceptable use restrictions in Section 3; (b) Customer credentials are compromised; or (c) Customer fails to cure an overdue invoice after seven (7) days written notice.
              </p>
              <p className="mt-3">
                Either party may terminate this Agreement upon thirty (30) days written notice for material breach if such breach remains uncured at the end of the notice period.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                10. Governing Law & Jurisdiction
              </h2>
              <p>
                This Agreement and any dispute, claim, or controversy arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>.
              </p>
              <p className="mt-3">
                The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this Agreement.
              </p>
            </div>

            {/* 11. Notices */}
            <div className="border-l-2 border-[var(--border-strong)] pl-6">
              <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                11. Formal Legal Notices
              </h2>
              <p>All legal notifications must be delivered in writing to:</p>
              <div className="p-4 bg-[var(--container)] border border-[var(--border)] mt-3 font-mono text-xs text-[var(--text-primary)]">
                Legal Counsel<br />
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
            <Link to="/privacy" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
