/** Pick `value[lang]` from `{ en, bn }` objects; plain strings pass through. */
export function pick(lang, value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.en ?? "";
  }
  return value;
}
