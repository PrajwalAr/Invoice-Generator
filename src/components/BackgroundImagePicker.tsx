"use client";
import React from "react";

type Props = {
  value?: string;
  onChange: (dataUrl: string | undefined) => void;
};

export function BackgroundImagePicker({ value, onChange }: Props) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onFile = async (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : undefined;
      onChange(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="h-10 rounded border border-gray-300 bg-white px-3 text-sm w-fit"
        onClick={() => inputRef.current?.click()}
        aria-label="Select background image"
      >
        {value ? "Change Background" : "Select Background"}
      </button>
      {value && (
        <button
          type="button"
          className="h-10 rounded border border-gray-300 bg-white px-3 text-sm w-fit"
          onClick={() => onChange(undefined)}
        >
          Clear Background
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        aria-label="Background image file input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) void onFile(f);
          e.currentTarget.value = "";
        }}
      />
    </div>
  );
}
