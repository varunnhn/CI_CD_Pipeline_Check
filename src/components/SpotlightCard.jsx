import { useRef, useState, useCallback } from "react";

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(15, 44, 89, 0.14)",
  borderColor = "rgba(15, 44, 89, 0.55)",
  ambientColor = "rgba(15, 44, 89, 0.2)",
  radius = 20,
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`group relative h-full w-full select-none transition-shadow duration-300 ${className}`}
      style={{
        borderRadius: `${radius}px`,
      }}
    >
      {/* ── Ambient Outer Glow (projects soft blue glow outside the card boundary) ── */}
      <div
        className="pointer-events-none absolute -inset-2.5 transition-opacity duration-500 blur-xl -z-10"
        style={{
          borderRadius: `${radius + 8}px`,
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${ambientColor}, transparent 70%)`,
        }}
      />

      {/* ── Card Container ── */}
      <div
        className="relative h-full w-full bg-[var(--container)] border border-[var(--border)] transition-all duration-300 shadow-sm group-hover:shadow-lg overflow-hidden flex flex-col justify-between"
        style={{
          borderRadius: `${radius}px`,
        }}
      >
        {/* ── Interactive Surface Spotlight (follows mouse across the card face) ── */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(380px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${spotlightColor}, rgba(15, 44, 89, 0.03) 45%, transparent 75%)`,
          }}
        />

        {/* ── High-Precision Border Spotlight (illuminates nearest edge) ── */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            borderRadius: `${radius}px`,
            opacity: isHovered ? 1 : 0,
            border: "1.5px solid transparent",
            background: `radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${borderColor}, rgba(15, 44, 89, 0.25) 40%, transparent 70%) border-box`,
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* ── Card Content ── */}
        <div className="relative z-20 h-full w-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}
