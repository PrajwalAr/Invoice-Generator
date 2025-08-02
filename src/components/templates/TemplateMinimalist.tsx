import { LineItems } from "./shared";

export function TemplateMinimalist({ data }: { data: any }) {
  const { company = {}, customer = {}, items = [], invoice = {} } = data;

  return (
    <div className="p-8 bg-white text-gray-900">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">{company.name || "Minimal"}</h1>
        <div className="text-right">
          <p className="text-sm">Invoice #{invoice.number || "0001"}</p>
        </div>
      </header>

      <LineItems items={items} />

      <footer className="mt-8 text-sm">
        <p>Notes: {invoice.notes}</p>
      </footer>
    </div>
  );
}
