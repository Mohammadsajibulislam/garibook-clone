import { useEffect, useMemo, useState } from "react";

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
 * Mirrors the reference hero's typing-text effect (60ms type / 2s hold).
 */
export default function TypingHeadline({ titles }) {
  const flatTitles = useMemo(() => titles.map(flatten), [titles]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = flatTitles[titleIndex];
    let timeoutId;

    const tick = () => {
      if (!deleting) {
        setCharCount((c) => {
          const next = c + 1;
          if (next >= full.length) {
            timeoutId = setTimeout(() => setDeleting(true), HOLD_MS);
            return full.length;
          }
          timeoutId = setTimeout(tick, TYPE_SPEED);
          return next;
        });
      } else {
        setCharCount((c) => {
          const next = c - 1;
          if (next <= 0) {
            timeoutId = setTimeout(() => {
              setTitleIndex((i) => (i + 1) % flatTitles.length);
              setDeleting(false);
            }, PAUSE_BEFORE_DELETE_MS);
            return 0;
          }
          timeoutId = setTimeout(tick, DELETE_SPEED);
          return next;
        });
      }
    };

    timeoutId = setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
    return () => clearTimeout(timeoutId);
  }, [titleIndex, deleting, flatTitles]);

  const nodes = buildTyped(titles[titleIndex], charCount);

  return (
    <span className="typing-text" aria-live="polite">
      {nodes.map((n) =>
        n.accent ? (
          <span key={n.key} className="text-brand-ink">
            {n.text}
          </span>
        ) : (
          <span key={n.key}>{n.text}</span>
        )
      )}
    </span>
  );
}
