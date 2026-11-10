import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageMeta — sets <title> and the meta description per route.
 * Without this every route shared the single static title in index.html.
 * Copy follows the NameGuard brochure rather than paraphrasing it.
 */
const BRAND = "SapinexAI";

const META = {
  "/": {
    title: "SapinexAI — Is the name real? Know in under 30 milliseconds.",
    description:
      "NameGuard AI validates human names at the point of entry in under 30ms — stopping keyboard mashes, bot entries and placeholder text before they reach your database.",
  },
  "/products": {
    title: `Products — ${BRAND}`,
    description:
      "Fast, reliable validation APIs for industries where speed is essential. Stop bad data early without adding friction for real customers.",
  },
  "/products/nameguard": {
    title: `NameGuard AI — Smart name validation as a service | ${BRAND}`,
    description:
      "Real names in, fake names out. A cloud-hosted REST API returning VALID, NEEDS REVIEW or INVALID with a confidence score and reason code, in under 30ms.",
  },
  "/solutions": {
    title: `Solutions — From signup forms to boarding passes | ${BRAND}`,
    description:
      "Where NameGuard AI fits: banking and fintech, travel and ticketing, e-commerce, SaaS signups, healthcare and government.",
  },
  "/company": {
    title: `Company — ${BRAND}`,
    description:
      "Fast identity verification, built by engineers who lived through bot seat-hoarding and PNR errors in airline systems.",
  },
  "/contact": {
    title: `Contact — ${BRAND}`,
    description:
      "Talk to us about a demo, API documentation, or an enterprise integration for NameGuard AI.",
  },
  "/trust": {
    title: `Trust & Security — ${BRAND}`,
    description:
      "How NameGuard AI handles your data: retention, processing, and the security posture behind the API.",
  },
  "/register": {
    title: `Request early access — ${BRAND}`,
    description:
      "NameGuard AI is in private early access. Tell us about your platform and we'll set you up with an API key.",
  },
  "/privacy": {
    title: `Privacy Policy — ${BRAND}`,
    description: "How SapinexAI Ltd collects, uses and retains information.",
  },
  "/terms": {
    title: `Terms of Service — ${BRAND}`,
    description: "The terms governing use of SapinexAI services and APIs.",
  },
};

const FALLBACK = {
  title: `Page not found — ${BRAND}`,
  description: "The page you were looking for does not exist.",
};

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = META[pathname] ?? (pathname === "/security" ? META["/trust"] : FALLBACK);
    document.title = meta.title;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", meta.description);
  }, [pathname]);

  return null;
}
