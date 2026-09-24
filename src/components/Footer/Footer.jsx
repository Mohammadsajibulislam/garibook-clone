import ArrowRight from "../common/ArrowRight";
import { PrimaryButton } from "../common/Buttons";
import { APP_DOWNLOAD_URL, footerLinks } from "../../data/content";

function Widget({ title, links }) {
  return (
    <div>
      <h6 className="mb-4 text-[20px] font-semibold leading-[110%] tracking-[-0.6px] text-white">
        {title}
      </h6>
      <ul className="m-0 list-none space-y-1 p-0">
        {links.map((link) => (
          <li key={link.label} className="text-[17px] leading-[200%] text-white">
            {link.href ? (
              <a
                href={link.href}
                className="transition hover:text-brand-yellow-soft"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ) : (
              <span className="text-white/90">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompanyBlock({ title, logo, logoAlt, name }) {
  return (
    <div>
      <h2 className="m-0 text-[24px] font-bold leading-8 text-white lg:text-[32px] lg:leading-10">
        {title}
      </h2>
      <div className="mt-3 flex items-center gap-3 lg:mt-4">
        <img src={logo} alt={logoAlt} width="95" height="78" className="h-[70px] w-auto object-contain" />
        <div>
          <h3 className="m-0 text-[18px] font-semibold text-white">{name}</h3>
          <a
            href="#"
            className="mt-1 inline-flex items-center gap-1.5 text-[16px] font-bold text-brand-yellow hover:underline"
          >
            Visit Website
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-x">
        <div className="grid gap-10 py-[50px] sm:grid-cols-2 lg:grid-cols-12 lg:py-[70px]">
          <div className="lg:col-span-3">
            <Widget title="garibook" links={footerLinks.garibook} />
          </div>
          <div className="lg:col-span-3">
            <Widget title="Services" links={footerLinks.services} />
          </div>
          <div className="lg:col-span-3">
            <Widget title="Become Our Partner" links={footerLinks.partner} />
          </div>
          <div className="lg:col-span-3">
            <Widget title="Contacts" links={footerLinks.contacts} />
          </div>
        </div>

        <div className="grid gap-10 pb-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="m-0 text-[24px] font-bold leading-8 text-white lg:text-[32px] lg:leading-10">
              Download Our
              <br />
              Garibook Mobile App
            </h2>
            <div className="mt-4">
              <PrimaryButton href={APP_DOWNLOAD_URL}>Download App</PrimaryButton>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <CompanyBlock
              title="A Product By"
              logo="/assets/images/nrb/nrb_no_background.svg"
              logoAlt="NRB Solution Ltd."
              name="NRB Solution Ltd."
            />
            <CompanyBlock
              title="Powered By"
              logo="/assets/images/clients/link3-two.png"
              logoAlt="Link 3 Technologies"
              name="Link 3 Technologies"
            />
          </div>
        </div>

        <hr className="border-t border-white/15" />

        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
          <ul className="m-0 flex flex-wrap items-center gap-5 p-0">
            <li>
              <img src="/assets/images/Garibook_Logo.svg" alt="Garibook" height="48" className="h-10 w-auto" />
            </li>
            <li>
              <a href="#terms" className="text-[16px] text-white hover:text-brand-yellow-soft">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-[16px] text-white hover:text-brand-yellow-soft">
                Privacy Policy
              </a>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-6 text-center md:justify-end md:text-right">
            <span className="text-[15px] leading-6 text-white/80">
              Trade license number:
              <br />
              TRAD/DNCC/013806/2024
            </span>
            <span className="text-[16px] text-white">© 2026 Garibook.com</span>
          </div>
        </div>
      </div>

      <div className="mt-2 overflow-hidden bg-white">
        <img
          src="/assets/images/clients/ssl.png"
          alt="SSL Comodo security badge — payment partners"
          width="1320"
          height="120"
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
    </footer>
  );
}
