import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals every descendant carrying `data-reveal` as it scrolls into view.
 * Shared across sections so ScrollTrigger setup lives in one place.
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

    const targets = el.querySelectorAll("[data-reveal]");
    if (!targets.length) return undefined;

    const ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, [y, stagger, start, duration]);

  return containerRef;
}
