import { useReducedMotion, motion } from "framer-motion";

/**
 * Reveal — scroll-triggered reveal with prefers-reduced-motion support.
 * When reduced motion is preferred, content renders immediately with no animation.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  direction = "up", // up, down, left, right, none
  duration = 0.6,
  className = "",
  once = true,
}) {
  const prefersReduced = useReducedMotion();

  const getInitial = () => {
    if (prefersReduced) return { opacity: 1 };
    
    let base = { opacity: 0 };

    switch (direction) {
      case "left":  return { ...base, x: -y };
      case "right": return { ...base, x: y };
      case "down":  return { ...base, y: -y };
      case "none":  return base;
      case "up":
      default:      return { ...base, y };
    }
  };

  const getAnimate = () => {
    if (prefersReduced) return { opacity: 1 };
    
    let base = { opacity: 1 };

    switch (direction) {
      case "left":
      case "right": return { ...base, x: 0 };
      case "down":
      case "up":    return { ...base, y: 0 };
      case "none":  return base;
      default:      return { ...base, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, margin: "-80px" }}
      transition={
        prefersReduced
          ? { duration: 0 }
          : { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
