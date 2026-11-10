/**
 * Backdrop — the one recipe for page backdrop imagery.
 *
 * Self-hosted from /public/backdrops (no third-party requests on the
 * critical path). Held at low opacity and partly desaturated so it reads
 * as depth rather than decoration, with a scrim top and bottom so it can
 * never collide with text.
 *
 * Only large, simple geometry survives at this opacity — see IMAGERY_BRIEF.md.
 */
export default function Backdrop({ src, opacity = 0.08, saturation = 0.6, scrim = "var(--canvas)", priority = false, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
    >
      <img
        src={src}
        alt=""
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-full object-cover"
        style={{ opacity, filter: `saturate(${saturation})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            `linear-gradient(to bottom, ${scrim} 0%, transparent 30%, transparent 70%, ${scrim} 100%)`,
        }}
      />
    </div>
  );
}
