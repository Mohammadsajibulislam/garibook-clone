import { useEffect, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { testimonials } from "../../data/content";
import SliderButton from "../common/SliderButton";

function useVisibleCount() {
  const [count, setCount] = useState(3);

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
  const [start, setStart] = useState(0);
  const visible = useVisibleCount();
  const containerRef = useScrollReveal({ y: 36, stagger: 0.12 });

  const maxStart = Math.max(0, testimonials.length - visible);
  const next = () => setStart((s) => Math.min(s + 1, maxStart));
  const prev = () => setStart((s) => Math.max(s - 1, 0));

  // Clamp when the visible count shrinks (desktop → mobile).
  useEffect(() => {
    setStart((s) => Math.min(s, maxStart));
  }, [maxStart]);

  const items = testimonials.slice(start, start + visible);

  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-brand-surface-2 py-[50px] lg:py-[70px]"
    >
      <div ref={containerRef} className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[860px] lg:w-2/3" data-reveal>
            <h2 className="section-title m-0">Our Passengers Speak For Us</h2>
            <p className="section-subtitle mt-2 mb-0 max-w-[860px]">
              Our journey was seamless and enjoyable from start to finish. The
              booking process was straightforward, and the staff were incredibly
              attentive, ensuring we felt comfortable throughout the trip.
            </p>
          </div>
          <div data-reveal className="flex gap-3 lg:pb-1">
            <SliderButton
              direction="prev"
              onClick={prev}
              disabled={start === 0}
              label="Previous testimonial"
            />
            <SliderButton
              direction="next"
              onClick={next}
              disabled={start >= maxStart}
              label="Next testimonial"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3">
          {items.map((t) => {
            const media = (
              <>
                <img
                  src={t.image}
                  alt=""
                  width="640"
                  height="360"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

                <span className="absolute right-3 top-3 inline-flex items-center rounded-md bg-white/95 px-2 py-1 text-[12px] font-bold text-brand-ink">
                  garibook
                </span>

                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3">
                  <p className="m-0 text-[13px] font-semibold leading-4 text-brand-muted-2">
                    Our passengers
                  </p>
                  <p className="m-0 text-[28px] font-extrabold leading-7 text-brand-blue">
                    speak
                  </p>
                  <p className="m-0 text-[13px] font-semibold text-brand-ink">
                    for us
                  </p>
                </div>

                {t.videoUrl ? (
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
                key={t.name}
                data-reveal
                className="overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="relative h-[240px] overflow-hidden lg:h-[270px]">
                  {t.videoUrl ? (
                    <a
                      href={t.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Watch ${t.name}'s testimonial video`}
                      className="block h-full w-full"
                    >
                      {media}
                    </a>
                  ) : (
                    <div className="h-full w-full">{media}</div>
                  )}
                </div>

                <div className="p-5">
                  <p className="m-0 text-[18px] font-bold text-brand-ink">{t.name}</p>
                  <p className="m-0 mt-1 text-[15px] text-brand-muted-2">{t.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}