export function formatMoney(
  amount: number,
  symbol = "$",
  locale = "en-US",
  currency?: string
) {
  if (currency) {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  }
  return `${symbol}${new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)}`;
}
