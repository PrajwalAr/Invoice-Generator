import { currency } from "@/lib/currency";

export function LineItems({ items = [] as any[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b">
          <th className="py-2">Item</th>
          <th className="py-2">Qty</th>
          <th className="py-2">Price</th>
          <th className="py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i} className="border-b last:border-0">
            <td className="py-2">{item.name}</td>
            <td className="py-2">{item.quantity}</td>
            <td className="py-2">{currency(item.price)}</td>
            <td className="py-2">{currency(item.price * item.quantity)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
