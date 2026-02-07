import React from 'react';
import { SectionConfig } from '../utils/biodataSchema';

type StepperProps = {
  sections: SectionConfig[];
  currentStep: number;
  onStepChange: (index: number) => void;
};

const Stepper: React.FC<StepperProps> = ({ sections, currentStep, onStepChange }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {sections.map((section, index) => {
        const isActive = index === currentStep;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onStepChange(index)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${
              isActive
                ? 'border-maroon bg-maroon text-white shadow-soft'
                : 'border-slate-200 bg-white text-slate-600 hover:border-maroon/40'
            }`}
          >
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {index + 1}
            </span>
            {section.title}
          </button>
        );
      })}
    </div>
  );
};

export default Stepper;
