import React from 'react';
import { SectionConfig } from '../utils/biodataSchema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BiodataProfile } from '../utils/types';
import FormField from './FormField';

type FormSectionProps = {
  section: SectionConfig;
  register: UseFormRegister<BiodataProfile>;
  errors: FieldErrors<BiodataProfile>;
};

const FormSection: React.FC<FormSectionProps> = ({ section, register, errors }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
        <p className="text-sm text-slate-500">{section.description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {section.fields.map((field) => (
          <div
            key={field.name}
            className={field.type === 'textarea' ? 'md:col-span-2' : undefined}
          >
            <FormField field={field} register={register} errors={errors} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSection;
