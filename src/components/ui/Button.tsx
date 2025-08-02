"use client";
import * as React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "md";
};

export function Button({ className, variant="default", size="md", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-black text-white hover:bg-neutral-800 focus:ring-black",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300",
  }[variant];
  const sizes = { sm: "h-8 px-3 text-sm", md: "h-10 px-4 text-sm" }[size];
  return <button className={clsx(base, variants, sizes, className)} {...props} />;
}
