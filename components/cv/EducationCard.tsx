"use client";

import { GraduationCap, CalendarRange } from "lucide-react";

interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
}

export const EducationCard = ({ degree, institution, year, grade }: EducationProps) => (
  <div className="group relative pl-8 pb-8 last:pb-0">
    {/* Timeline Decoration */}
    <div className="absolute left-0 top-1.5 bottom-0 w-[2px] bg-neutral-800 group-last:bg-transparent" />
    <div className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-700 ring-4 ring-neutral-950 group-hover:bg-emerald-500 transition-colors" />

    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
          {degree}
        </h3>
        <span className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 uppercase tracking-widest bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800">
          <CalendarRange size={12} /> {year}
        </span>
      </div>
      
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-neutral-400 flex items-center gap-2">
          <GraduationCap size={14} className="text-emerald-500" />
          {institution}
        </p>
        {grade && (
          <p className="text-xs font-mono text-emerald-500/80 pl-5">
            Result: {grade}
          </p>
        )}
      </div>
    </div>
  </div>
);