"use client";
import React from "react";
import { InvoiceConfig } from "@/lib/types";
import { useThemeVars, ItemsTable } from "./shared";

export default function TemplateModern({ config }: { config: InvoiceConfig }) {
  const { colors, fonts } = useThemeVars(config);

  return (
    <div className="w-full h-full text-gray-900" style={{ fontFamily: fonts.bodyFamily, fontSize: fonts.body }}>
      <div className="grid grid-cols-[220px_1fr] gap-6">
        <aside className="rounded-lg p-4 text-white" style={{ background: colors.accent }}>
          <div className="text-sm opacity-90">Invoice</div>
          <div className="text-2xl font-bold" style={{ fontFamily: fonts.headerFamily }}>#{config.invoice.number}</div>
          <div className="mt-4 text-xs opacity-90">
            <div>Date: {config.invoice.date}</div>
            {config.invoice.dueDate && <div>Due: {config.invoice.dueDate}</div>}
          </div>
        </aside>
        <header className="flex justify-between">
          <div>
            <div className="text-2xl font-bold" style={{ fontFamily: fonts.headerFamily }}>{config.company.name}</div>
            <div className="text-sm text-gray-600">
              {config.company.address?.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </div>
          <div className="text-right">
            {config.company.logo && (
              <img src={config.company.logo} alt="Logo" className="h-12 object-contain ml-auto" />
            )}
            <div className="text-xs text-gray-600 mt-1">
              {config.company.contact?.email && <div>{config.company.contact.email}</div>}
              {config.company.contact?.phone && <div>{config.company.contact.phone}</div>}
            </div>
          </div>
        </header>
      </div>

      <section className="mt-6 grid grid-cols-2 gap-6">
        <div className="p-4 rounded-lg border" style={{ borderColor: colors.border }}>
          <div className="text-xs uppercase tracking-wide text-gray-500">From</div>
          <div className="font-medium">{config.sender.name}</div>
          <div className="text-sm text-gray-600">{config.sender.address?.join(", ")}</div>
        </div>
        <div className="p-4 rounded-lg border" style={{ borderColor: colors.border }}>
          <div className="text-xs uppercase tracking-wide text-gray-500">Bill To</div>
          <div className="font-medium">{config.recipient.name}</div>
          <div className="text-sm text-gray-600">{config.recipient.address?.join(", ")}</div>
        </div>
      </section>

      <ItemsTable config={config} className="mt-4" />

      {config.notes && (
        <div className="mt-6 text-sm text-gray-700">
          <div className="font-medium mb-1">Notes</div>
          <div>{config.notes}</div>
        </div>
      )}
    </div>
  );
}
