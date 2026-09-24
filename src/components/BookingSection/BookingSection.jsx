import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { airports, carTypes, stats } from "../../data/content";
import { prefersReducedMotion } from "../../hooks/useScrollReveal";
import { useI18n } from "../../i18n/I18nContext";
import { handleTabKeyDown } from "../../lib/tabs";

gsap.registerPlugin(ScrollTrigger);

const carTripKeys = ["booking.trip.oneWay", "booking.trip.roundWay", "booking.trip.hourly"];
const airportTripKeys = ["booking.trip.fromAirport", "booking.trip.fromHome"];

function FieldLabel({ icon, children, required = true, htmlFor, error }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-3 flex items-center gap-2 text-[18px] font-semibold leading-5 tracking-[-0.4px] text-brand-ink lg:text-[20px]"
    >
      <img src={icon} alt="" width="20" height="20" className="h-5 w-5" />
      <span>
        {children}
        {required && <span className="text-red-500"> *</span>}
        {error ? (
          <span role="alert" className="mt-1 block text-[13px] font-medium text-red-600">
            {error}
          </span>
        ) : null}
      </span>
    </label>
  );
}

function TripRadio({ name, value, checked, onChange, label }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-3 transition focus-within:ring-2 focus-within:ring-brand-blue focus-within:ring-offset-2 ${
        checked ? "bg-[#F2F2FF]" : "hover:bg-black/[0.03]"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={`grid h-7 w-7 place-items-center rounded-full border-[6px] transition ${
          checked ? "border-brand-blue bg-white" : "border-[#E9E9E9] bg-[#E9E9E9]"
        }`}
      />
      <span className="text-[18px] font-semibold tracking-[-0.4px] text-brand-ink lg:text-[20px]">
        {label}
      </span>
    </label>
  );
}

const bookingTabs = [
  { key: "car-rental", labelKey: "booking.carTab" },
  { key: "airport-rental", labelKey: "booking.airportTab" },
];

