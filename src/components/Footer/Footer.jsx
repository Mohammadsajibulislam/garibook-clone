import { Link } from "react-router-dom";
import ArrowRight from "../common/ArrowRight";
import { PrimaryButton } from "../common/Buttons";
import { APP_DOWNLOAD_URL, footerLinks } from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";

function FooterLink({ href, children }) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const internal = href.startsWith("/");

  if (internal) {
    return (
      <Link
        to={href}
        className="transition hover:text-brand-yellow-soft"
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="transition hover:text-brand-yellow-soft"
      {...(external && !href.startsWith("mailto:") && !href.startsWith("tel:")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

function Widget({ title, links }) {
  const { t } = useI18n();
  return (
    <div>
      <h6 className="mb-4 text-[20px] font-semibold leading-[110%] tracking-[-0.6px] text-white">
        {title}
      </h6>
      <ul className="m-0 list-none space-y-1 p-0">
        {links.map((link) => {
          const label = link.labelKey ? t(link.labelKey) : link.label;
          return (
            <li key={label} className="text-[17px] leading-[200%] text-white">
              {link.href ? (
                <FooterLink href={link.href}>{label}</FooterLink>
              ) : (
                <span className="text-white/90">{label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CompanyBlock({ title, logo, logoAlt, name }) {
  const { t } = useI18n();
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
            href="https://garibook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 text-[16px] font-bold text-brand-yellow hover:underline"
          >
            {t("footer.visit")}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-black text-white">
      <div className="container-x">
        <div className="grid gap-10 py-[50px] sm:grid-cols-2 lg:grid-cols-12 lg:py-[70px]">
          <div className="lg:col-span-3">
            <Widget title={t("footer.garibook")} links={footerLinks.garibook} />
          </div>
          <div className="lg:col-span-3">
            <Widget title={t("footer.services")} links={footerLinks.services} />
          </div>
          <div className="lg:col-span-3">
            <Widget title={t("footer.partner")} links={footerLinks.partner} />
          </div>
          <div className="lg:col-span-3">
            <Widget title={t("footer.contacts")} links={footerLinks.contacts} />
          </div>
        </div>

        <div className="grid gap-10 pb-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="m-0 whitespace-pre-line text-[24px] font-bold leading-8 text-white lg:text-[32px] lg:leading-10">
              {t("footer.downloadHeading")}
            </h2>
            <div className="mt-4">
              <PrimaryButton href={APP_DOWNLOAD_URL}>{t("download.cta")}</PrimaryButton>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <CompanyBlock
              title={t("footer.productBy")}
              logo="/assets/images/nrb/nrb_no_background.svg"
              logoAlt="NRB Solution Ltd."
              name="NRB Solution Ltd."
            />
            <CompanyBlock
              title={t("footer.poweredBy")}
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
              <Link to="/terms" className="text-[16px] text-white hover:text-brand-yellow-soft">
                {t("footer.terms")}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-[16px] text-white hover:text-brand-yellow-soft">
                {t("footer.privacy")}
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-6 text-center md:justify-end md:text-right">
            <span className="text-[15px] leading-6 text-white/80">
              {t("footer.trade")}
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
