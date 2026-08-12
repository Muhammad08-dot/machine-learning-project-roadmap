import { Project, Difficulty } from '../data/types';

const difficultyConfig: Record<Difficulty, { label: string; color: string; bg: string; icon: string }> = {
  basic: { label: 'Basic', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200', icon: '🟢' },
  intermediate: { label: 'Intermediate', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', icon: '🟡' },
  advanced: { label: 'Advanced', color: 'text-red-700', bg: 'bg-red-50 border-red-200', icon: '🔴' },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const config = difficultyConfig[project.difficulty];

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500">
          {index}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h4 className="font-semibold text-slate-800 text-[15px] leading-tight">{project.title}</h4>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium border ${config.bg} ${config.color}`}>
              {config.icon} {config.label}
            </span>
          </div>
          <p className="text-slate-500 text-[13px] leading-relaxed mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool) => (
              <span key={tool} className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                {tool}
              </span>
            ))}
            {project.dataset && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[11px] font-medium">
                📊 {project.dataset}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
