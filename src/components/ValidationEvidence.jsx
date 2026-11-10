import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { NAME_SAMPLES } from "../data/nameSamples";

/* Decision feed for the homepage.
 * Cycles through NAME_SAMPLES — a fixed set of ~100 captured NameGuard
 * responses. Each new decision drops in from the top, pushing the list
 * down; the newest row gets a brief wash. It does not call the API.
 * Columns: name · region/reason · result · accuracy · latency.
 */

const LEN = NAME_SAMPLES.length;
const VISIBLE = 6;
const ROW_H = 44; // px — matches the fixed row height below
const TICK_MS = 2600;
const SLIDE_MS = 720;

const isReason = (s) => /^[A-Z0-9_]+$/.test(s);

function Row({ row, fresh }) {
  return (
    <li
      className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-5 border-b border-[var(--border)] ${
        fresh ? "ng-row-flash" : ""
      }`}
      style={{ height: ROW_H }}
    >
      <span
        aria-hidden="true"
        className={`w-[3px] h-6 shrink-0 rounded-full ${
          row.valid ? "bg-emerald-600/70" : "bg-red-600/60"
        }`}
      />

      <span
        className={`font-sans text-sm truncate flex-1 min-w-0 ${
          row.valid ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"
        }`}
      >
        {row.name}
      </span>

      <span
        className={`hidden sm:block shrink-0 w-40 text-right truncate ${
          isReason(row.meta)
            ? "font-mono text-[10px] text-[var(--text-muted)]"
            : "font-sans text-xs text-[var(--text-muted)]"
        }`}
      >
        {row.meta}
      </span>

      <span
        className={`shrink-0 w-[3.75rem] text-right font-mono text-[10px] uppercase tracking-wide ${
          row.valid ? "text-emerald-700" : "text-red-700"
        }`}
      >
        {row.valid ? "Valid" : "Invalid"}
      </span>

      <span className="hidden sm:block shrink-0 w-14 text-right font-mono text-[11px] text-[var(--text-muted)] tabular-nums">
        {row.accuracy.toFixed(1)}%
      </span>

      <span className="shrink-0 w-14 text-right font-mono text-[11px] text-[var(--text-primary)] tabular-nums">
        {row.ms}ms
      </span>
    </li>
  );
}

export default function ValidationEvidence() {
  const prefersReduced = useReducedMotion();
  const [cursor, setCursor] = useState(0);
  const [count, setCount] = useState(LEN);
  const [shift, setShift] = useState(false); // true while the list is sliding up one row
  const paused = useRef(false);

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(() => {
      if (paused.current || document.hidden) return;
      setShift(true);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [prefersReduced]);

  // When the slide finishes: snap back up and pull in the next row at the top.
  function onSlideEnd() {
    if (!shift) return;
    setShift(false);
    setCursor((c) => (c - 1 + LEN) % LEN);
    setCount((n) => n + 1);
  }

  // Render one extra row above the fold — it drops in from the top each tick.
  const rows = Array.from({ length: VISIBLE + 1 }, (_, k) => {
    const idx = (cursor - 1 + k + LEN) % LEN;
    return { idx, row: NAME_SAMPLES[idx] };
  });

  return (
    <div
      className="rounded-xl border border-[var(--border-strong)] bg-[var(--container)] overflow-hidden shadow-lg"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="flex items-baseline justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--canvas)]">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Sample decisions
        </span>
        <span className="font-mono text-[11px] text-[var(--text-muted)] tabular-nums">
          {prefersReduced ? `${LEN} samples` : `${count.toLocaleString()} evaluated`}
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 border-b border-[var(--border)] font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
        <span className="w-[3px] shrink-0" />
        <span className="flex-1 min-w-0">Name</span>
        <span className="hidden sm:block shrink-0 w-40 text-right">Region / Reason</span>
        <span className="shrink-0 w-[3.75rem] text-right">Result</span>
        <span className="hidden sm:block shrink-0 w-14 text-right">Accuracy</span>
        <span className="shrink-0 w-14 text-right">Latency</span>
      </div>

      {/* Viewport — fades softly at both edges so rows don't pop at a hard line */}
      <div
        className="relative overflow-hidden"
        style={{
          height: VISIBLE * ROW_H,
          maskImage:
            "linear-gradient(to bottom, transparent 0, #000 7px, #000 calc(100% - 22px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, #000 7px, #000 calc(100% - 22px), transparent 100%)",
        }}
      >
        <ul
          onTransitionEnd={onSlideEnd}
          style={{
            transform: `translateY(${shift ? 0 : -ROW_H}px)`,
            transition: shift
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1.2, 0.36, 1)`
              : "none",
          }}
        >
          {rows.map(({ idx, row }, k) => (
            <Row key={idx} row={row} fresh={!prefersReduced && k === 1} />
          ))}
        </ul>
      </div>

      <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--canvas)]">
        <p className="font-mono text-[10px] leading-relaxed text-[var(--text-muted)]">
          Real responses from the NameGuard AI engine. Every decision returns a
          reason code, an origin estimate and a confidence score.
        </p>
      </div>
    </div>
  );
}
