import React, { useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import BiodataForm from './forms/BiodataForm';
import BiodataPreview from './preview/BiodataPreview';
import TemplateSwitcher from './components/TemplateSwitcher';
import { defaultBiodata } from './utils/defaultValues';
import { biodataSections } from './utils/biodataSchema';
import { loadFromStorage, saveToStorage } from './utils/localStorage';
import { downloadPdf } from './utils/pdf';
import { BiodataProfile, TemplateOption } from './utils/types';

const STORAGE_KEY = 'marathi-biodata-profile';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [template, setTemplate] = useState<TemplateOption>('traditional');
  const [activeMobileTab, setActiveMobileTab] = useState<'form' | 'preview'>('form');
  const previewRef = useRef<HTMLDivElement | null>(null);

  const storedProfile = useMemo(
    () => loadFromStorage<BiodataProfile>(STORAGE_KEY, defaultBiodata),
    []
  );

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BiodataProfile>({
    defaultValues: storedProfile,
    mode: 'onBlur',
  });

  const profile = watch();

  React.useEffect(() => {
    saveToStorage(STORAGE_KEY, profile);
  }, [profile]);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, biodataSections.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    reset(defaultBiodata);
    setCurrentStep(0);
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    await downloadPdf(previewRef.current, 'marathi-biodata.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cream/40">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-maroon">Marathi Biodata Builder</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
              Craft a modern Marathi marriage biodata in minutes
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Fill the form, preview instantly, and download a high-quality PDF.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white shadow-soft"
            >
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Template Style</h2>
            <p className="text-sm text-slate-500">Pick a layout that matches your family preference.</p>
            <div className="mt-4">
              <TemplateSwitcher value={template} onChange={setTemplate} />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft">
            <div className="flex gap-2 border-b border-slate-200 pb-4 md:hidden">
              <button
                type="button"
                onClick={() => setActiveMobileTab('form')}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${
                  activeMobileTab === 'form'
                    ? 'bg-maroon text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Form
              </button>
              <button
                type="button"
                onClick={() => setActiveMobileTab('preview')}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${
                  activeMobileTab === 'preview'
                    ? 'bg-maroon text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Preview
              </button>
            </div>

            <div className={activeMobileTab === 'form' ? 'block' : 'hidden md:block'}>
              <BiodataForm
                register={register}
                errors={errors}
                currentStep={currentStep}
                onStepChange={setCurrentStep}
                onPrevious={handlePrevious}
                onNext={handleNext}
                setValue={setValue}
                photoPreview={profile.profilePhoto}
              />
            </div>

            <div className={activeMobileTab === 'preview' ? 'block md:hidden' : 'hidden'}>
              <div className="mt-6" ref={previewRef}>
                <BiodataPreview profile={profile} template={template} />
              </div>
            </div>
          </div>
        </section>

        <aside className="hidden lg:block">
          <div className="sticky top-10 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Live Preview</h2>
              <span className="text-xs text-slate-500">Updates as you type</span>
            </div>
            <div ref={previewRef} className="rounded-3xl bg-white/70 p-4 shadow-soft">
              <BiodataPreview profile={profile} template={template} />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
