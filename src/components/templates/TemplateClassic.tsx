"use client";
import React from "react";
import { InvoiceConfig } from "@/lib/types";
import { useThemeVars, ItemsTable } from "./shared";

export default function TemplateClassic({ config }: { config: InvoiceConfig }) {
  const { colors } = useThemeVars(config);

  return (
    <div className="w-full h-full text-gray-900" style={{ fontFamily: "Georgia, Cambria, 'Times New Roman', serif", fontSize: 13 }}>
      <header className="border-b pb-3" style={{ borderColor: colors.border }}>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-3xl">Invoice</div>
            <div className="text-sm text-gray-600 mt-1">
              <div>Invoice #: {config.invoice.number}</div>
              <div>Date: {config.invoice.date}</div>
              {config.invoice.dueDate && <div>Due: {config.invoice.dueDate}</div>}
            </div>
          </div>
          <div className="text-right">
            {config.company.logo ? (
              <img src={config.company.logo} alt="Logo" className="h-12 object-contain ml-auto" />
            ) : (
              <div className="text-xl">{config.company.name}</div>
            )}
            <div className="text-sm text-gray-600">
              {config.company.address?.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </div>
        </div>
      </header>

      <section className="mt-4 grid grid-cols-2 gap-6">
        <div>
          <div className="uppercase tracking-wide text-gray-600 text-xs">From</div>
          <div className="font-medium">{config.sender.name}</div>
          <div className="text-sm text-gray-700">{config.sender.address?.join(", ")}</div>
        </div>
        <div>
          <div className="uppercase tracking-wide text-gray-600 text-xs">Bill To</div>
          <div className="font-medium">{config.recipient.name}</div>
          <div className="text-sm text-gray-700">{config.recipient.address?.join(", ")}</div>
        </div>
      </section>

      <ItemsTable config={config} className="mt-4" />

      {config.notes && (
        <div className="mt-6 text-sm text-gray-800">
          <div className="uppercase tracking-wide text-xs text-gray-600 mb-1">Notes</div>
          <div>{config.notes}</div>
        </div>
      )}
    </div>
  );
}
