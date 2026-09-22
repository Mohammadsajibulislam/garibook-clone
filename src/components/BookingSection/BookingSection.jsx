import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { airports, carTypes, stats } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

const carTripTypes = ["One Way", "Round Way", "Hourly"];
const airportTripTypes = ["From Airport", "From Home"];

function FieldLabel({ icon, children, required = true }) {
  return (
    <label className="mb-3 flex items-center gap-2 text-[18px] font-semibold leading-5 tracking-[-0.4px] text-brand-ink lg:text-[20px]">
      <img src={icon} alt="" width="20" height="20" className="h-5 w-5" />
      <span>
        {children}
        {required && <span className="text-red-500"> *</span>}
      </span>
    </label>
  );
}

function TripRadio({ name, value, checked, onChange, label }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-3 transition ${
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

function BookingForm() {
  const [tab, setTab] = useState("car-rental");
  const [tripType, setTripType] = useState("One Way");
  const [car, setCar] = useState("");
  const [airport, setAirport] = useState("");

  const isCar = tab === "car-rental";
  const tripOptions = isCar ? carTripTypes : airportTripTypes;

  const switchTab = (next) => {
    setTab(next);
    setTripType(next === "car-rental" ? "One Way" : "From Airport");
  };

  return (
    <div className="relative">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Rental type"
        className="relative z-10 inline-flex gap-3 rounded-t-xl bg-white px-4 pt-4 sm:px-7 sm:pt-7"
      >
        {[
          { key: "car-rental", label: "Car Rental" },
          { key: "airport-rental", label: "Airport Rental" },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => switchTab(t.key)}
            className={`rounded-lg px-5 py-3 text-[16px] font-semibold transition-colors sm:px-6 sm:text-[20px] ${
              tab === t.key
                ? "bg-brand-ink text-white"
                : "bg-transparent text-brand-ink hover:text-brand-blue"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="booking-shadow -mt-5 rounded-xl bg-white px-5 pb-8 pt-8 sm:px-7 sm:pb-[43px] sm:pt-10">
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 xl:grid-cols-4">
          <div className="border-brand-line pb-4 pr-0 sm:border-b sm:pr-6 xl:border-b-0 xl:border-r xl:pb-0">
            <FieldLabel icon="/assets/icon/fi_9610434.svg">
              Choose a Car
            </FieldLabel>
            <div className="relative">
              <select
                value={car}
                onChange={(e) => setCar(e.target.value)}
                aria-label="Choose a Car"
                className="form-field-input appearance-none pr-10 font-medium text-brand-muted"
              >
                <option value="">Select Car Type</option>
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
            <FieldLabel icon="/assets/icon/Frame76.svg">
              {isCar ? "Pickup Location" : "Pickup Airport"}
            </FieldLabel>
            {isCar ? (
              <input
                type="text"
                placeholder="Enter Pickup Location"
                aria-label="Pickup Location"
                className="form-field-input"
              />
            ) : (
              <select
                value={airport}
                onChange={(e) => setAirport(e.target.value)}
                aria-label="Pickup Airport"
                className="form-field-input appearance-none pr-10 font-medium text-brand-muted"
              >
                <option value="">Select Airport</option>
                {airports.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="border-brand-line py-4 pr-0 sm:border-b sm:pr-6 xl:border-b-0 xl:border-r xl:py-0">
            <FieldLabel icon="/assets/icon/fi_14910621.svg">
              Drop-off Location
            </FieldLabel>
            <input
              type="text"
              placeholder="Enter Drop-off Location"
              aria-label="Drop-off Location"
              className="form-field-input"
            />
          </div>

          <div className="py-4 sm:pl-0 xl:py-0 xl:pl-6">
            <FieldLabel icon="/assets/icon/fi_12516022.svg">
              Pickup Date &amp; Time
            </FieldLabel>
            <input
              type="text"
              placeholder="MM/DD/YYYY 00:00 PM"
              aria-label="Pickup Date and Time"
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
            {tripOptions.map((t) => (
              <TripRadio
                key={t}
                name="tripType"
                value={t}
                label={t}
                checked={tripType === t}
                onChange={setTripType}
              />
            ))}
          </div>

          <button
            type="button"
            className="btn-primary-gb shrink-0 justify-between sm:ml-auto"
          >
            <span className="btn-label">Continue</span>
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
    </div>
  );
}

/** GSAP animation #3 — count-up when the stats band enters the viewport. */
function StatsBar() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

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
          onUpdate: () => {
            target.textContent = `${Math.floor(counter.value).toLocaleString()}${stat.suffix}`;
          },
        });
      });
    }, el);

    return () => ctx.revert();
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
              From Everyday Rides to Meaningful Journeys
            </h2>
          </div>
          <div className="lg:col-span-5">
            <ul className="m-0 flex flex-col gap-6 p-0 sm:flex-row sm:flex-wrap sm:justify-end sm:gap-5 lg:gap-6">
              {stats.map((stat, i) => (
                <li key={stat.label} className="min-w-[130px]">
                  <h4
                    ref={(node) => {
                      numberRefs.current[i] = node;
                    }}
                    className="m-0 text-[32px] font-bold leading-9 text-brand-yellow-soft lg:text-[40px] lg:leading-[44px]"
                  >
                    0{stat.suffix}
                  </h4>
                  <span className="block text-[18px] font-semibold leading-7 text-white lg:text-[24px]">
                    {stat.label}
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

/**
 * Happy-client band: booking form overlaps the hero, then the blue
 * gradient stats area with animated counters and the city strip.
 */
export default function BookingSection() {
  const rootRef = useRef(null);

  useEffect(() => {
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
      className="relative z-10 bg-[linear-gradient(270deg,#0E53FF_0%,#0038C4_100%)]"
    >
      <div className="container-x">
        <div data-booking-form className="-translate-y-[120px] sm:-translate-y-[150px]">
          <BookingForm />
        </div>
      </div>
      <div className="-mt-[80px] sm:-mt-[100px]">
        <StatsBar />
      </div>
    </section>
  );
}
