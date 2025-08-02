"use client";
import React from "react";
import { saveConfig } from "@/lib/storage";
import { sampleDownload } from "@/lib/sampleConfig";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { BackgroundImagePicker } from "@/components/BackgroundImagePicker";

type Props = {
  jsonString: string;
  setJsonString: (v: string) => void;
  onUpload: (json: string) => void;
  onSaveCurrent: () => void;
};

export default function JSONEditor({ jsonString, setJsonString, onUpload, onSaveCurrent }: Props) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onChange = (v: string) => {
    setJsonString(v);
    try {
      JSON.parse(v);
      setError(null);
      saveConfig(v);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Invalid JSON";
      setError(msg);
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    try {
      JSON.parse(text);
      onUpload(text);
    } catch {
      setError("Uploaded file is not valid JSON.");
    } finally {
      e.target.value = "";
    }
  };

  const downloadBlob = (name: string, text: string) => {
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <BackgroundImagePicker
          value={(JSON.parse(jsonString || '{}').visuals?.background as string) || undefined}
          onChange={(dataUrl) => {
            try {
              const obj = JSON.parse(jsonString || '{}');
              obj.visuals = obj.visuals || {};
              obj.visuals.background = dataUrl || "";
              const s = JSON.stringify(obj, null, 2);
              onChange(s);
            } catch {
              /* ignore */
            }
          }}
        />
        <select
          className="h-10 rounded border border-gray-300 bg-white px-3 text-sm"
          value={(JSON.parse(jsonString || '{}').template as string) || 'Minimalist'}
          onChange={(e) => {
            try {
              const obj = JSON.parse(jsonString || '{}');
              obj.template = e.target.value;
              const s = JSON.stringify(obj, null, 2);
              onChange(s);
            } catch {
              /* ignore */
            }
          }}
        >
          {['Minimalist','Corporate','Modern','Creative','Classic'].map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <Button variant="secondary" onClick={() => downloadBlob("sample-invoice.json", sampleDownload())}>
          Download Sample JSON
        </Button>
        <Button variant="secondary" onClick={handleUploadClick}>Upload JSON</Button>
        <input ref={fileInputRef} type="file" accept=".json,application/json" className="hidden" onChange={onFileChange} />
        <Button variant="secondary" onClick={onSaveCurrent}>Save Current Configuration</Button>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">JSON Configuration</label>
        <Textarea
          value={jsonString}
          onChange={(e) => onChange(e.target.value)}
          className="h-80 font-mono text-sm"
        />
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
    </div>
  );
}
