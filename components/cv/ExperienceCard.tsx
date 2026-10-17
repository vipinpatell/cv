import { Building2, CalendarRange } from "lucide-react";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets?: string[]; // Made optional with '?'
}

export const ExperienceCard = ({ 
  role, 
  company, 
  duration, 
  location, 
  bullets = [] // Default to empty array to prevent .map() crash
}: ExperienceProps) => (
  <div className="relative pl-8 pb-12 last:pb-0 group">
    {/* Timeline Line/Dot Decoration */}
    <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-neutral-800 group-last:bg-transparent" />
    <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-neutral-950" />
    
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {role}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-neutral-500 uppercase tracking-wide">
          <span className="flex items-center gap-1.5 text-emerald-500/80">
            <Building2 size={14} /> {company}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarRange size={14} /> {duration}
          </span>
          <span>{location}</span>
        </div>
      </div>
      
      {/* Safety check: only render the list if there are bullets */}
      {bullets.length > 0 && (
        <ul className="space-y-2.5">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="text-neutral-400 text-sm leading-relaxed flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">→</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);