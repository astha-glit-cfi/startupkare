'use client';

import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
}

export function LoadingSpinner({ message }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader className="animate-spin text-orange-500 mb-4" size={32} />
      {message && <p className="text-gray-400">{message}</p>}
    </div>
  );
}
