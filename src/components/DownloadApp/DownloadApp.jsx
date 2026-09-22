import useScrollReveal from "../../hooks/useScrollReveal";
import { WarningButton } from "../common/Buttons";
import { APP_DOWNLOAD_URL } from "../../data/content";

export default function DownloadApp() {
  const containerRef = useScrollReveal({ y: 40 });

  return (
    <section className="bg-white py-[50px] lg:py-[70px]">
      <div ref={containerRef} className="container-x">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl bg-brand-blue"
        >
          <div className="relative z-[2] px-6 py-10 sm:px-10 sm:py-14 lg:min-h-[531px] lg:py-0 lg:pl-[100px] lg:pr-8">
            <div className="flex h-full flex-col items-start justify-center lg:min-h-[531px]">
              <div className="max-w-[620px] lg:py-16">
                <h2 className="m-0 text-[32px] font-bold leading-9 text-white sm:text-[40px] sm:leading-[46px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-1.44px]">
                  Download
                  <br />
                  Garibook Mobile App
                </h2>
                <p className="mt-4 mb-0 max-w-[550px] text-[18px] font-medium leading-6 text-white sm:text-[24px] sm:leading-8">
                  Download our Customer, Smart Driver and Enterprise App
                </p>
                <div className="mt-5">
                  <WarningButton href={APP_DOWNLOAD_URL} className="max-w-[330px]">
                    Download App
                  </WarningButton>
                </div>
              </div>
            </div>
          </div>

          {/* Phone artwork — absolute like the reference ::after */}
          <div
            className="download-phone-art pointer-events-none absolute bottom-0 right-0 z-[1] h-[300px] w-[300px] opacity-95 sm:h-[380px] sm:w-[380px] lg:right-[40px] lg:h-[531px] lg:w-[531px] lg:opacity-100"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
