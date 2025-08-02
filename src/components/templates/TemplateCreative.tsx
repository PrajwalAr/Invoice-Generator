import { LineItems } from "./shared";

export function TemplateCreative({ data }: { data: any }) {
  const { company = {}, customer = {}, items = [], invoice = {} } = data;

  return (
    <div className="p-8 bg-white text-gray-900">
      <header className="mb-8">
        <h1 className="text-4xl font-black">{company.name || "Creative Co."}</h1>
        <p className="text-sm">{company.address}</p>
      </header>

      <LineItems items={items} />

      <footer className="mt-8 text-sm">
        <p>Notes: {invoice.notes}</p>
      </footer>
    </div>
  );
}
