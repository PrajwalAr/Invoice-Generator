import { useState, useEffect } from "react";

export function JSONEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [text, setText] = useState(value);
  useEffect(() => setText(value), [value]);
  return (
    <textarea
      value={text}
      onChange={(e) => { setText(e.target.value); onChange(e.target.value); }}
      className="w-full h-[60vh] p-4 font-mono text-sm border rounded"
      placeholder="Paste JSON here"
    />
  );
}
