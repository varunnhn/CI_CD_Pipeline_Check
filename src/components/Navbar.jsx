import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../logo.svg";


const LINKS = [
  { to: "/",          label: "Home"      },
  { to: "/products",  label: "Products"  },
  { to: "/solutions", label: "Solutions" },
  { to: "/company",   label: "Company"   },
  { to: "/contact",   label: "Contact"   },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [hovered,  setHovered]  = useState(null);
  const [pillStyle, setPillStyle] = useState(null);
  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const updatePill = () => {
      const nav = navRef.current;
      if (!nav) return;

      const currentPath = hovered ?? location.pathname;
      const activeKey =
        currentPath !== "/" && currentPath.endsWith("/")
          ? currentPath.slice(0, -1)
          : currentPath;

      const target = linkRefs.current[activeKey];

      if (!target) {
        setPillStyle(null);
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      setPillStyle({
        x: targetRect.left - navRect.left,
        y: targetRect.top - navRect.top,
        width: targetRect.width,
        height: targetRect.height,
        isActive: !hovered,
      });
    };

    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [hovered, location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--nav-bg)]/95 backdrop-blur-md border-b border-[var(--nav-border)]"
          : "bg-[var(--nav-bg)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="SapinexAI"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col justify-center">
            <span className="font-sans font-extrabold text-[1.2rem] text-[var(--nav-header)] leading-none tracking-wide">
              SAPINEX<span className="text-[var(--text-muted)] font-medium"> AI</span>
            </span>
            <span className="text-[0.65rem] font-bold tracking-[0.22em] text-[var(--text-muted)] mt-1 uppercase">
              Data. Trust. Intelligence.
            </span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <nav
          ref={navRef}
          aria-label="Main navigation"
          className="relative hidden lg:flex items-center"
          onMouseLeave={() => setHovered(null)}
        >
          {pillStyle && (
            <motion.span
              aria-hidden="true"
              className={`absolute rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.22)] ${
                pillStyle.isActive
                  ? "bg-[var(--accent-subtle)] border border-[var(--accent)]/20"
                  : "bg-[var(--btn-ghost-hover)] border border-[var(--border-strong)]/80"
              }`}
              animate={{
                x: pillStyle.x,
                y: pillStyle.y,
                width: pillStyle.width,
                height: pillStyle.height,
              }}
              transition={{ type: "spring", stiffness: 240, damping: 28, mass: 0.8 }}
              initial={false}
            />
          )}
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onMouseEnter={() => setHovered(l.to)}
              ref={(node) => {
                if (node) {
                  linkRefs.current[l.to] = node;
                } else {
                  delete linkRefs.current[l.to];
                }
              }}
              className={({ isActive }) =>
                `relative font-sans px-4 py-2 text-sm font-medium tracking-normal transition-colors duration-200 select-none ${
                  isActive
                    ? "text-[var(--accent)]"
                    : hovered === l.to
                    ? "text-[var(--nav-header)]"
                    : "text-[var(--nav-text)]"
                }`
              }
            >
              <span className="relative z-10">{l.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center">
          <Link to="/register" className="cta-primary group">
            <span className="flex items-center gap-1.5 text-sm">
              Request access <ArrowUpRight size={14} className="cta-arrow" />
            </span>
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden text-[var(--nav-text)] p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden bg-[var(--nav-bg)] border-t border-[var(--nav-border)] px-5 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto"
          >
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-sans text-base font-medium px-4 py-3 rounded-xl transition-all duration-150 ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-subtle)] border border-[var(--accent)]/25"
                      : "text-[var(--nav-text)] hover:text-[var(--nav-header)] hover:bg-[var(--btn-ghost-hover)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="mt-4 cta-primary"
            >
              Request access
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
