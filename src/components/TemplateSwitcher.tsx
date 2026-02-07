import React from 'react';
import { TemplateOption } from '../utils/types';

type TemplateSwitcherProps = {
  value: TemplateOption;
  onChange: (value: TemplateOption) => void;
};

const TemplateSwitcher: React.FC<TemplateSwitcherProps> = ({ value, onChange }) => {
  const options: { id: TemplateOption; label: string; description: string }[] = [
    { id: 'traditional', label: 'Template A', description: 'Traditional' },
    { id: 'modern', label: 'Template B', description: 'Modern' },
    { id: 'premium', label: 'Template C', description: 'Premium' },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {options.map((option) => {
        const isActive = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`rounded-2xl border px-4 py-4 text-left transition ${
              isActive
                ? 'border-maroon bg-maroon text-white shadow-soft'
                : 'border-slate-200 bg-white text-slate-700 hover:border-maroon/50'
            }`}
          >
            <p className="text-sm font-semibold">{option.label}</p>
            <p className="text-xs opacity-80">{option.description}</p>
          </button>
        );
      })}
    </div>
  );
};

export default TemplateSwitcher;
