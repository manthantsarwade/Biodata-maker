import React from 'react';

type TooltipProps = {
  content: string;
};

const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  return (
    <span className="group relative inline-flex items-center">
      <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-[10px] font-semibold text-slate-600">
        i
      </span>
      <span className="absolute left-1/2 top-6 z-10 hidden w-56 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-lg group-hover:block">
        {content}
      </span>
    </span>
  );
};

export default Tooltip;
