import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { testimonials } from "../../data/content";

function SliderButton({ direction, onClick, disabled }) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous testimonial" : "Next testimonial"}
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

const VISIBLE = 3;

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const containerRef = useScrollReveal({ y: 36, stagger: 0.12 });

  const maxStart = Math.max(0, testimonials.length - VISIBLE);
  const next = () => setStart((s) => Math.min(s + 1, maxStart));
  const prev = () => setStart((s) => Math.max(s - 1, 0));

  const items = testimonials.slice(start, start + VISIBLE);

  return (
    <section
      id="reviews"
      className="bg-brand-surface-2 py-[50px] lg:py-[70px]"
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
            <SliderButton direction="prev" onClick={prev} disabled={start === 0} />
            <SliderButton
              direction="next"
              onClick={next}
              disabled={start >= maxStart}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              data-reveal
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <div className="relative h-[240px] overflow-hidden lg:h-[270px]">
                <img
                  src={t.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-[12px] font-bold text-brand-ink">
                  <img src="/assets/images/gaibook-logo.svg" alt="" className="h-3.5 w-auto" />
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

                <button
                  type="button"
                  aria-label={`Play testimonial from ${t.name}`}
                  className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#FF0000] text-white shadow-lg transition-transform hover:scale-110"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7-11-7Z" />
                  </svg>
                </button>
              </div>

              <div className="p-5">
                <p className="m-0 text-[18px] font-bold text-brand-ink">{t.name}</p>
                <p className="m-0 mt-1 text-[15px] text-brand-muted">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
