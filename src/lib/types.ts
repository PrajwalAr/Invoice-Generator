export type Contact = { email?: string; phone?: string; website?: string };
export type Party = { name: string; address?: string[]; contact?: Contact };
export type LineItem = {
  description: string;
  quantity?: number;
  rate?: number;
  amount?: number;
  discount?: number;
  tax?: number;
};
export type InvoiceConfig = {
  _comments?: Record<string, string>;
  template: "Minimalist" | "Corporate" | "Modern" | "Creative" | "Classic";
  company: Party & { logo?: string };
  invoice: {
    number: string;
    date: string;
    dueDate?: string;
    paymentTerms?: string;
    currencySymbol?: string;
    currencyFormat?: string;
  };
  sender: Party;
  recipient: Party;
  lineItems: LineItem[];
  totals?: {
    subtotal?: number;
    discount?: number;
    tax?: number;
    total?: number;
  };
  visuals?: {
    background?: string;
    watermarkOpacity?: number;
    palette?: {
      primary?: string;
      accent?: string;
      muted?: string;
      border?: string;
      tableHeaderBg?: string;
    };
    fonts?: {
      headerFamily?: string;
      bodyFamily?: string;
      h1Size?: number;
      h2Size?: number;
      bodySize?: number;
      lineItemSize?: number;
    };
  };
  layout?: {
    columns?: string[];
    hiddenColumns?: string[];
    columnLabels?: Record<string, string>;
  };
  notes?: string;
};
