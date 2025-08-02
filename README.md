# 🧾 Invoice Generator MVP

A fast, no-backend invoice generator built with Next.js (App Router), React, Tailwind, and TypeScript. Edit JSON, preview in real-time across 5 templates, and export an A4 PDF that includes background images.

## ✨ Features
- 🎨 Five templates: Minimalist, Corporate, Modern, Creative, Classic
- 📝 Single JSON source of truth with sample config and inline comments
- 💾 LocalStorage persistence for your last edit
- ⬆️ Upload / ⬇️ Download JSON
- 🖼️ Background image picker (supports local image via data URL)
- 🖨️ A4 PDF export using html2canvas + jsPDF (captures CSS backgrounds)

## 🛠️ Tech Stack
- Next.js 15 (App Router), React 18
- TypeScript (strict)
- TailwindCSS
- html2canvas + jsPDF

## 🚀 Getting Started

1) Clone and install
```bash
git clone https://github.com/PrajwalAr/Invoice-Generator.git
cd Invoice-Generator
npm install
```

2) Run the dev server
```bash
npm run dev
```
Open http://localhost:3000

3) Build and start (prod)
```bash
npm run build
npm run start
```

4) Lint and typecheck
```bash
npm run lint
npx tsc -p tsconfig.json --noEmit
```

## 🧩 Usage
1. Edit the JSON on the left pane. The preview updates in real time.
2. Use the Template dropdown to switch templates.
3. Use Select Background to add a background image (stored as data URL in `visuals.background`).
4. Click “Download PDF (A4)” to export the preview to PDF.
5. Upload/Download JSON to move configurations around.

## 📄 JSON Schema (simplified)
```ts
export type InvoiceConfig = {
  template: "Minimalist" | "Corporate" | "Modern" | "Creative" | "Classic";
  company: { name: string; logo?: string; address?: string[]; contact?: { email?: string; phone?: string; website?: string } };
  invoice: { number: string; date: string; dueDate?: string; paymentTerms?: string; currencySymbol?: string; };
  sender: Party; recipient: Party;
  lineItems: { description: string; quantity?: number; rate?: number; amount?: number; discount?: number; tax?: number; }[];
  totals?: { subtotal?: number; discount?: number; tax?: number; total?: number };
  visuals?: { background?: string; watermarkOpacity?: number; palette?: { primary?: string; accent?: string; muted?: string; border?: string; tableHeaderBg?: string }; };
  layout?: { columns?: string[]; hiddenColumns?: string[]; columnLabels?: Record<string,string> };
  notes?: string;
}
```

## 🧪 Tips
- Currency display is handled via a simple `formatMoney` helper.
- PDF export uses `foreignObjectRendering` + `useCORS` to capture CSS backgrounds.
- All rendering happens client-side; no backend required.

## 🙌 Acknowledgements
- Next.js, Tailwind CSS, html2canvas, jsPDF

---

Made with ❤️
