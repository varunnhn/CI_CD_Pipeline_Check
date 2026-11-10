import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Counter — counts up to `value` on scroll-into-view.
 * Respects prefers-reduced-motion: shows final value immediately.
 */
export default function Counter({ value, prefix = "", suffix = "", duration = 1.4, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(prefersReduced ? value : 0);

  useEffect(() => {
    // Skip animation when reduced motion is preferred
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    let start = null;
    let raf;
    function step(ts) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setDisplay(value); // ensure we land exactly on the final value
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, prefersReduced]);

  return (
    <motion.span ref={ref} className="tabular-nums" aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </span>
    </motion.span>
  );
}