function BookingForm() {
  const { t } = useI18n();
  const [tab, setTab] = useState("car-rental");
  const [tripKey, setTripKey] = useState("booking.trip.oneWay");
  const [form, setForm] = useState({
    car: "",
    airport: "",
    pickup: "",
    dropoff: "",
    datetime: "",
  });
  const [errors, setErrors] = useState({});
  const [summary, setSummary] = useState(null);

  const isCar = tab === "car-rental";
  const tripOptions = isCar ? carTripKeys : airportTripKeys;

  const switchTab = (next) => {
    setTab(next);
    setTripKey(next === "car-rental" ? "booking.trip.oneWay" : "booking.trip.fromAirport");
    setErrors({});
  };

  const setField = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e));
  };

  const validate = () => {
    const next = {};
    if (!form.car) next.car = t("booking.error.car");
    if (isCar) {
      if (!form.pickup.trim()) next.pickup = t("booking.error.pickup");
    } else if (!form.airport) {
      next.airport = t("booking.error.airport");
    }
    if (!form.dropoff.trim()) next.dropoff = t("booking.error.dropoff");
    if (!form.datetime) next.datetime = t("booking.error.datetime");
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = e.currentTarget.querySelector("[aria-invalid='true'], input, select");
      if (first && typeof first.focus === "function") first.focus();
      return;
    }
    setSummary({
      trip: t(tripKey),
      car: form.car,
      from: isCar ? form.pickup : form.airport,
      fromLabel: isCar ? t("booking.pickupLocation") : t("booking.pickupAirport"),
      to: form.dropoff,
      when: form.datetime,
    });
  };

  if (summary) {
    return (
      <div className="relative">
        <div className="inline-flex gap-3 rounded-t-xl bg-white px-4 pt-4 sm:px-7 sm:pt-7" aria-hidden="true">
          <span className="rounded-lg bg-brand-ink px-5 py-3 text-[16px] font-semibold text-white sm:px-6 sm:text-[20px]">
            {isCar ? t("booking.carTab") : t("booking.airportTab")}
          </span>
        </div>
        <div
          className="booking-shadow -mt-5 rounded-xl bg-white px-5 pb-8 pt-8 sm:px-7 sm:pb-[43px] sm:pt-10"
          role="status"
        >
          <h3 className="m-0 text-[24px] font-bold text-brand-ink">{t("booking.confirm.title")}</h3>
          <p className="mt-1 mb-5 text-[14px] text-brand-muted-2">{t("booking.confirm.note")}</p>
          <dl className="m-0 grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-[13px] font-semibold uppercase tracking-wide text-brand-muted-2">
                {t("booking.confirm.trip")}
              </dt>
              <dd className="m-0 text-[17px] font-semibold text-brand-ink">{summary.trip}</dd>
            </div>
            <div>
              <dt className="text-[13px] font-semibold uppercase tracking-wide text-brand-muted-2">
                {t("booking.confirm.car")}
              </dt>
              <dd className="m-0 text-[17px] font-semibold text-brand-ink">{summary.car}</dd>
            </div>
            <div>
              <dt className="text-[13px] font-semibold uppercase tracking-wide text-brand-muted-2">
                {summary.fromLabel}
              </dt>
              <dd className="m-0 text-[17px] font-semibold text-brand-ink">{summary.from}</dd>
            </div>
            <div>
              <dt className="text-[13px] font-semibold uppercase tracking-wide text-brand-muted-2">
                {t("booking.confirm.to")}
              </dt>
              <dd className="m-0 text-[17px] font-semibold text-brand-ink">{summary.to}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-[13px] font-semibold uppercase tracking-wide text-brand-muted-2">
                {t("booking.confirm.when")}
              </dt>
              <dd className="m-0 text-[17px] font-semibold text-brand-ink">{summary.when}</dd>
            </div>
          </dl>
          <button
            type="button"
            className="btn-primary-gb mt-6"
            onClick={() => setSummary(null)}
          >
            <span className="btn-label">{t("booking.confirm.again")}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <div
        role="tablist"
        aria-label={t("booking.tabs")}
        className="relative z-10 inline-flex gap-3 rounded-t-xl bg-white px-4 pt-4 sm:px-7 sm:pt-7"
      >
        {bookingTabs.map((tb) => {
          const selected = tab === tb.key;
          return (
            <button
              key={tb.key}
              type="button"
              role="tab"
              id={`booking-tab-${tb.key}`}
              aria-selected={selected}
              aria-controls={`booking-panel-${tb.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => switchTab(tb.key)}
              onKeyDown={(e) =>
                handleTabKeyDown(e, {
                  tabs: bookingTabs,
                  activeKey: tab,
                  idPrefix: "booking",
                  onSelect: switchTab,
                })
              }
              className={`rounded-lg px-5 py-3 text-[16px] font-semibold transition-colors sm:px-6 sm:text-[20px] ${
                selected
                  ? "bg-brand-ink text-white"
                  : "bg-transparent text-brand-ink hover:text-brand-blue"
              }`}
            >
              {t(tb.labelKey)}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`booking-panel-${tab}`}
        aria-labelledby={`booking-tab-${tab}`}
        tabIndex={0}
        className="booking-shadow -mt-5 rounded-xl bg-white px-5 pb-8 pt-8 sm:px-7 sm:pb-[43px] sm:pt-10"
      >
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 xl:grid-cols-4">
          <div className="border-brand-line pb-4 pr-0 sm:border-b sm:pr-6 xl:border-b-0 xl:border-r xl:pb-0">
            <FieldLabel icon="/assets/icon/fi_9610434.svg" htmlFor="booking-car" error={errors.car}>
              {t("booking.chooseCar")}
            </FieldLabel>
            <div className="relative">
              <select
                id="booking-car"
                value={form.car}
                onChange={(e) => setField("car", e.target.value)}
                aria-invalid={Boolean(errors.car)}
                className="form-field-input appearance-none pr-10 font-medium text-brand-muted-2"
              >
                <option value="">{t("booking.selectCar")}</option>
                {carTypes.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <img
                src="/assets/icon/Down_Arrow_3_.png"
                alt=""
                className="pointer-events-none absolute right-3 top-1/2 h-3 w-5 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="border-brand-line py-4 pr-0 sm:border-b sm:pr-6 xl:border-b-0 xl:border-r xl:py-0">
            <FieldLabel
              icon="/assets/icon/Frame76.svg"
              htmlFor={isCar ? "booking-pickup" : "booking-airport"}
              error={isCar ? errors.pickup : errors.airport}
            >
              {isCar ? t("booking.pickupLocation") : t("booking.pickupAirport")}
            </FieldLabel>
            {isCar ? (
              <input
                id="booking-pickup"
                type="text"
                value={form.pickup}
                onChange={(e) => setField("pickup", e.target.value)}
                aria-invalid={Boolean(errors.pickup)}
                placeholder={t("booking.pickupPh")}
                className="form-field-input"
              />
            ) : (
              <div className="relative">
                <select
                  id="booking-airport"
                  value={form.airport}
                  onChange={(e) => setField("airport", e.target.value)}
                  aria-invalid={Boolean(errors.airport)}
                  className="form-field-input appearance-none pr-10 font-medium text-brand-muted-2"
                >
                  <option value="">{t("booking.selectAirport")}</option>
                  {airports.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
                <img
                  src="/assets/icon/Down_Arrow_3_.png"
                  alt=""
                  className="pointer-events-none absolute right-3 top-1/2 h-3 w-5 -translate-y-1/2"
                />
              </div>
            )}
          </div>

          <div className="border-brand-line py-4 pr-0 sm:border-b sm:pr-6 xl:border-b-0 xl:border-r xl:py-0">
            <FieldLabel icon="/assets/icon/fi_14910621.svg" htmlFor="booking-dropoff" error={errors.dropoff}>
              {t("booking.dropoff")}
            </FieldLabel>
            <input
              id="booking-dropoff"
              type="text"
              value={form.dropoff}
              onChange={(e) => setField("dropoff", e.target.value)}
              aria-invalid={Boolean(errors.dropoff)}
              placeholder={t("booking.dropoffPh")}
              className="form-field-input"
            />
          </div>

          <div className="py-4 sm:pl-0 xl:py-0 xl:pl-6">
            <FieldLabel icon="/assets/icon/fi_12516022.svg" htmlFor="booking-datetime" error={errors.datetime}>
              {t("booking.datetime")}
            </FieldLabel>
            <input
              id="booking-datetime"
              type="text"
              value={form.datetime}
              onChange={(e) => setField("datetime", e.target.value)}
              aria-invalid={Boolean(errors.datetime)}
              placeholder={t("booking.datetimePh")}
              onFocus={(e) => {
                e.target.type = "datetime-local";
              }}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              className="form-field-input"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1 sm:gap-0">
            {tripOptions.map((key) => (
              <TripRadio
                key={key}
                name="tripType"
                value={key}
                label={t(key)}
                checked={tripKey === key}
                onChange={setTripKey}
              />
            ))}
          </div>

          <button type="submit" className="btn-primary-gb shrink-0 justify-between sm:ml-auto">
            <span className="btn-label">{t("booking.continue")}</span>
            <img
              src="/assets/icon/right-arrow.png"
              alt=""
              width="24"
              height="24"
              className="btn-icon h-6 w-6"
            />
          </button>
        </div>
      </div>
    </form>
  );
}

/** GSAP animation #3 — count-up when the stats band enters the viewport.
 *  Final values render in the HTML so nothing is stuck at 0 if JS never runs.
 *  Decorative city/GIF layers pause while the band is off-screen.
 */
function StatsBar() {
  const { t } = useI18n();
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entry]) => {
              el.classList.toggle("is-offscreen", !entry.isIntersecting);
            },
            { threshold: 0 }
          )
        : null;
    if (io) io.observe(el);

    if (prefersReducedMotion()) {
      return () => io?.disconnect();
    }

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const target = numberRefs.current[i];
        if (!target) return;
        const counter = { value: 0 };
        gsap.to(counter, {
          value: stat.value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
          },
          onStart: () => {
            target.textContent = `0${stat.suffix}`;
          },
          onUpdate: () => {
            target.textContent = `${Math.floor(counter.value).toLocaleString()}${stat.suffix}`;
          },
        });
      });
    }, el);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      io?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="city-strip sedan-gif relative overflow-hidden pb-[110px] pt-12 sm:pt-20 lg:pb-[150px] lg:pt-[120px]"
    >
      <div className="container-x relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="m-0 text-[32px] font-bold leading-[36px] text-white sm:text-[46px] sm:leading-tight lg:text-[64px] lg:leading-normal">
              {t("stats.heading")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <ul className="m-0 flex flex-col gap-6 p-0 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-5 lg:gap-6">
              {stats.map((stat, i) => (
                <li key={stat.labelKey} className="min-w-[130px]">
                  <h4
                    ref={(node) => {
                      numberRefs.current[i] = node;
                    }}
                    className="m-0 text-[32px] font-bold leading-9 text-brand-yellow-soft lg:text-[40px] lg:leading-[44px]"
                  >
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </h4>
                  <span className="block text-[18px] font-semibold leading-7 text-white lg:text-[24px]">
                    {t(stat.labelKey)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-booking-form]",
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.35 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="booking"
      ref={rootRef}
      className="relative z-10 scroll-mt-24 bg-[linear-gradient(270deg,#0E53FF_0%,#0038C4_100%)]"
    >
      <div className="container-x">
        <div data-booking-form className="-translate-y-[100px] sm:-translate-y-[150px]">
          <BookingForm />
        </div>
      </div>
      <div className="-mt-[60px] sm:-mt-[100px]">
        <StatsBar />
      </div>
    </section>
  );
}
