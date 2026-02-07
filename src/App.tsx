import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BiodataForm from "./forms/BiodataForm";
import PreviewPanel from "./preview/PreviewPanel";
import { defaultValues, type BiodataFormValues } from "./utils/biodataSchema";

const STORAGE_KEY = "marathi-biodata-profile";
const TEMPLATE_KEY = "marathi-biodata-template";

const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("traditional");
  const form = useForm<BiodataFormValues>({
    defaultValues,
    mode: "onBlur",
  });
  const [previewData, setPreviewData] = useState<BiodataFormValues>(defaultValues);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const template = localStorage.getItem(TEMPLATE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as BiodataFormValues;
        form.reset({ ...defaultValues, ...parsed });
        setPreviewData({ ...defaultValues, ...parsed });
      } catch {
        form.reset(defaultValues);
      }
    }
    if (template) {
      setSelectedTemplate(template);
    }
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((value) => {
      const merged = { ...defaultValues, ...(value as BiodataFormValues) };
      setPreviewData(merged);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
  }, [selectedTemplate]);

  const handlePhotoUpload = (dataUrl: string) => {
    form.setValue("photoDataUrl", dataUrl, { shouldDirty: true });
  };

  const headerHighlights = useMemo(
    () => [
      "Traditional, modern, and premium Marathi biodata templates",
      "Auto-save to local storage so you can edit later",
      "High-resolution PDF export with A4 layout",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-maroon to-slate-900 px-6 py-8 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <span className="badge bg-white/15 text-white">Marathi Biodata Builder</span>
          <h1 className="text-3xl font-semibold sm:text-4xl">Build a professional Marathi marriage biodata in minutes.</h1>
          <p className="text-sm text-white/80">
            Fill the form, preview instantly, switch templates, and download a polished PDF biodata.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-white/80">
            {headerHighlights.map((item) => (
              <span key={item} className="rounded-full border border-white/20 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FormProvider {...form}>
          <div className="flex flex-col gap-6">
            <BiodataForm onPhotoUpload={handlePhotoUpload} />
            <div className="section-card">
              <h2 className="text-lg font-semibold text-slate-800">Auto Save</h2>
              <p className="mt-2 text-sm text-slate-500">
                Your biodata stays saved in this browser so you can continue editing later.
              </p>
            </div>
          </div>
        </FormProvider>

        <div className="lg:sticky lg:top-8 lg:h-fit">
          <PreviewPanel
            data={previewData}
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
