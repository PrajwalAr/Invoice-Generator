import React from "react";
import { InvoiceConfig } from "@/lib/types";
import { formatMoney } from "@/lib/currency";
import clsx from "clsx";

export function useThemeVars(config: InvoiceConfig) {
  const p = config.visuals?.palette || {};
  const f = config.visuals?.fonts || {};
  return {
    colors: {
      primary: p.primary ?? "#111827",
      accent: p.accent ?? "#2563eb",
      muted: p.muted ?? "#6b7280",
      border: p.border ?? "#e5e7eb",
      tableHeaderBg: p.tableHeaderBg ?? "#f9fafb",
    },
    fonts: {
      headerFamily: f.headerFamily ?? "Inter, ui-sans-serif, system-ui",
      bodyFamily: f.bodyFamily ?? "Inter, ui-sans-serif, system-ui",
      h1: f.h1Size ?? 28,
      h2: f.h2Size ?? 18,
      body: f.bodySize ?? 12,
      lineItem: f.lineItemSize ?? 12,
    }
  };
}

export function ItemsTable({
  config,
  className
}: { config: InvoiceConfig; className?: string }) {
  const layout = config.layout || {};
  const cols = layout.columns || ["description","quantity","rate","amount","discount","tax"];
  const hidden = new Set(layout.hiddenColumns || []);
  const labels = layout.columnLabels || {};
  const currencySymbol = config.invoice.currencySymbol ?? "$";

  const visibleCols = cols.filter(c => !hidden.has(c));

  const subtotal = config.totals?.subtotal ??
    config.lineItems.reduce((s, li) => s + (li.amount ?? (li.quantity ?? 0) * (li.rate ?? 0)), 0);
  const discount = config.totals?.discount ?? config.lineItems.reduce((s, li) => s + (li.discount ?? 0), 0);
  const tax = config.totals?.tax ?? config.lineItems.reduce((s, li) => s + (li.tax ?? 0), 0);
  const total = config.totals?.total ?? (subtotal - discount + tax);

  return (
    <div className={clsx("w-full mt-6", className)}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {visibleCols.map(col => (
                <th key={col} className="text-left px-3 py-2 border-b text-gray-700 bg-gray-50">
                  {labels[col] ?? col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {config.lineItems.map((li, idx) => (
              <tr key={idx} className="border-b">
                {visibleCols.map(col => {
                  let v: React.ReactNode = "";
                  switch (col) {
                    case "description": v = li.description; break;
                    case "quantity": v = li.quantity ?? ""; break;
                    case "rate": v = li.rate != null ? formatMoney(li.rate, currencySymbol) : ""; break;
                    case "amount": {
                      const amt = li.amount ?? ((li.quantity ?? 0) * (li.rate ?? 0));
                      v = formatMoney(amt, currencySymbol);
                      break;
                    }
                    case "discount": v = li.discount != null ? formatMoney(li.discount, currencySymbol) : ""; break;
                    case "tax": v = li.tax != null ? formatMoney(li.tax, currencySymbol) : ""; break;
                  }
                  return <td key={col} className="px-3 py-2 text-sm text-gray-800">{v}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-end gap-1 mt-4">
        <div className="flex gap-6">
          <div className="text-sm text-gray-600">Subtotal:</div>
          <div className="text-sm font-medium">{formatMoney(subtotal, currencySymbol)}</div>
        </div>
        <div className="flex gap-6">
          <div className="text-sm text-gray-600">Discount:</div>
          <div className="text-sm font-medium">{formatMoney(discount, currencySymbol)}</div>
        </div>
        <div className="flex gap-6">
          <div className="text-sm text-gray-600">Tax:</div>
          <div className="text-sm font-medium">{formatMoney(tax, currencySymbol)}</div>
        </div>
        <div className="flex gap-6">
          <div className="text-base font-semibold">Total:</div>
          <div className="text-base font-semibold">{formatMoney(total, currencySymbol)}</div>
        </div>
      </div>
    </div>
  );
}
