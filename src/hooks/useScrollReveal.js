import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Reveals every descendant carrying `data-reveal` as it scrolls into view.
 * Progressive enhancement: content stays fully visible when motion is reduced
 * or GSAP cannot run, so nothing is ever left stuck at opacity 0.
 */
export default function useScrollReveal({
  y = 40,
  stagger = 0.12,
  start = "top 82%",
  duration = 0.75,
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    if (prefersReducedMotion()) return undefined;

    const targets = el.querySelectorAll("[data-reveal]");
    if (!targets.length) return undefined;

    let ctx;
    try {
      ctx = gsap.context(() => {
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            ease: "power3.out",
            stagger,
            scrollTrigger: {
              trigger: el,
              start,
              once: true,
            },
          }
        );
      }, el);
    } catch {
      return undefined;
    }

    // Keep trigger positions correct after late layout shifts
    // (images loading, tab panels swapping, viewport resize).
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 300);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [y, stagger, start, duration]);

  return containerRef;
}
