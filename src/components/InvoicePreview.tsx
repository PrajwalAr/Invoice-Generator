"use client";
import React from "react";
import TemplateMinimalist from "./templates/TemplateMinimalist";
import TemplateCorporate from "./templates/TemplateCorporate";
import TemplateModern from "./templates/TemplateModern";
import TemplateCreative from "./templates/TemplateCreative";
import TemplateClassic from "./templates/TemplateClassic";
import { InvoiceConfig } from "@/lib/types";

type Props = {
  config: InvoiceConfig;
  previewRef: React.RefObject<HTMLDivElement>;
};

export default function InvoicePreview({ config, previewRef }: Props) {
  const Template = {
    Minimalist: TemplateMinimalist,
    Corporate: TemplateCorporate,
    Modern: TemplateModern,
    Creative: TemplateCreative,
    Classic: TemplateClassic
  }[config.template || "Minimalist"] ?? TemplateMinimalist;

  return (
    <div className="w-full">
      <div className="bg-gray-100 rounded border p-3">
        <div className="w-full max-w-[850px] mx-auto">
          <div className="bg-white shadow-sm mx-auto overflow-hidden" style={{ aspectRatio: "210 / 297" }}>
            <div ref={previewRef} className="w-full h-full p-8 print:p-0">
              <Template config={config} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
