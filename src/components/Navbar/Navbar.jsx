import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";

function LanguageToggle({ className = "" }) {
  const { lang, toggleLang, t } = useI18n();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t("lang.switch")}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-blue px-2.5 py-2 text-[13px] font-semibold text-white transition hover:bg-brand-blue-deep lg:px-3 lg:text-[13px] ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 640 512" fill="currentColor" aria-hidden="true" className="shrink-0">
        <path d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z" />
      </svg>
      <span className="hidden sm:inline">{lang === "en" ? "English" : "বাংলা"}</span>
    </button>
  );
}

export default function Navbar() {
  const { t, pick } = useI18n();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 24
  );
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const toggleRef = useRef(null);
  const wasOpen = useRef(false);

  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the drawer; focus returns to the toggle button.
  useEffect(() => {
    if (!open) {
      if (wasOpen.current && toggleRef.current) {
        toggleRef.current.focus();
      }
      wasOpen.current = false;
      return undefined;
    }
    wasOpen.current = true;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Highlight the nav link for the section currently in view (home only).
  useEffect(() => {
    if (!onHome) return undefined;
    const ids = [...new Set(navLinks.map((l) => l.href.slice(1)))];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-nav" : ""
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center gap-3 transition-all ${
            scrolled ? "py-3" : "py-4 lg:pt-11 lg:pb-4"
          }`}
          aria-label={t("nav.main")}
        >
          <Link to="/" className="flex shrink-0 items-center" aria-label={t("a11y.home")}>
            <img
              src="/assets/images/gaibook-logo.svg"
              alt="Garibook"
              height="48"
              fetchPriority="high"
              className="h-8 w-auto lg:h-10"
            />
          </Link>

          <ul className="hidden min-w-0 flex-1 items-center justify-end gap-3 xl:flex xl:gap-4">
            {navLinks.map((link) => {
              const isActive = onHome && activeId === link.href.slice(1);
              return (
                <li key={link.href + pick(link.label)} className="shrink-0">
                  <Link
                    className={`nav-link-gb whitespace-nowrap${isActive ? " is-active" : ""}`}
                    to={{ pathname: "/", hash: link.href }}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {pick(link.label)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden shrink-0 items-center gap-2 xl:flex xl:gap-3">
            <LanguageToggle />
            <Link
              to="/login"
              className="rounded-lg bg-brand-blue px-4 py-2.5 font-nav text-[15px] font-medium tracking-[-0.54px] text-white transition hover:bg-brand-blue-deep xl:px-5 xl:py-3 xl:text-[16px]"
            >
              {t("nav.login")}
            </Link>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-3 xl:hidden">
            <LanguageToggle className="hidden sm:inline-flex" />
            <Link
              to="/login"
              className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white"
            >
              {t("nav.login")}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              aria-label={t("nav.toggle")}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-brand-line"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 xl:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[min(360px,90vw)] bg-white shadow-nav transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-brand-line px-5 py-4">
            <img src="/assets/images/gaibook-logo.svg" alt="Garibook" className="h-9 w-auto" />
            <button
              type="button"
              aria-label={t("nav.close")}
              onClick={closeMenu}
              className="grid h-10 w-10 place-items-center rounded-lg border border-brand-line"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href + pick(link.label)}>
                <Link
                  to={{ pathname: "/", hash: link.href }}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-[17px] font-medium text-brand-ink transition hover:bg-brand-surface hover:text-brand-blue"
                >
                  {pick(link.label)}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <LanguageToggle className="w-full justify-center" />
            </li>
            <li className="mt-2">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block rounded-lg bg-brand-blue px-6 py-3 text-center text-[17px] font-semibold text-white"
              >
                {t("nav.login")}
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <img src="/assets/images/logo-vector.png" alt="" className="mx-auto max-h-24 w-auto opacity-90" />
          </div>
        </div>
      </div>
    </header>
  );
}
