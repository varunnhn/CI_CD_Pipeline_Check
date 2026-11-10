import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import { submitForm, CONTACT_EMAIL } from "../config";

const panelPoints = [
  "One REST call — integrate in minutes, not weeks",
  "14 global naming regions covered out of the box",
  "No infrastructure to run, no models to train",
];

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", company: "", useCase: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const result = await submitForm({
      subject: `Early access request — ${form.name}${form.company ? ` (${form.company})` : ""}`,
      from_name: "SapinexAI Website",
      name: form.name,
      email: form.email,
      company: form.company || "Not provided",
      message: `Early access request.\n\nUse case: ${form.useCase || "Not provided"}`,
    });

    if (result.ok) {
      setStatus("sent");
    } else {
      setError(result.message);
      setStatus("idle");
    }
  }

  const inputClass =
    "mt-1.5 w-full rounded-lg px-3.5 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--canvas)]";
  const inputStyle = {
    background: "var(--canvas)",
    border: "1px solid var(--border-strong)",
    color: "var(--text-primary)",
  };

  return (
    <div className="grid lg:grid-cols-2 lg:min-h-screen">
      {/* ── Left: brand panel ── */}
      <div
        className="hidden lg:flex flex-col justify-between px-12 xl:px-16 pt-36 pb-14 relative overflow-hidden"
        style={{ background: "var(--nav-bg)" }}
      >
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            NameGuard AI
          </p>
          <h2
            className="font-display font-bold tracking-tight text-4xl xl:text-5xl leading-[1.1] mt-6 max-w-[18ch]"
            style={{ color: "var(--nav-header)" }}
          >
            Clean data starts at the door.
          </h2>
          <ul className="mt-10 space-y-3">
            {panelPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm" style={{ color: "var(--nav-text)" }}>
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative z-10 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          SAPINEXAI LTD — Company No. 16478566
        </p>
      </div>

      {/* ── Right: form ── */}
      <div className="flex items-start lg:items-center justify-center px-5 sm:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20" style={{ background: "var(--canvas)" }}>
        <Reveal className="w-full max-w-sm">
          <AnimatePresence mode="wait">
            {status !== "sent" ? (
              <motion.div key="form" exit={{ opacity: 0 }}>
                <h1 className="font-display font-bold tracking-tight text-3xl text-[var(--text-primary)]">
                  Request early access
                </h1>
                <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                  NameGuard AI is in private early access. Tell us a little about your
                  platform and we'll set you up with an API key.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {error && (
                    <div
                      className="text-sm rounded-lg p-3"
                      role="alert"
                      style={{
                        color: "var(--color-danger)",
                        background: "rgba(229,62,62,0.1)",
                        border: "1px solid rgba(229,62,62,0.3)",
                      }}
                    >
                      {error}
                    </div>
                  )}
                  <label className="block">
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Full name <span aria-hidden="true" style={{ color: "var(--color-danger)" }}>*</span>
                    </span>
                    <input
                      required
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Work email <span aria-hidden="true" style={{ color: "var(--color-danger)" }}>*</span>
                    </span>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-[var(--text-muted)]">Company</span>
                    <input
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Where would you use NameGuard AI?
                    </span>
                    <textarea
                      rows={3}
                      value={form.useCase}
                      onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    aria-busy={status === "sending"}
                    className="cta-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-2">
                      {status === "sending" ? (
                        <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending…</>
                      ) : (
                        <>Request access <ArrowRight size={16} className="cta-arrow" /></>
                      )}
                    </span>
                  </button>
                </form>

                <p className="text-sm text-[var(--text-muted)] mt-6 leading-relaxed">
                  Already working with us? Your account manager will send integration
                  details directly.
                </p>
              </motion.div>
            ) : (
              <motion.div key="sent" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-10 text-center">
                <CheckCircle2 className="mx-auto" size={30} style={{ color: "var(--accent)" }} />
                <p className="font-display font-semibold text-lg mt-3 text-[var(--text-primary)]">
                  You're on the list
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  We'll review your request and email {form.email} with next steps,
                  usually within one business day.
                </p>
                <Link
                  to="/"
                  className="cta-secondary mt-8 inline-flex"
                >
                  Back to home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-xs text-[var(--text-muted)] mt-4">
            Questions? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--accent)] hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </div>
  );
}
