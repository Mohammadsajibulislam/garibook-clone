import ArrowRight from "../common/ArrowRight";
import useScrollReveal from "../../hooks/useScrollReveal";
import { blogPosts } from "../../data/content";
import { useI18n } from "../../i18n/I18nContext";

export default function BlogSection() {
  const { t } = useI18n();
  const containerRef = useScrollReveal({ y: 36, stagger: 0.12 });

  return (
    <section id="blogs" className="scroll-mt-24 bg-white py-[50px] lg:py-[70px]">
      <div ref={containerRef} className="container-x">
        <div
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          data-reveal
        >
          <div>
            <h2 className="section-title m-0">{t("blogs.title")}</h2>
            <p className="section-subtitle mt-1 mb-0 max-w-[900px]">
              {t("blogs.sub")}
            </p>
          </div>
          <a
            href="https://garibook.com/blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-[18px] font-bold text-brand-blue hover:underline"
          >
            {t("blogs.all")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3 lg:mt-[50px]">
          {blogPosts.map((post) => (
            <article key={post.title} data-reveal className="group" lang="bn">
              <a href={post.href} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.imageAlt || ""}
                  width="640"
                  height="480"
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <p className="mb-0 mt-4 text-[14px] font-medium text-brand-muted-2">
                {post.date}
              </p>
              <h3 className="mb-0 mt-2 text-[18px] font-bold leading-snug text-brand-ink">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block truncate whitespace-nowrap hover:text-brand-blue"
                  title={post.title}
                >
                  {post.title}
                </a>
              </h3>
              <p
                className="mb-0 mt-2 truncate whitespace-nowrap text-[15px] leading-relaxed text-brand-muted-2"
                title={post.excerpt}
              >
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
