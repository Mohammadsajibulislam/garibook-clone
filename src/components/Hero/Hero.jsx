import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TypingHeadline from "./TypingHeadline";
import { WarningButton } from "../common/Buttons";
import { APP_DOWNLOAD_URL, heroTitles } from "../../data/content";

/**
 * GSAP animation #1 — orchestrated hero entrance on load:
 * headline → description → CTA, staggered with power3 easing.
 */
export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-title]",
        { autoAlpha: 0, y: 36 },
        { autoAlpha: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          "[data-hero-sub]",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          "[data-hero-cta]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          "-=0.35"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-white pb-[220px] pt-10 sm:pt-[80px] lg:pt-[118px] lg:pb-[290px]">
      <div className="container-x">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="hero-title-container">
            <h1
              data-hero-title
              className="m-0 min-h-[3.5rem] text-[32px] font-bold leading-[38px] text-brand-ink sm:text-[48px] sm:leading-[55px] lg:min-h-[150px] lg:text-[64px] lg:leading-[72px]"
            >
              <TypingHeadline titles={heroTitles} />
            </h1>
          </div>

          <div className="lg:pt-2">
            <p
              data-hero-sub
              className="m-0 max-w-[640px] text-[20px] font-medium leading-7 text-brand-muted sm:text-[28px] sm:leading-8"
            >
              Choose your city, pick your car and enjoy the journey with
              Garibook&rsquo;s best drivers.
            </p>
            <div data-hero-cta className="mt-4">
              <WarningButton href={APP_DOWNLOAD_URL}>Download App</WarningButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
