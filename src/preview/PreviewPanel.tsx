import { useRef } from "react";
import html2pdf from "html2pdf.js";
import TemplateModern from "../templates/TemplateModern";
import TemplatePremium from "../templates/TemplatePremium";
import TemplateTraditional from "../templates/TemplateTraditional";
import type { BiodataFormValues } from "../utils/biodataSchema";

type PreviewPanelProps = {
  data: BiodataFormValues;
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
};

const templates = [
  { id: "traditional", name: "Template A · Traditional" },
  { id: "modern", name: "Template B · Modern" },
  { id: "premium", name: "Template C · Premium" },
];

const PreviewPanel = ({ data, selectedTemplate, setSelectedTemplate }: PreviewPanelProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!previewRef.current) return;
    const options = {
      margin: [8, 8, 8, 8],
      filename: "marathi-biodata.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };
    html2pdf().set(options).from(previewRef.current).save();
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <TemplateModern data={data} />;
      case "premium":
        return <TemplatePremium data={data} />;
      case "traditional":
      default:
        return <TemplateTraditional data={data} />;
    }
  };

  return (
    <div className="section-card space-y-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">Live Preview</h2>
            <p className="text-sm text-slate-500">Switch templates instantly and download as PDF.</p>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            className="rounded-lg bg-maroon px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-maroon/90"
          >
            Download PDF
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {templates.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => setSelectedTemplate(template.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                selectedTemplate === template.id
                  ? "border-maroon bg-maroon text-white"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {template.name}
            </button>
          ))}
        </div>
      </div>
      <div ref={previewRef} className="space-y-4">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default PreviewPanel;
