"use client";
import InvoicePreview from "@/components/InvoicePreview";
import JSONEditor from "@/components/JSONEditor";
import { Button } from "@/components/ui/Button";
import { exportElementToPDF } from "@/lib/pdf";
import { sampleConfig } from "@/lib/sampleConfig";
import { loadConfig, saveConfig } from "@/lib/storage";
import type { InvoiceConfig } from "@/lib/types";
import React from "react";

export default function Page() {
  const [jsonString, setJsonString] = React.useState<string>("");
  const [config, setConfig] = React.useState<InvoiceConfig>(sampleConfig);
  const previewRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const stored = loadConfig();
    if (stored) {
      try {
        setConfig(JSON.parse(stored));
        setJsonString(stored);
        return;
      } catch {
        /* ignore */
      }
    }
    const s = JSON.stringify(sampleConfig, null, 2);
    setJsonString(s);
    saveConfig(s);
  }, []);

  React.useEffect(() => {
    try {
      const parsed = JSON.parse(jsonString) as InvoiceConfig;
      setConfig(parsed);
    } catch {
      /* ignore */
    }
  }, [jsonString]);

  const onUpload = (text: string) => {
    setJsonString(text);
    saveConfig(text);
  };

  const onSaveCurrent = () => {
    const a = document.createElement("a");
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    a.href = url; a.download = "invoice-config.json"; a.click();
    URL.revokeObjectURL(url);
  };

  const onDownloadPDF = async () => {
    if (!previewRef.current) return;
    await exportElementToPDF(previewRef.current, "invoice.pdf");
  };

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
        <section className="order-2 lg:order-1">
          <JSONEditor
            jsonString={jsonString}
            setJsonString={setJsonString}
            onUpload={onUpload}
            onSaveCurrent={onSaveCurrent}
          />
        </section>
        <section className="order-1 lg:order-2">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Preview</h2>
            <Button onClick={onDownloadPDF}>Download PDF (A4)</Button>
          </div>
          <InvoicePreview config={config} previewRef={previewRef} />
        </section>
      </div>
      <div className="mt-6 text-xs text-gray-500">
        Tip: Switch templates by changing "template" in the JSON. All styling and content are JSON-driven.
      </div>
    </main>
  );
}