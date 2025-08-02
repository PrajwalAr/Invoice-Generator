import { useMemo } from "react";
import { TemplateClassic } from "./templates/TemplateClassic";
import { TemplateMinimalist } from "./templates/TemplateMinimalist";
import { TemplateModern } from "./templates/TemplateModern";
import { TemplateCorporate } from "./templates/TemplateCorporate";
import { TemplateCreative } from "./templates/TemplateCreative";

export function InvoicePreview({ json }: { json: string }) {
  const data = useMemo(() => {
    try { return JSON.parse(json || "{}"); } catch { return {}; }
  }, [json]);

  const template = data.template || "classic";

  switch (template) {
    case "classic":
      return <TemplateClassic data={data} />;
    case "minimalist":
      return <TemplateMinimalist data={data} />;
    case "modern":
      return <TemplateModern data={data} />;
    case "corporate":
      return <TemplateCorporate data={data} />;
    case "creative":
      return <TemplateCreative data={data} />;
    default:
      return <TemplateClassic data={data} />;
  }
}
