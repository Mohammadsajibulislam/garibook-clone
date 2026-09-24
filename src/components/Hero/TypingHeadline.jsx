import { useEffect, useMemo, useState } from "react";
import { prefersReducedMotion } from "../../hooks/useScrollReveal";

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const HOLD_MS = 2000;
const PAUSE_BEFORE_DELETE_MS = 400;

function flatten(segments) {
  return segments.map((s) => s.text).join("");
}

function buildTyped(segments, charCount) {
  const nodes = [];
  let remaining = charCount;

  for (const seg of segments) {
    if (remaining <= 0) break;
    const take = Math.min(seg.text.length, remaining);
    nodes.push({
      text: seg.text.slice(0, take),
      accent: Boolean(seg.accent),
      key: `${seg.text.slice(0, take)}-${nodes.length}`,
    });
    remaining -= take;
  }

  return nodes;
}

/**
 * Typewriter loop across hero headlines, with per-word accent segments.
 * Pauses while the tab is hidden; screen readers get a static headline.
 */
export default function TypingHeadline({ titles }) {
  const flatTitles = useMemo(() => titles.map(flatten), [titles]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced] = useState(() => prefersReducedMotion());
  const [hidden, setHidden] = useState(
    () => typeof document !== "undefined" && document.hidden
  );

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (reduced || hidden) return undefined;

    const full = flatTitles[titleIndex];
    let timeoutId;

    // One timer per state — side effects live only in the effect (never inside
    // a setState updater), so StrictMode's double-invoke can't leak timers.
    if (!deleting && charCount < full.length) {
      timeoutId = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED);
    } else if (!deleting) {
      timeoutId = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (charCount > 0) {
      timeoutId = setTimeout(() => setCharCount((c) => c - 1), DELETE_SPEED);
    } else {
      timeoutId = setTimeout(() => {
        setTitleIndex((i) => (i + 1) % flatTitles.length);
        setDeleting(false);
      }, PAUSE_BEFORE_DELETE_MS);
    }

    return () => clearTimeout(timeoutId);
  }, [titleIndex, charCount, deleting, flatTitles, reduced, hidden]);

  if (reduced) {
    return <span className="typing-text-static">{flatTitles[titleIndex]}</span>;
  }

  const nodes = buildTyped(titles[titleIndex], charCount);

  return (
    <>
      <span className="sr-only">{flatTitles[titleIndex]}</span>
      <span className="typing-text" aria-hidden="true">
        {nodes.map((n) =>
          n.accent ? (
            <span key={n.key} className="text-brand-blue">
              {n.text}
            </span>
          ) : (
            <span key={n.key}>{n.text}</span>
          )
        )}
      </span>
    </>
  );
}
