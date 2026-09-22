import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useScrollReveal from "../../hooks/useScrollReveal";
import { PrimaryButton } from "../common/Buttons";
import {
  platformCards,
  servicePanels,
  serviceTabs,
} from "../../data/content";

function RidesPanel() {
  const ref = useScrollReveal({ y: 30, stagger: 0.1 });

  return (
    <div ref={ref}>
      <div data-reveal className="section-header mb-4 lg:mb-5">
        <h2 className="section-title m-0 whitespace-pre-line">
          {"Every Ride\nOne Platform"}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {platformCards.map((card) => (
          <div data-reveal key={card.title} className="group h-full">
            <div
              className={`box-item-wrap flex h-full min-h-[300px] flex-col items-start justify-center rounded-xl p-7 transition duration-500 lg:min-h-[354px] lg:p-9 ${
                card.active
                  ? "bg-brand-blue text-white"
                  : "bg-brand-surface hover:bg-brand-blue"
              }`}
            >
              <div className="relative z-[1] mb-4 flex items-center">
                <span
                  className={`absolute -left-9 top-0 h-[86px] rounded-r-xl bg-white transition-all duration-500 ${
                    card.active ? "w-[120px]" : "w-0 group-hover:w-[120px]"
                  }`}
                  aria-hidden="true"
                />
                <img
                  src={card.image}
                  alt=""
                  height="72"
                  className={`relative h-[72px] w-auto transition-all duration-500 ${
                    card.active ? "ml-5" : "group-hover:ml-5"
                  }`}
                />
              </div>
              <div className={`transition-colors duration-500 ${card.active ? "text-white" : "group-hover:text-white"}`}>
                <h5
                  className={`m-0 text-[22px] font-semibold leading-7 transition-colors duration-500 lg:text-[24px] ${
                    card.active ? "text-white" : "text-brand-ink group-hover:text-white"
                  }`}
                >
                  {card.title}
                </h5>
                <p
                  className={`mb-0 mt-3 text-[16px] font-medium leading-6 transition-colors duration-500 lg:text-[18px] ${
                    card.active ? "text-white/90" : "text-brand-muted group-hover:text-white/90"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailPanel({ panel }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    const ctx = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
    return () => ctx.revert();
  }, [panel]);

  return (
    <div ref={ref} className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
      <div className="md:pr-8 lg:pr-12">
        <div className="section-header">
          <h2 className="section-title m-0 whitespace-pre-line">{panel.title}</h2>
          <p className="section-subtitle my-4 max-w-[640px]">{panel.desc}</p>
          <PrimaryButton href={panel.href}>Learn More</PrimaryButton>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl">
        <img
          src={panel.image}
          alt=""
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState("rides");
  const headerRef = useScrollReveal({ y: 30, stagger: 0.1 });

  return (
    <section id="services" className="bg-white py-[50px] lg:py-[70px]">
      <div className="container-x">
        <div ref={headerRef}>
          <div data-reveal className="section-header">
            <h2 className="section-title m-0">Our Services</h2>
          </div>

          <div
            data-reveal
            role="tablist"
            aria-label="Our services"
            className="mt-4 flex flex-wrap gap-3"
          >
            {serviceTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={active === tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-xl px-4 py-3 text-[14px] font-semibold leading-5 transition-colors duration-500 sm:px-8 sm:py-[15px] sm:text-[20px] sm:leading-7 ${
                  active === tab.key
                    ? "bg-brand-blue text-white"
                    : "bg-brand-chip text-brand-ink hover:bg-brand-blue hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-[50px]">
          {active === "rides" ? (
            <RidesPanel />
          ) : (
            <DetailPanel panel={servicePanels[active]} />
          )}
        </div>
      </div>
    </section>
  );
}
