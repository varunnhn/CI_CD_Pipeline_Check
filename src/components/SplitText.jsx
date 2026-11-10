import { Fragment, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * SplitText — word-by-word animated reveal.
 * Respects prefers-reduced-motion: renders all text at once when enabled.
 */
export default function SplitText({
  children,
  className = "",
  delay = 0,
  as: Component = "span",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReduced = useReducedMotion();

  const isString = typeof children === "string";

  // Reduced motion or non-string children handling
  if (prefersReduced) {
    return <Component ref={ref} className={className}>{children}</Component>;
  }

  if (!isString) {
    return (
      <Component ref={ref} className={className}>
        <motion.span
          style={{ display: "inline-block" }}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay, type: "spring", damping: 12, stiffness: 100 },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.span>
      </Component>
    );
  }

  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(8px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <Component ref={ref} className={className}>
      <motion.span
        style={{ display: "inline" }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <Fragment key={index}>
            <motion.span variants={child} style={{ display: "inline-block" }}>
              {word}
            </motion.span>
            {index < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </motion.span>
    </Component>
  );
}
