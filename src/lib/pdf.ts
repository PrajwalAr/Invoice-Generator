export async function downloadPDF() {
  const el = document.querySelector("main");
  if (!el) return;
  const html = `<!doctype html><html><head><meta charset='utf-8' /><meta name='viewport' content='width=device-width, initial-scale=1' /></head><body>${el.innerHTML}</body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "invoice.html";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
