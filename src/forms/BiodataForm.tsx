import React from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { biodataSections } from '../utils/biodataSchema';
import { BiodataProfile } from '../utils/types';
import Stepper from '../components/Stepper';
import FormSection from '../components/FormSection';

type BiodataFormProps = {
  register: UseFormRegister<BiodataProfile>;
  errors: FieldErrors<BiodataProfile>;
  currentStep: number;
  onStepChange: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  setValue: UseFormSetValue<BiodataProfile>;
  photoPreview: string;
};

const BiodataForm: React.FC<BiodataFormProps> = ({
  register,
  errors,
  currentStep,
  onStepChange,
  onPrevious,
  onNext,
  setValue,
  photoPreview,
}) => {
  const section = biodataSections[currentStep];

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setValue('profilePhoto', String(reader.result));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <Stepper sections={biodataSections} currentStep={currentStep} onStepChange={onStepChange} />

      <div className="rounded-2xl border border-dashed border-maroon/40 bg-white/70 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Profile Photo</h3>
            <p className="text-xs text-slate-500">Upload a clear passport-style photo (JPG/PNG).</p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            <input type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
            Upload Photo
          </label>
        </div>
        {photoPreview ? (
          <div className="mt-4 flex items-center gap-4">
            <img
              src={photoPreview}
              alt="Profile preview"
              className="h-20 w-20 rounded-2xl object-cover shadow-soft"
            />
            <div>
              <p className="text-xs font-semibold text-slate-600">Preview ready</p>
              <p className="text-xs text-slate-400">This will appear on your biodata.</p>
            </div>
          </div>
        ) : (
          <p className="mt-4 text-xs text-slate-400">No photo uploaded yet.</p>
        )}
      </div>

      <FormSection section={section} register={register} errors={errors} />

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentStep === 0}
          className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={currentStep === biodataSections.length - 1}
          className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white shadow-soft disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BiodataForm;
