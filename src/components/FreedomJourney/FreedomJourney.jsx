import useScrollReveal from "../../hooks/useScrollReveal";
import { chooseSteps } from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";

export default function FreedomJourney() {
  const { t, pick } = useI18n();
  const containerRef = useScrollReveal({ y: 40, stagger: 0.15 });

  return (
    <section id="freedom" className="scroll-mt-24 bg-black py-[50px] lg:py-[70px]">
      <div ref={containerRef} className="container-x">
        <div className="section-header" data-reveal>
          <h2 className="section-title m-0 text-white">{t("freedom.title")}</h2>
        </div>

        <div className="mt-8 lg:mt-[50px]" data-reveal>
          <div className="overflow-hidden rounded-t-xl">
            <img
              src="/assets/images/banner/garibook_freedom.webp"
              alt="Couple enjoying a ride together"
              width="1200"
              height="630"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-8 grid justify-items-start gap-8 sm:grid-cols-3 lg:mt-[50px] lg:justify-items-start lg:gap-6">
          {chooseSteps.map((step) => (
            <div
              key={pick(step.title)}
              data-reveal
              className="w-full max-w-[340px] sm:max-w-none"
            >
              <div className="mb-5">
                <img src={step.icon} alt="" width="64" height="64" className="h-16 w-16" />
              </div>
              <div>
                <h5
                  className="m-0 truncate whitespace-nowrap text-[24px] font-semibold leading-7 text-white lg:text-[32px] lg:leading-9"
                  title={pick(step.title)}
                >
                  {pick(step.title)}
                </h5>
                <p
                  className="mb-0 mt-2 truncate whitespace-nowrap text-[18px] font-medium leading-6 text-brand-muted lg:text-[24px] lg:leading-7"
                  title={pick(step.desc)}
                >
                  {pick(step.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
