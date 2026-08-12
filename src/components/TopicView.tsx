import { useState, useMemo } from 'react';
import { Topic, Difficulty } from '../data/types';
import ProjectCard from './ProjectCard';

const difficultyFilters: { key: Difficulty | 'all'; label: string; icon: string }[] = [
  { key: 'all', label: 'All Levels', icon: '📚' },
  { key: 'basic', label: 'Basic', icon: '🟢' },
  { key: 'intermediate', label: 'Intermediate', icon: '🟡' },
  { key: 'advanced', label: 'Advanced', icon: '🔴' },
];

export default function TopicView({ topic, onBack }: { topic: Topic; onBack: () => void }) {
  const [filter, setFilter] = useState<Difficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allProjects = topic.subtopics.flatMap(st => st.projects);
  const allAlgorithms = topic.subtopics.flatMap(st => st.algorithms);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => {
      const matchesDifficulty = filter === 'all' || p.difficulty === filter;
      const matchesSearch = !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDifficulty && matchesSearch;
    });
  }, [filter, searchQuery, allProjects]);

  const counts = useMemo(() => ({
    all: allProjects.length,
    basic: allProjects.filter(p => p.difficulty === 'basic').length,
    intermediate: allProjects.filter(p => p.difficulty === 'intermediate').length,
    advanced: allProjects.filter(p => p.difficulty === 'advanced').length,
  }), [allProjects]);

  const gradientMap: Record<string, string> = {
    blue: 'from-blue-600 to-cyan-500',
    purple: 'from-purple-600 to-pink-500',
    green: 'from-emerald-600 to-teal-500',
    teal: 'from-teal-600 to-cyan-500',
    amber: 'from-amber-600 to-orange-500',
    red: 'from-red-600 to-rose-500',
    yellow: 'from-yellow-500 to-amber-500',
    indigo: 'from-indigo-600 to-violet-500',
    rose: 'from-rose-600 to-red-500',
  };

  const bgLightMap: Record<string, string> = {
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    green: 'bg-emerald-50',
    teal: 'bg-teal-50',
    amber: 'bg-amber-50',
    red: 'bg-red-50',
    yellow: 'bg-yellow-50',
    indigo: 'bg-indigo-50',
    rose: 'bg-rose-50',
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${gradientMap[topic.color] || 'from-blue-600 to-cyan-500'} text-white`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all topics
          </button>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl sm:text-5xl">{topic.emoji}</span>
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">{topic.title}</h1>
              <p className="text-white/80 text-sm sm:text-base mt-1">{topic.description}</p>
            </div>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm">
              <span className="font-bold text-lg">{counts.all}</span>
              <span className="text-white/80 ml-1.5">Projects</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm">
              <span className="font-bold text-lg">{allAlgorithms.length}</span>
              <span className="text-white/80 ml-1.5">Algorithms</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm">
              🟢 <span className="font-bold">{counts.basic}</span>
              <span className="text-white/80 ml-1">Basic</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm">
              🟡 <span className="font-bold">{counts.intermediate}</span>
              <span className="text-white/80 ml-1">Mid</span>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 text-sm">
              🔴 <span className="font-bold">{counts.advanced}</span>
              <span className="text-white/80 ml-1">Advanced</span>
            </div>
          </div>
        </div>
      </div>

      {/* Algorithms Bar */}
      <div className={`${bgLightMap[topic.color] || 'bg-blue-50'} border-b border-slate-200`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Algorithms Covered</h3>
          <div className="flex flex-wrap gap-2">
            {allAlgorithms.map(algo => (
              <span key={algo} className="inline-flex items-center px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-sm">
                {algo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search projects, tools, datasets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-white"
              />
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
              {difficultyFilters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    filter === f.key
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f.icon} {f.label} ({counts[f.key]})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-slate-500 text-lg">No projects found</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-500 mb-4">
              Showing <span className="font-semibold text-slate-700">{filteredProjects.length}</span> projects
            </p>
            <div className="grid gap-3 sm:gap-4">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id + project.title} project={project} index={idx + 1} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
