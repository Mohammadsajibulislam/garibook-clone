import ArrowRight from "../common/ArrowRight";
import useScrollReveal from "../../hooks/useScrollReveal";
import { newsFeatures } from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";

const BN_TITLES = new Set([0, 2]);

export default function FeaturedNews() {
  const { t } = useI18n();
  const containerRef = useScrollReveal({ y: 36, stagger: 0.12 });

  return (
    <section
      id="news"
      className="scroll-mt-24 bg-white pb-[50px] pt-[50px] lg:pb-[70px] lg:pt-[70px]"
    >
      <div ref={containerRef} className="container-x">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-[50px]">
          <div className="max-w-[720px]" data-reveal>
            <h2 className="section-title m-0">{t("news.title")}</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsFeatures.map((item, index) => {
            const isBn = BN_TITLES.has(index);
            return (
              <article key={item.title} data-reveal className="flex flex-col">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.imageAlt || ""}
                    width="640"
                    height="440"
                    className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="m-0 text-[14px] font-medium text-brand-muted-2">
                  {item.date}
                </p>
                <h3
                  lang={isBn ? "bn" : undefined}
                  className="mb-0 mt-2 truncate whitespace-nowrap text-[18px] font-bold leading-snug text-brand-ink"
                  title={item.title}
                >
                  {item.title}
                </h3>
                <p
                  lang={isBn ? "bn" : undefined}
                  className="mb-0 mt-2 truncate whitespace-nowrap text-[15px] leading-relaxed text-brand-muted-2"
                  title={item.excerpt}
                >
                  {item.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span
                    lang={isBn ? "bn" : undefined}
                    className="text-[15px] font-extrabold text-brand-ink"
                  >
                    {item.source}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[16px] font-semibold text-brand-blue hover:underline"
                  >
                    {t("news.read")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
