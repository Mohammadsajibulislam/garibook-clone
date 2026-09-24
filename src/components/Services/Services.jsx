import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollReveal, { prefersReducedMotion } from "../../hooks/useScrollReveal";
import { PrimaryButton } from "../common/Buttons";
import {
  platformCards,
  servicePanels,
  serviceTabs,
} from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";
import { handleTabKeyDown } from "../../lib/tabs";

function RidesPanel() {
  const { t, pick } = useI18n();
  const ref = useScrollReveal({ y: 30, stagger: 0.1 });

  return (
    <div ref={ref}>
      <div data-reveal className="section-header mb-4 lg:mb-5">
        <h2 className="section-title m-0 whitespace-pre-line">
          {t("services.rides.title")}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {platformCards.map((card) => (
          <div data-reveal key={pick(card.title)} className="group h-full">
            <div className="box-item-wrap flex h-full min-h-[300px] flex-col items-start justify-center rounded-xl bg-brand-surface p-7 transition duration-500 hover:bg-brand-blue focus-within:bg-brand-blue lg:min-h-[354px] lg:p-9">
              <div className="relative z-[1] mb-4 flex items-center">
                <span
                  className="absolute -left-9 top-0 h-[86px] w-0 rounded-r-xl bg-white transition-all duration-500 group-hover:w-[120px]"
                  aria-hidden="true"
                />
                <img
                  src={card.image}
                  alt=""
                  height="72"
                  className="relative h-[72px] w-auto transition-all duration-500 group-hover:ml-5"
                />
              </div>
              <div className="transition-colors duration-500 group-hover:text-white">
                <h5 className="m-0 text-[22px] font-semibold leading-7 text-brand-ink transition-colors duration-500 group-hover:text-white lg:text-[24px]">
                  {pick(card.title)}
                </h5>
                <p className="mb-0 mt-3 text-[16px] font-medium leading-6 text-brand-muted-2 transition-colors duration-500 group-hover:text-white/90 lg:text-[18px]">
                  {pick(card.desc)}
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
  const { t } = useI18n();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
    return () => ctx.revert();
  }, [panel]);

  return (
    <div
      ref={ref}
      role="tabpanel"
      id="services-panel-detail"
      tabIndex={0}
      className="grid items-center gap-8 md:grid-cols-2 md:gap-10"
    >
      <div className="md:pr-8 lg:pr-12">
        <div className="section-header">
          <h2 className="section-title m-0 whitespace-pre-line">{panel.title}</h2>
          <p className="section-subtitle my-4 max-w-[640px]">{panel.desc}</p>
          <PrimaryButton href={panel.href}>{t("services.learn")}</PrimaryButton>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl">
        <img
          src={panel.image}
          alt=""
          width="640"
          height="420"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useI18n();
  const [active, setActive] = useState("rides");
  const headerRef = useScrollReveal({ y: 30, stagger: 0.1 });

  // Swapping panels changes page height — keep ScrollTrigger positions accurate.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [active]);

  const isRides = active === "rides";

  return (
    <section id="services" className="scroll-mt-24 bg-white py-[50px] lg:py-[70px]">
      <div className="container-x">
        <div ref={headerRef}>
          <div data-reveal className="section-header">
            <h2 className="section-title m-0">{t("services.title")}</h2>
          </div>

          <div
            data-reveal
            role="tablist"
            aria-label={t("services.tabs")}
            className="mt-4 flex flex-wrap gap-3"
          >
            {serviceTabs.map((tab) => {
              const selected = active === tab.key;
              const panelId = tab.key === "rides" ? "services-panel-rides" : "services-panel-detail";
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`services-tab-${tab.key}`}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(tab.key)}
                  onKeyDown={(e) =>
                    handleTabKeyDown(e, {
                      tabs: serviceTabs,
                      activeKey: active,
                      idPrefix: "services",
                      onSelect: setActive,
                    })
                  }
                  className={`rounded-xl px-4 py-3 text-[14px] font-semibold leading-5 transition-colors duration-500 sm:px-8 sm:py-[15px] sm:text-[20px] sm:leading-7 ${
                    selected
                      ? "bg-brand-blue text-white"
                      : "bg-brand-chip text-brand-ink hover:bg-brand-blue hover:text-white"
                  }`}
                >
                  {t(tab.labelKey)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 lg:mt-[50px]">
          {isRides ? (
            <div
              role="tabpanel"
              id="services-panel-rides"
              aria-labelledby="services-tab-rides"
              tabIndex={0}
            >
              <RidesPanel />
            </div>
          ) : (
            <DetailPanel
              key={active}
              panel={servicePanels[active]}
            />
          )}
        </div>
      </div>
    </section>
  );
}
