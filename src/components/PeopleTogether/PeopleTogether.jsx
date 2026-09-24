import useScrollReveal from "../../hooks/useScrollReveal";
import { peopleTogetherCards } from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";

export default function PeopleTogether() {
  const { t, pick } = useI18n();
  const containerRef = useScrollReveal({ y: 40, stagger: 0.14 });

  return (
    <section id="together" className="scroll-mt-24 bg-white py-[50px] lg:py-[70px]">
      <div ref={containerRef} className="container-x">
        <div className="section-header" data-reveal>
          <h2 className="section-title m-0 whitespace-pre-line">
            {t("together.title")}
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3">
          {peopleTogetherCards.map((card) => (
            <article
              key={pick(card.title)}
              data-reveal
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={card.image}
                alt={pick(card.title)}
                width="640"
                height="480"
                className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[320px] lg:h-[360px]"
                loading="lazy"
              />
              <div className="absolute left-0 right-0 top-0 bg-gradient-to-b from-black/45 via-black/10 to-transparent p-4 pt-5 md:p-5 md:pt-7 md:pl-[30px]">
                <h4 className="m-0 text-[24px] font-bold leading-7 text-white lg:text-[32px] lg:leading-9">
                  {pick(card.title)}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
