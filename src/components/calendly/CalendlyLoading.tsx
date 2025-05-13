
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const CalendlyLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <Skeleton className="h-8 w-48 rounded-md" />
      <Skeleton className="h-4 w-64 rounded-md" />
      <Skeleton className="h-4 w-56 rounded-md" />
      <p className="text-sm text-gray-500 mt-4">Loading calendar...</p>
    </div>
  );
};

export default CalendlyLoading;
