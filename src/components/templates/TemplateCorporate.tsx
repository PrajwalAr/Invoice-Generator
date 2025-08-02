"use client";
import React from "react";
import { InvoiceConfig } from "@/lib/types";
import { useThemeVars, ItemsTable } from "./shared";

export default function TemplateCorporate({ config }: { config: InvoiceConfig }) {
  const { colors, fonts } = useThemeVars(config);
  return (
    <div className="w-full h-full text-gray-900" style={{ fontFamily: fonts.bodyFamily, fontSize: fonts.body }}>
      <div className="border-b-4" style={{ borderColor: colors.accent }}>
        <div className="flex justify-between items-center">
          <div className="py-4">
            <div className="text-sm text-gray-600">Invoice</div>
            <div className="text-2xl font-bold" style={{ fontFamily: fonts.headerFamily }}>#{config.invoice.number}</div>
          </div>
          <div className="py-4 text-right">
            {config.company.logo ? (
              <img src={config.company.logo} alt="Logo" className="h-12 object-contain ml-auto" />
            ) : (
              <div className="text-xl font-semibold">{config.company.name}</div>
            )}
            <div className="text-xs text-gray-600">
              {config.company.address?.join(" • ")}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="p-3 rounded border" style={{ borderColor: colors.border }}>
          <div className="text-xs uppercase tracking-wide text-gray-500">From</div>
          <div className="font-medium">{config.sender.name}</div>
          <div className="text-xs text-gray-600">{config.sender.address?.join(", ")}</div>
        </div>
        <div className="p-3 rounded border" style={{ borderColor: colors.border }}>
          <div className="text-xs uppercase tracking-wide text-gray-500">Bill To</div>
          <div className="font-medium">{config.recipient.name}</div>
          <div className="text-xs text-gray-600">{config.recipient.address?.join(", ")}</div>
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <div>Date: {config.invoice.date}</div>
        {config.invoice.dueDate && <div>Due: {config.invoice.dueDate}</div>}
        {config.invoice.paymentTerms && <div>Terms: {config.invoice.paymentTerms}</div>}
      </div>

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
