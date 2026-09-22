import ArrowRight from "./ArrowRight";

/** Yellow CTA used in the hero and download banners. */
export function WarningButton({
  children,
  href = "#",
  className = "",
  ...rest
}) {
  return (
    <a href={href} className={`btn-warning-gb ${className}`} {...rest}>
      <span className="btn-label">{children}</span>
      <ArrowRight />
    </a>
  );
}

/** Blue CTA used for Continue / Learn More / Download. */
export function PrimaryButton({
  children,
  href = "#",
  className = "",
  ...rest
}) {
  return (
    <a href={href} className={`btn-primary-gb ${className}`} {...rest}>
      <span className="btn-label">{children}</span>
      <ArrowRight />
    </a>
  );
}
