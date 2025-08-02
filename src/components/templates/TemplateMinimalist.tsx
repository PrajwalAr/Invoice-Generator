"use client";
import React from "react";
import { InvoiceConfig } from "@/lib/types";
import { useThemeVars, ItemsTable } from "./shared";

export default function TemplateMinimalist({ config }: { config: InvoiceConfig }) {
  const { colors, fonts } = useThemeVars(config);
  const bg = config.visuals?.background;

  return (
    <div
      className="relative w-full h-full text-gray-900"
      style={{
        fontFamily: fonts.bodyFamily,
        fontSize: fonts.body,
        backgroundImage: bg ? `url(${bg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {bg && (
        <div className="absolute inset-0"
             style={{ backgroundColor: `rgba(255,255,255,${1 - (config.visuals?.watermarkOpacity ?? 0.06)})` }} />
      )}
      <div className="relative h-full flex flex-col">
        <header className="flex justify-between items-start">
          <div>
            <h1 style={{ fontFamily: fonts.headerFamily, fontSize: fonts.h1 }} className="font-bold" >
              Invoice
            </h1>
            <div className="text-sm text-gray-600 mt-1">
              <div>Invoice #: {config.invoice.number}</div>
              <div>Date: {config.invoice.date}</div>
              {config.invoice.dueDate && <div>Due: {config.invoice.dueDate}</div>}
              {config.invoice.paymentTerms && <div>Terms: {config.invoice.paymentTerms}</div>}
            </div>
          </div>
          <div className="text-right">
            {config.company.logo ? (
              <img src={config.company.logo} alt="Logo" className="w-28 h-auto object-contain ml-auto" />
            ) : (
              <div className="text-lg font-semibold">{config.company.name}</div>
            )}
            <div className="text-sm text-gray-600 mt-1">
              {config.company.address?.map((l, i) => <div key={i}>{l}</div>)}
              {config.company.contact?.email && <div>{config.company.contact.email}</div>}
              {config.company.contact?.phone && <div>{config.company.contact.phone}</div>}
              {config.company.contact?.website && <div>{config.company.contact.website}</div>}
            </div>
          </div>
        </header>

        <section className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500">From</div>
            <div className="font-medium">{config.sender.name}</div>
            <div className="text-sm text-gray-600">
              {config.sender.address?.map((l, i) => <div key={i}>{l}</div>)}
              {config.sender.contact?.email && <div>{config.sender.contact.email}</div>}
              {config.sender.contact?.phone && <div>{config.sender.contact.phone}</div>}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500">Bill To</div>
            <div className="font-medium">{config.recipient.name}</div>
            <div className="text-sm text-gray-600">
              {config.recipient.address?.map((l, i) => <div key={i}>{l}</div>)}
              {config.recipient.contact?.email && <div>{config.recipient.contact.email}</div>}
              {config.recipient.contact?.phone && <div>{config.recipient.contact.phone}</div>}
            </div>
          </div>
        </section>

        <ItemsTable config={config} />

        {config.notes && (
          <section className="mt-6">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">Notes</div>
            <div className="text-sm text-gray-700">{config.notes}</div>
          </section>
        )}

        <footer className="mt-auto pt-6 text-xs text-gray-500 border-t" style={{ borderColor: colors.border }}>
          <div>Generated with Invoice Generator MVP</div>
        </footer>
      </div>
    </div>
  );
}
