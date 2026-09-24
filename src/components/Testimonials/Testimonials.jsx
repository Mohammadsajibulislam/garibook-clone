import { useEffect, useRef, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { testimonials } from "../../data/content";
import SliderButton from "../common/SliderButton";
import { useI18n } from "../../i18n/I18nContext";

function readVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 640px)").matches) return 2;
  return 1;
}

function useVisibleCount() {
  const [count, setCount] = useState(readVisibleCount);

  useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (lg.matches) setCount(3);
      else if (sm.matches) setCount(2);
      else setCount(1);
    };
    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  return count;
}

export default function Testimonials() {
  const { t } = useI18n();
  const [start, setStart] = useState(0);
  const visible = useVisibleCount();
  const containerRef = useScrollReveal({ y: 36, stagger: 0.12 });
  const touchX = useRef(null);

  const maxStart = Math.max(0, testimonials.length - visible);
  // Clamp during render so shrinking the viewport never slices past the end.
  const currentStart = Math.min(start, maxStart);
  const next = () => setStart((s) => Math.min(s + 1, maxStart));
  const prev = () => setStart((s) => Math.max(s - 1, 0));

  const items = testimonials.slice(currentStart, currentStart + visible);
  const pageCount = maxStart + 1;

  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (dx < -50) next();
    else if (dx > 50) prev();
  };

  const status = t("testimonials.status")
    .replace("{from}", String(currentStart + 1))
    .replace("{to}", String(currentStart + items.length))
    .replace("{total}", String(testimonials.length));

  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-brand-surface-2 py-[50px] lg:py-[70px]"
    >
      <div ref={containerRef} className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[860px] lg:w-2/3" data-reveal>
            <h2 className="section-title m-0">{t("testimonials.title")}</h2>
            <p className="section-subtitle mt-2 mb-0 max-w-[860px]">
              {t("testimonials.sub")}
            </p>
          </div>
          <div data-reveal className="flex gap-3 lg:pb-1">
            <SliderButton
              direction="prev"
              onClick={prev}
              disabled={currentStart === 0}
              label={t("testimonials.prev")}
            />
            <SliderButton
              direction="next"
              onClick={next}
              disabled={currentStart >= maxStart}
              label={t("testimonials.next")}
            />
          </div>
        </div>

        <p aria-live="polite" role="status" className="sr-only">
          {status}
        </p>

        <div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {items.map((tItem) => {
            const media = (
              <>
                <img
                  src={tItem.image}
                  alt=""
                  width="640"
                  height="360"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

                <span className="absolute right-3 top-3 inline-flex items-center rounded-md bg-white/95 px-2 py-1 text-[12px] font-bold text-brand-ink">
                  {t("testimonials.brand")}
                </span>

                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3">
                  <p className="m-0 text-[13px] font-semibold leading-4 text-brand-muted-2">
                    {t("testimonials.ourPassengers")}
                  </p>
                  <p className="m-0 text-[28px] font-extrabold leading-7 text-brand-blue">
                    {t("testimonials.speak")}
                  </p>
                  <p className="m-0 text-[13px] font-semibold text-brand-ink">
                    {t("testimonials.forUs")}
                  </p>
                </div>

                {tItem.videoUrl ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#FF0000] text-white shadow-lg"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7-11-7Z" />
                    </svg>
                  </span>
                ) : null}
              </>
            );

            return (
              <article
                key={tItem.name}
                data-reveal
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative h-[240px] overflow-hidden lg:h-[270px]">
                  {tItem.videoUrl ? (
                    <a
                      href={tItem.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t("testimonials.watch").replace("{name}", tItem.name)}
                      className="block h-full w-full"
                    >
                      {media}
                    </a>
                  ) : (
                    <div className="h-full w-full">{media}</div>
                  )}
                </div>

                <div className="p-5">
                  <p className="m-0 text-[18px] font-bold text-brand-ink">{tItem.name}</p>
                  <p className="m-0 mt-1 text-[15px] text-brand-muted-2">{tItem.role}</p>
                </div>
              </article>
            );
          })}
        </div>

        {pageCount > 1 ? (
          <div
            data-reveal
            role="tablist"
            aria-label={t("testimonials.goto")}
            className="mt-8 flex items-center justify-center gap-2"
          >
            {Array.from({ length: pageCount }, (_, i) => {
              const selected = i === currentStart;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-label={`${t("testimonials.goto")} ${i + 1}`}
                  onClick={() => setStart(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    selected ? "w-7 bg-brand-blue" : "w-2.5 bg-brand-line hover:bg-brand-muted"
                  }`}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
