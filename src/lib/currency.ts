export function currency(v: number, currency: string = "USD") {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(v || 0);
  } catch {
    return `$${(v || 0).toFixed(2)}`;
  }
}
