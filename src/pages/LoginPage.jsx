import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [signedIn, setSignedIn] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!EMAIL_RE.test(email)) next.email = t("login.error.email");
    if (password.length < 6) next.password = t("login.error.password");
    setErrors(next);
    if (Object.keys(next).length === 0) setSignedIn(true);
  };

  if (signedIn) {
    return (
      <section className="bg-brand-surface-2 py-[70px]">
        <div className="container-x max-w-[560px]">
          <div className="rounded-2xl bg-white p-8 shadow-sm" role="status">
            <h1 className="m-0 text-[28px] font-bold text-brand-ink">
              {t("login.success")}
            </h1>
            <p className="mt-3 mb-0 text-[16px] leading-relaxed text-brand-muted-2">
              {t("login.successNote")}
            </p>
            <p className="mt-2 mb-0 text-[15px] text-brand-muted-2">{email}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/"
                className="rounded-lg bg-brand-blue px-5 py-3 font-semibold text-white"
              >
                {t("login.back")}
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSignedIn(false);
                  setPassword("");
                }}
                className="rounded-lg border border-brand-line px-5 py-3 font-semibold text-brand-ink"
              >
                {t("login.submit")}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-surface-2 py-[70px]">
      <div className="container-x max-w-[480px]">
        <h1 className="m-0 text-[32px] font-bold text-brand-ink">
          {t("login.title")}
        </h1>
        <p className="mt-2 mb-6 text-[15px] leading-relaxed text-brand-muted-2">
          {t("login.sub")}
        </p>

        <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <label htmlFor="login-email" className="mb-2 block text-[15px] font-semibold text-brand-ink">
            {t("login.email")}
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "login-email-err" : undefined}
            className="form-field-input"
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id="login-email-err" role="alert" className="mt-2 mb-0 text-[14px] text-red-600">
              {errors.email}
            </p>
          ) : null}

          <label htmlFor="login-password" className="mt-5 mb-2 block text-[15px] font-semibold text-brand-ink">
            {t("login.password")}
          </label>
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "login-password-err" : undefined}
            className="form-field-input"
            placeholder="••••••••"
          />
          {errors.password ? (
            <p id="login-password-err" role="alert" className="mt-2 mb-0 text-[14px] text-red-600">
              {errors.password}
            </p>
          ) : null}

          <label className="mt-5 flex items-center gap-2 text-[15px] text-brand-muted-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 accent-brand-blue"
            />
            {t("login.remember")}
          </label>

          <button type="submit" className="btn-primary-gb mt-6 w-full">
            <span className="btn-label">{t("login.submit")}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
