import useScrollReveal from "../../hooks/useScrollReveal";
import { PrimaryButton } from "../common/Buttons";
import { APP_DOWNLOAD_URL, bookingArrivalCards } from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";

export default function BookingArrival() {
  const { t } = useI18n();
  const containerRef = useScrollReveal({ y: 40, stagger: 0.12 });

  return (
    <section id="arrival" className="scroll-mt-24 bg-black py-[50px] lg:py-[70px]">
      <div ref={containerRef} className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[720px] lg:w-1/2" data-reveal>
            <h2 className="section-title m-0 text-white">
              {t("arrival.title")}
            </h2>
          </div>
          <div data-reveal className="lg:flex lg:justify-end">
            <PrimaryButton href={APP_DOWNLOAD_URL}>{t("download.cta")}</PrimaryButton>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-12">
          {bookingArrivalCards.map((card, i) => (
            <div
              key={`${card.image}-${i}`}
              data-reveal
              className={`${card.span || "lg:col-span-4"} overflow-hidden rounded-xl`}
            >
              <img
                src={card.image}
                alt={card.alt}
                width="640"
                height="400"
                className="h-[200px] w-full rounded-t-xl object-cover sm:h-[240px] lg:h-[280px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
