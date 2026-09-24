/**
 * Roving-tabindex keyboard support for ARIA tablists.
 * Returns the next tab index for arrow / Home / End keys, or null.
 */
export function nextTabOnKeyDown(event, currentIndex, count) {
  switch (event.key) {
    case "ArrowRight":
    case "ArrowDown":
      return (currentIndex + 1) % count;
    case "ArrowLeft":
    case "ArrowUp":
      return (currentIndex - 1 + count) % count;
    case "Home":
      return 0;
    case "End":
      return count - 1;
    default:
      return null;
  }
}

/** Shared tablist keydown: moves selection + focus to the target tab button. */
export function handleTabKeyDown(event, { tabs, activeKey, idPrefix, onSelect }) {
  const currentIndex = tabs.findIndex((tab) => tab.key === activeKey);
  if (currentIndex < 0) return;
  const next = nextTabOnKeyDown(event, currentIndex, tabs.length);
  if (next === null) return;
  event.preventDefault();
  const key = tabs[next].key;
  onSelect(key);
  const btn = document.getElementById(`${idPrefix}-tab-${key}`);
  if (btn) btn.focus();
}
