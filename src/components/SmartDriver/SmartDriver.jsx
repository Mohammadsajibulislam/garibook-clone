import useScrollReveal from "../../hooks/useScrollReveal";
import { PrimaryButton } from "../common/Buttons";
import { DRIVER_APP_URL } from "../../data/content";

export default function SmartDriver() {
  const containerRef = useScrollReveal({ y: 40, stagger: 0.15 });

  return (
    <section id="driver" className="overflow-hidden bg-white py-[50px] lg:py-[70px]">
      <div ref={containerRef} className="container-x">
        <div className="section-header" data-reveal>
          <h2 className="section-title m-0">Be a Smart Driver</h2>
        </div>

        <div
          data-reveal
          className="mt-8 overflow-hidden rounded-2xl bg-brand-yellow-soft lg:mt-[50px]"
        >
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center px-6 py-10 sm:px-10 lg:min-h-[420px] lg:pl-[100px] lg:pr-8">
              <h2 className="m-0 text-[32px] font-bold leading-9 text-brand-blue lg:text-[64px] lg:leading-[72px]">
                0% Commission
                <br />
                100% Freedom
              </h2>
              <div className="mt-4">
                <PrimaryButton
                  href={DRIVER_APP_URL}
                  className="max-w-[330px]"
                >
                  Download Smart Driver App
                </PrimaryButton>
              </div>
            </div>

            <div className="flex justify-center px-4 pb-0 md:pb-0">
              <img
                src="/assets/images/app-screen/no_commission_app_screen.png"
                alt="Smart driver holding a phone with the Garibook driver app"
                width="100%"
                height="100%"
                className="max-h-[420px] w-full max-w-[360px] object-contain object-bottom md:max-h-[480px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
