import { LineItems } from "./shared";

export function TemplateCorporate({ data }: { data: any }) {
  const { company = {}, customer = {}, items = [], invoice = {} } = data;

  return (
    <div className="p-8 bg-white text-gray-900">
      <header className="flex justify-between items-start mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-wide uppercase">{company.name || "Corporate"}</h1>
          <p className="text-sm">{company.address}</p>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-semibold">Invoice</h2>
          <p className="text-sm">#{invoice.number || "0001"}</p>
        </div>
      </header>

      <LineItems items={items} />

      <footer className="mt-8 text-sm text-right">
        <p>Notes: {invoice.notes}</p>
      </footer>
    </div>
  );
}
