import ArrowRight from "../common/ArrowRight";
import useScrollReveal from "../../hooks/useScrollReveal";
import { newsFeatures } from "../../data/content";

function SliderButton({ direction, onClick, disabled }) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous" : "Next"}
      className="slider-arrow"
    >
      <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
        {isPrev ? (
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        ) : (
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        )}
      </svg>
    </button>
  );
}

export default function FeaturedNews() {
  const containerRef = useScrollReveal({ y: 36, stagger: 0.12 });

  return (
    <section id="news" className="bg-white pb-[50px] pt-[50px] lg:pb-[70px] lg:pt-[70px]">
      <div ref={containerRef} className="container-x">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-[50px]">
          <div className="max-w-[720px]" data-reveal>
            <h2 className="section-title m-0">
              We Featured by Top news Platforms
            </h2>
          </div>
          <div data-reveal className="hidden gap-3 sm:flex">
            <SliderButton direction="prev" disabled />
            <SliderButton direction="next" disabled />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsFeatures.map((item) => (
            <article key={item.title} data-reveal className="flex flex-col">
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt=""
                  width="100%"
                  height="100%"
                  className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="m-0 text-[14px] font-medium text-brand-muted">
                {item.date}
              </p>
              <h3 className="mb-0 mt-2 text-[18px] font-bold leading-snug text-brand-ink">
                {item.title}
              </h3>
              <p className="mb-0 mt-2 line-clamp-4 text-[15px] leading-relaxed text-brand-muted-2">
                {item.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <span className="text-[15px] font-extrabold text-brand-ink">
                  {item.source}
                </span>
                <a
                  href="#news"
                  className="inline-flex items-center gap-2 text-[16px] font-semibold text-brand-blue hover:underline"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
