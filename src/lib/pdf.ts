import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportElementToPDF(node: HTMLElement, filename: string) {
  const canvas = await html2canvas(node, {
    scale: 2,
    backgroundColor: null as unknown as undefined,
    useCORS: true,
    foreignObjectRendering: true
  });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
  const imgWidth = canvas.width * ratio;
  const imgHeight = canvas.height * ratio;
  const x = (pageWidth - imgWidth) / 2;
  const y = 20;

  pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
  pdf.save(filename);
}
