import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import SplitText from "../components/SplitText";
import { submitForm } from "../config";
import Backdrop from "../components/Backdrop";

export default function Contact() {
  const [status,   setStatus]   = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [error,    setError]    = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const result = await submitForm({
      subject: `Contact form — ${formData.name}${formData.company ? ` (${formData.company})` : ""}`,
      from_name: "SapinexAI Website",
      name: formData.name,
      email: formData.email,
      company: formData.company || "Not provided",
      message: formData.message,
    });

    if (result.ok) {
      setStatus("sent");
    } else {
      setError(result.message);
      setStatus("idle");
    }
  }

  // Fixed: removed outline-none to preserve focus ring; replaced with explicit focus styling
  const inputClass = "mt-1 w-full rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--canvas)]";
  const inputStyle = {
    background: "var(--canvas)",
    border: "1px solid var(--border-strong)",
    color: "var(--text-primary)",
  };

  return (
    <div>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 relative overflow-hidden"
               style={{ background: "var(--nav-bg)" }}>
        <Backdrop src="/backdrops/contact.jpg" opacity={0.06} saturation={0.3} scrim="var(--nav-bg)" />
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              Contact
            </p>
            <h1 className="font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-[4rem] leading-[1.08] mt-7"
                style={{ color: "var(--nav-header)" }}>
              <SplitText delay={0.08} as="span">Let's talk about</SplitText>{" "}<br className="hidden sm:block" />
              <SplitText delay={0.16} as="span">your verification flow.</SplitText>
            </h1>
            <p className="mt-5 font-sans max-w-[45ch] leading-relaxed text-lg" style={{ color: "var(--nav-text)" }}>
              Whether you want a demo, API docs, or an enterprise integration quote —
              tell us a bit about your application, industry, or volume and we'll follow up.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-20" style={{ background: "var(--canvas)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-10">

          {/* Sidebar */}
          <Reveal className="lg:col-span-2 min-w-0">
            <div className="rounded-2xl p-7 h-full"
                 style={{ background: "var(--container)", border: "1px solid var(--border)" }}>
              <h3 className="font-display font-semibold tracking-tight text-lg" style={{ color: "var(--text-primary)" }}>
                Reach us directly
              </h3>
              <div className="mt-6 space-y-5 text-sm">
                <div className="pb-4 border-b border-[var(--border)]">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Direct Inquiries</p>
                  <a href="mailto:office@sapinex.com" className="font-medium text-base text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                    office@sapinex.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Registered Office</p>
                  <p className="font-medium leading-relaxed text-[var(--text-primary)]">
                    5 Meon Way, Wolverhampton,<br />England, WV11 2QT
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden mt-1" style={{ height: "180px", border: "1px solid var(--border)" }}>
                  <iframe
                    title="Registered office location"
                    width="100%" height="100%" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?width=100%25&height=180&hl=en&q=5%20Meon%20Way,%20Wolverhampton,%20WV11%202QT,%20England&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)" }}
                  />
                </div>
              </div>
              <div className="mt-6 pt-5 font-mono text-xs"
                   style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
                SAPINEXAI LTD - Company No. 16478566
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3 min-w-0">
            <div className="rounded-2xl p-7"
                 style={{ background: "var(--container)", border: "1px solid var(--border)" }}>
              {/* Required fields legend */}
              <p className="text-xs font-mono mb-4" style={{ color: "var(--text-muted)" }}>
                Fields marked <span aria-hidden="true" style={{ color: "var(--color-danger)" }}>*</span> are required
              </p>
              <AnimatePresence mode="wait">
                {status !== "sent" ? (
                  <motion.form key="form" exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="text-sm rounded-lg p-3" role="alert"
                           style={{ color: "var(--color-danger)", background: "rgba(229,62,62,0.1)", border: "1px solid rgba(229,62,62,0.3)" }}>
                        {error}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                          Full name <span aria-hidden="true" style={{ color: "var(--color-danger)" }}>*</span>
                        </span>
                        <input
                          required
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                          style={inputStyle}
                          placeholder="Jane Doe"
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                          Work email <span aria-hidden="true" style={{ color: "var(--color-danger)" }}>*</span>
                        </span>
                        <input
                          required
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                          style={inputStyle}
                          placeholder="jane@company.com"
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Company</span>
                      <input
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                        placeholder="Company or Organization name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                        What are you looking for? <span aria-hidden="true" style={{ color: "var(--color-danger)" }}>*</span>
                      </span>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className={inputClass}
                        style={inputStyle}
                        placeholder="Tell us about your verification requirements, industry, and volume…"
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      aria-busy={status === "sending"}
                      className="cta-primary disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {status === "sending"
                          ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending…</>
                          : "Send message"}
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div key="sent" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-10 text-center">
                    <CheckCircle2 className="mx-auto" size={30} style={{ color: "var(--accent)" }} />
                    <p className="font-display font-semibold text-lg mt-3" style={{ color: "var(--text-primary)" }}>Message sent</p>
                    <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>We'll get back to you within one business day.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
