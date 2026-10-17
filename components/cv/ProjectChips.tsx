export const ProjectChips = ({ projects }: { projects: string[] }) => (
  <div className="flex flex-wrap gap-3">
    {projects.map((project) => (
      <div 
        key={project}
        className="px-4 py-2 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200 text-xs font-black uppercase tracking-wider hover:bg-neutral-800 hover:text-emerald-400 transition-all cursor-default"
      >
        {project}
      </div>
    ))}
  </div>
);