import type { Dispatch, SetStateAction } from "react";
import { sections } from "../utils/biodataSchema";

type StepperProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const Stepper = ({ currentStep, setCurrentStep }: StepperProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {sections.map((section, index) => {
        const isActive = index === currentStep;
        const isComplete = index < currentStep;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => setCurrentStep(index)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${
              isActive
                ? "border-maroon bg-maroon text-white"
                : isComplete
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            <span className="h-6 w-6 rounded-full border border-current text-center text-[11px] leading-6">
              {index + 1}
            </span>
            <span className="hidden sm:inline">{section.title}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Stepper;
