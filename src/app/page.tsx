import { useState } from "react";
import { InvoicePreview } from "@/components/InvoicePreview";
import { JSONEditor } from "@/components/JSONEditor";
import styles from "./page.module.css";

export default function Page() {
  const [json, setJson] = useState("");
  return (
    <main className="p-4 lg:p-8">
      <div className={styles.grid}>
        <div>
          <JSONEditor value={json} onChange={setJson} />
        </div>
        <div>
          <InvoicePreview json={json} />
        </div>
      </div>
    </main>
  );
}
