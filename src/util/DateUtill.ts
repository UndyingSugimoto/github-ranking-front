export function convertDate(date: string) {
  if (date.match(/-/)) {
    return date;
  }
  const replaced = date.replace(/\//g, "-");
  return replaced;
}
