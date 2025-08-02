import { clsx } from "clsx";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={clsx("px-3 py-2 rounded bg-gray-900 text-white", className)} {...props} />;
}
