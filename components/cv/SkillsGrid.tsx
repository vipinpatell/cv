interface SkillSet {
  category: string;
  items: string[];
}

// Added default empty array to 'skills' and a null check
export const SkillsGrid = ({ skills = [] }: { skills?: SkillSet[] }) => {
  if (!skills || skills.length === 0) {
    return <p className="text-neutral-500 text-sm">No skills listed.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-8">
      {skills.map((set) => (
        <div key={set.category} className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
            {set.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {set.items.map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold hover:border-emerald-500/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};