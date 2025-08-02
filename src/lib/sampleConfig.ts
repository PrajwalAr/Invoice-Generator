import { InvoiceConfig } from "./types";

export const sampleConfig: InvoiceConfig = {
  _comments: {
    template: "Choose from Minimalist | Corporate | Modern | Creative | Classic",
    "company.logo": "URL or data URL. Optional.",
    "invoice.currencySymbol": "Symbol used if no ISO currency code used in UI",
    "lineItems.discount_tax": "Discount/Tax are absolute values in this MVP",
    "visuals.background": "Optional background or watermark image URL/data URL",
    "layout.columns": "Order of columns; hiddenColumns to hide"
  },
  template: "Minimalist",
  company: {
    name: "Acme Inc.",
    address: ["123 Main St", "Suite 500", "San Francisco, CA 94105"],
    logo: "",
    contact: { email: "billing@acme.co", phone: "+1 (555) 123-4567", website: "https://acme.co" }
  },
  invoice: {
    number: "INV-0001",
    date: "2025-08-01",
    dueDate: "2025-08-15",
    paymentTerms: "Due within 14 days",
    currencySymbol: "$",
    currencyFormat: "1,234.56"
  },
  sender: {
    name: "Acme Inc.",
    address: ["123 Main St", "Suite 500", "San Francisco, CA 94105"],
    contact: { email: "billing@acme.co", phone: "+1 (555) 123-4567" }
  },
  recipient: {
    name: "Client Co.",
    address: ["456 Elm Ave", "Floor 3", "New York, NY 10001"],
    contact: { email: "ap@client.co", phone: "+1 (555) 765-4321" }
  },
  lineItems: [
    { description: "Design services", quantity: 10, rate: 100, amount: 1000, discount: 50, tax: 95 },
    { description: "Development services", quantity: 5, rate: 150, amount: 750, discount: 0, tax: 71.25 }
  ],
  totals: { subtotal: 1750, discount: 50, tax: 166.25, total: 1866.25 },
  visuals: {
    background: "",
    watermarkOpacity: 0.06,
    palette: {
      primary: "#111827",
      accent: "#2563eb",
      muted: "#6b7280",
      border: "#e5e7eb",
      tableHeaderBg: "#f9fafb"
    },
    fonts: {
      headerFamily: "Inter, ui-sans-serif, system-ui",
      bodyFamily: "Inter, ui-sans-serif, system-ui",
      h1Size: 28,
      h2Size: 18,
      bodySize: 12,
      lineItemSize: 12
    }
  },
  layout: {
    columns: ["description", "quantity", "rate", "amount", "discount", "tax"],
    hiddenColumns: ["discount"],
    columnLabels: {
      description: "Description",
      quantity: "Qty",
      rate: "Rate",
      amount: "Amount",
      discount: "Disc.",
      tax: "Tax"
    }
  },
  notes: "Thank you for your business! Please remit payment by the due date."
};

export const sampleDownload = () => {
  return JSON.stringify(sampleConfig, null, 2);
};
