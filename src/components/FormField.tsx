import React from 'react';
import { FieldConfig } from '../utils/biodataSchema';
import Tooltip from './Tooltip';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BiodataProfile } from '../utils/types';

type FormFieldProps = {
  field: FieldConfig;
  register: UseFormRegister<BiodataProfile>;
  errors: FieldErrors<BiodataProfile>;
};

const FormField: React.FC<FormFieldProps> = ({ field, register, errors }) => {
  const error = errors[field.name];
  const commonClasses =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20';

  return (
    <div className="space-y-2">
      <label className="flex items-center text-sm font-semibold text-slate-700">
        {field.label}
        {field.tooltip && <Tooltip content={field.tooltip} />}
      </label>
      {field.type === 'select' && field.options ? (
        <select
          className={commonClasses}
          {...register(field.name, { required: field.required })}
        >
          <option value="">Select</option>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          className={`${commonClasses} min-h-[120px]`}
          placeholder={field.placeholder}
          {...register(field.name, { required: field.required })}
        />
      ) : (
        <input
          type={field.type}
          className={commonClasses}
          placeholder={field.placeholder}
          {...register(field.name, { required: field.required })}
        />
      )}
      {error && <p className="text-xs text-red-600">This field is required.</p>}
    </div>
  );
};

export default FormField;
