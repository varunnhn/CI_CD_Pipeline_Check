import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[var(--nav-bg)] text-[var(--nav-text)] border-t border-[var(--nav-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <img src={logo} alt="SapinexAI Mark" className="h-14 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold text-[1.4rem] text-[var(--nav-header)] leading-none tracking-normal">
                SAPINEX<span className="text-[var(--nav-text)] font-medium"> AI</span>
              </span>
              {/* Fixed: was text-slate-500 (hardcoded), now uses design token */}
              <span className="text-[0.65rem] font-bold tracking-[0.22em] text-[var(--text-muted)] mt-1 uppercase">
                Data. Trust. Intelligence.
              </span>
            </div>
          </Link>
          <p className="font-sans text-sm leading-relaxed max-w-[45ch] opacity-80">
            We build risk-scoring infrastructure that helps regulated industries
            tell real customers from fabricated ones — in milliseconds, not manual reviews.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-[var(--nav-header)] text-sm font-semibold mb-4 tracking-tight">Product</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/products" className="hover:text-[var(--nav-hover)] transition-colors">Products</Link></li>
            <li><Link to="/solutions" className="hover:text-[var(--nav-hover)] transition-colors">Solutions</Link></li>
            <li>
              <a
                href="https://nameguardtest.sapinex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--nav-hover)] transition-colors"
              >
                NameGuard AI ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-[var(--nav-header)] text-sm font-semibold mb-4 tracking-tight">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/company" className="hover:text-[var(--nav-hover)] transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--nav-hover)] transition-colors">Contact</Link></li>
            <li><Link to="/register" className="hover:text-[var(--nav-hover)] transition-colors">Request access</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-[var(--nav-header)] text-sm font-semibold mb-4 tracking-tight">Legal & Trust</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/trust" className="hover:text-[var(--nav-hover)] transition-colors">Trust & Security</Link></li>
            <li><Link to="/privacy" className="hover:text-[var(--nav-hover)] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[var(--nav-hover)] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-[var(--nav-header)] text-sm font-semibold mb-4 tracking-tight">Registered office</h4>
          <p className="text-sm leading-relaxed font-mono opacity-80">
            SAPINEXAI LTD<br />
            Company No. 16478566<br />
            5 Meon Way, Wolverhampton<br />
            England, WV11 2QT
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--nav-border)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--nav-text)]/60">
          <p>© {new Date().getFullYear()} SapinexAI Ltd. All rights reserved.</p>
          <p>Registered in England &amp; Wales — No. 16478566</p>
        </div>
      </div>
    </footer>
  );
}
