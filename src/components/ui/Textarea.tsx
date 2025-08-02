import { clsx } from "clsx";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={clsx("border rounded p-2 w-full", className)} {...props} />;
}
