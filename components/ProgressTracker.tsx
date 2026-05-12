'use client';

import { Check } from 'lucide-react';

interface ProgressTrackerProps {
  steps: {
    label: string;
    completed: boolean;
  }[];
}

export function ProgressTracker({ steps }: ProgressTrackerProps) {
  const completedCount = steps.filter((s) => s.completed).length;
  const percentage = (completedCount / steps.length) * 100;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-white">Progress</h3>
        <span className="text-sm text-gray-400">
          {completedCount} of {steps.length}
        </span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="flex flex-col gap-2">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                step.completed
                  ? 'bg-green-500'
                  : 'bg-slate-700 border-2 border-slate-600'
              }`}
            >
              {step.completed && <Check size={16} className="text-white" />}
            </div>
            <span
              className={step.completed ? 'text-gray-400 line-through' : 'text-gray-300'}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
