import { useI18n } from "../i18n/I18nContext";

export default function PrivacyPage() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-[70px]">
      <div className="container-x max-w-[760px]">
        <h1 className="m-0 text-[36px] font-bold text-brand-ink">{t("privacy.title")}</h1>
        <p className="mt-4 mb-0 text-[16px] leading-relaxed text-brand-muted-2">{t("privacy.intro")}</p>

        <h2 className="mt-10 mb-2 text-[22px] font-bold text-brand-ink">{t("privacy.s1")}</h2>
        <p className="m-0 text-[16px] leading-relaxed text-brand-muted-2">{t("privacy.p1")}</p>

        <h2 className="mt-8 mb-2 text-[22px] font-bold text-brand-ink">{t("privacy.s2")}</h2>
        <p className="m-0 text-[16px] leading-relaxed text-brand-muted-2">{t("privacy.p2")}</p>

        <h2 className="mt-8 mb-2 text-[22px] font-bold text-brand-ink">{t("privacy.s3")}</h2>
        <p className="m-0 text-[16px] leading-relaxed text-brand-muted-2">{t("privacy.p3")}</p>
      </div>
    </section>
  );
}
