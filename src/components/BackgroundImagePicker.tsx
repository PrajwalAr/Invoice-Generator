import { useRef } from "react";

export function BackgroundImagePicker({ onSelect }: { onSelect: (file: File) => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <button onClick={() => inputRef.current?.click()} className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800">Select Background</button>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f=e.target.files?.[0]; if (f) onSelect(f); }} />
    </div>
  );
}
