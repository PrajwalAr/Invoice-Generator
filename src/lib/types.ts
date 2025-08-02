export type InvoiceItem = { name: string; quantity: number; price: number };
export type InvoiceData = {
  template?: "classic" | "minimalist" | "modern" | "corporate" | "creative";
  company?: { name?: string; address?: string };
  customer?: { name?: string; address?: string };
  items?: InvoiceItem[];
  invoice?: { number?: string; notes?: string };
};
