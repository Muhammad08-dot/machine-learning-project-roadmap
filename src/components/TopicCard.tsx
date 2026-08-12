import { Topic } from '../data/types';

export default function TopicCard({ topic, onClick }: { topic: Topic; onClick: () => void }) {
  const totalProjects = topic.subtopics.reduce((sum, st) => sum + st.projects.length, 0);
  const basic = topic.subtopics.reduce((sum, st) => sum + st.projects.filter(p => p.difficulty === 'basic').length, 0);
  const intermediate = topic.subtopics.reduce((sum, st) => sum + st.projects.filter(p => p.difficulty === 'intermediate').length, 0);
  const advanced = topic.subtopics.reduce((sum, st) => sum + st.projects.filter(p => p.difficulty === 'advanced').length, 0);
  const algorithms = topic.subtopics.flatMap(st => st.algorithms);

  const gradientMap: Record<string, string> = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-emerald-500 to-teal-500',
    teal: 'from-teal-500 to-cyan-500',
    amber: 'from-amber-500 to-orange-500',
    red: 'from-red-500 to-rose-500',
    yellow: 'from-yellow-500 to-amber-500',
    indigo: 'from-indigo-500 to-violet-500',
    rose: 'from-rose-500 to-red-500',
  };

  const borderColorMap: Record<string, string> = {
    blue: 'hover:border-blue-300',
    purple: 'hover:border-purple-300',
    green: 'hover:border-emerald-300',
    teal: 'hover:border-teal-300',
    amber: 'hover:border-amber-300',
    red: 'hover:border-red-300',
    yellow: 'hover:border-yellow-300',
    indigo: 'hover:border-indigo-300',
    rose: 'hover:border-rose-300',
  };

  const shadowMap: Record<string, string> = {
    blue: 'hover:shadow-blue-100/50',
    purple: 'hover:shadow-purple-100/50',
    green: 'hover:shadow-emerald-100/50',
    teal: 'hover:shadow-teal-100/50',
    amber: 'hover:shadow-amber-100/50',
    red: 'hover:shadow-red-100/50',
    yellow: 'hover:shadow-yellow-100/50',
    indigo: 'hover:shadow-indigo-100/50',
    rose: 'hover:shadow-rose-100/50',
  };

  return (
    <button
      onClick={onClick}
      className={`group w-full text-left bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl ${shadowMap[topic.color] || ''} ${borderColorMap[topic.color] || ''} hover:-translate-y-1`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientMap[topic.color] || 'from-blue-500 to-cyan-500'} flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110`}>
          {topic.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1 group-hover:text-slate-900 transition-colors">{topic.title}</h3>
          <p className="text-slate-500 text-sm mb-3">{topic.description}</p>
          
          {/* Progress Bar */}
          <div className="flex gap-0.5 h-2 rounded-full overflow-hidden bg-slate-100 mb-3">
            <div className="bg-emerald-400 rounded-l-full" style={{ width: `${(basic / totalProjects) * 100}%` }} />
            <div className="bg-amber-400" style={{ width: `${(intermediate / totalProjects) * 100}%` }} />
            <div className="bg-red-400 rounded-r-full" style={{ width: `${(advanced / totalProjects) * 100}%` }} />
          </div>
          
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="font-bold text-slate-700 text-base">{totalProjects}</span>
            <span>projects</span>
            <span className="text-slate-300">|</span>
            <span>🟢 {basic}</span>
            <span>🟡 {intermediate}</span>
            <span>🔴 {advanced}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {algorithms.slice(0, 5).map(a => (
              <span key={a} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-medium">
                {a}
              </span>
            ))}
            {algorithms.length > 5 && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[10px] font-medium">
                +{algorithms.length - 5} more
              </span>
            )}
          </div>
        </div>
        <svg className="w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-all group-hover:translate-x-1 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </button>
  );
}
