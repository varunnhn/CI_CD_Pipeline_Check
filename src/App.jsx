import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageMeta from "./components/PageMeta";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Product = lazy(() => import("./pages/Product"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Company = lazy(() => import("./pages/Company"));
const Contact = lazy(() => import("./pages/Contact"));
const Trust = lazy(() => import("./pages/Trust"));
const Register = lazy(() => import("./pages/Register"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));


function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-body min-h-screen flex flex-col">
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
        style={{ scaleX, background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }}
      />
      <PageMeta />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[50vh] text-[var(--text-muted)] text-sm font-mono tracking-widest uppercase">Loading...</div>}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/nameguard" element={<Product />} />
                <Route path="/product" element={<Navigate to="/products/nameguard" replace />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/trust" element={<Trust />} />
                <Route path="/security" element={<Trust />} />
                <Route path="/register" element={<Register />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
