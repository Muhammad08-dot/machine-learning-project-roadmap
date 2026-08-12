import { mlData, Topic } from '../data';
import TopicCard from './TopicCard';

interface DashboardProps {
  onSelectTopic: (topic: Topic) => void;
}

export default function Dashboard({ onSelectTopic }: DashboardProps) {
  const totalProjects = mlData.reduce((sum, section) =>
    sum + section.topics.reduce((s, t) =>
      s + t.subtopics.reduce((ss, st) => ss + st.projects.length, 0), 0), 0);

  const totalAlgorithms = mlData.reduce((sum, section) =>
    sum + section.topics.reduce((s, t) =>
      s + t.subtopics.reduce((ss, st) => ss + st.algorithms.length, 0), 0), 0);

  const totalTopics = mlData.reduce((sum, section) => sum + section.topics.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LEVEL 1 — CORE MACHINE LEARNING
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
            ML Mastery
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Project Hub
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Master Machine Learning through <span className="text-white font-semibold">{totalProjects} hands-on projects</span> across {totalTopics} topics — from basic to advanced, with real datasets and production tools.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-bold text-white">{totalProjects}</div>
              <div className="text-white/60 text-sm mt-0.5">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-bold text-white">{totalTopics}</div>
              <div className="text-white/60 text-sm mt-0.5">Topics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-bold text-white">{totalAlgorithms}</div>
              <div className="text-white/60 text-sm mt-0.5">Algorithms</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-bold text-white">3</div>
              <div className="text-white/60 text-sm mt-0.5">Difficulty Levels</div>
            </div>
          </div>

          {/* Difficulty Legend */}
          <div className="flex justify-center gap-4 sm:gap-6 text-sm">
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-3 h-3 rounded-full bg-emerald-400" /> Basic (Beginner)
            </span>
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-3 h-3 rounded-full bg-amber-400" /> Intermediate (Mid)
            </span>
            <span className="flex items-center gap-1.5 text-white/70">
              <span className="w-3 h-3 rounded-full bg-red-400" /> Advanced (Expert)
            </span>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">Practical First</h3>
                <p className="text-slate-500 text-xs mt-0.5">Every project includes real datasets, tools, and step-by-step descriptions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">Progressive Difficulty</h3>
                <p className="text-slate-500 text-xs mt-0.5">Start basic, build skills, tackle advanced production-grade projects</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">Job-Ready Skills</h3>
                <p className="text-slate-500 text-xs mt-0.5">Covers all algorithms and tools demanded in ML job interviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-14">
        {mlData.map((section) => (
          <section key={section.id}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{section.icon}</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{section.title}</h2>
                <p className="text-slate-500 text-sm">{section.subtitle}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {section.topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onClick={() => onSelectTopic(topic)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Roadmap Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">📍 Learning Roadmap</h2>
          <p className="text-slate-400 text-center mb-10 text-sm">Follow this path from beginner to ML expert</p>
          
          <div className="relative">
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700" />
            <div className="space-y-6 sm:space-y-0">
              {[
                { step: 1, title: 'Supervised Learning', desc: 'Start with Regression & Classification — the foundation of ML', time: '4-6 weeks', emoji: '🎯' },
                { step: 2, title: 'Unsupervised Learning', desc: 'Explore Clustering, Dim Reduction, Anomaly Detection', time: '4-6 weeks', emoji: '🔍' },
                { step: 3, title: 'Ensemble Learning', desc: 'Master XGBoost, LightGBM, CatBoost — the job market kings', time: '3-4 weeks', emoji: '👑' },
                { step: 4, title: 'Semi & Self-Supervised', desc: 'Learn from limited labels — contrastive learning & beyond', time: '3-4 weeks', emoji: '🔄' },
                { step: 5, title: 'Reinforcement Learning', desc: 'Build agents that learn from interaction — DQN, PPO, SAC', time: '6-8 weeks', emoji: '🎮' },
              ].map((item, index) => (
                <div key={item.step} className={`sm:flex items-center gap-8 ${index % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
                      <span className="text-2xl mb-2 block">{item.emoji}</span>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium">
                        ⏱ {item.time}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 items-center justify-center font-bold text-lg border-4 border-slate-900 z-10">
                    {item.step}
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Tools Section */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-2">🛠️ Essential Tools You'll Master</h2>
          <p className="text-slate-500 text-center mb-8 text-sm">Industry-standard tools used across all projects</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: 'Scikit-learn', category: 'Core ML', emoji: '🧠' },
              { name: 'XGBoost', category: 'Boosting', emoji: '⚡' },
              { name: 'LightGBM', category: 'Boosting', emoji: '💡' },
              { name: 'CatBoost', category: 'Boosting', emoji: '🐱' },
              { name: 'PyTorch', category: 'Deep Learning', emoji: '🔥' },
              { name: 'TensorFlow', category: 'Deep Learning', emoji: '🤖' },
              { name: 'Pandas', category: 'Data', emoji: '🐼' },
              { name: 'NumPy', category: 'Computing', emoji: '🔢' },
              { name: 'Matplotlib', category: 'Visualization', emoji: '📊' },
              { name: 'SHAP', category: 'Explainability', emoji: '🔍' },
              { name: 'MLflow', category: 'MLOps', emoji: '📦' },
              { name: 'FastAPI', category: 'Deployment', emoji: '🚀' },
              { name: 'Docker', category: 'Deployment', emoji: '🐳' },
              { name: 'Optuna', category: 'AutoML', emoji: '⚙️' },
              { name: 'HuggingFace', category: 'NLP/Vision', emoji: '🤗' },
              { name: 'Gymnasium', category: 'RL', emoji: '🎮' },
              { name: 'UMAP', category: 'Dim Reduction', emoji: '🗺️' },
              { name: 'Ray', category: 'Distributed', emoji: '☀️' },
            ].map(tool => (
              <div key={tool.name} className="bg-slate-50 rounded-xl p-3 text-center border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">
                <span className="text-xl block mb-1">{tool.emoji}</span>
                <span className="font-semibold text-slate-700 text-sm block">{tool.name}</span>
                <span className="text-slate-400 text-[10px]">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center">
          <p className="text-2xl mb-3">🧠</p>
          <p className="font-bold text-lg">ML Mastery Project Hub</p>
          <p className="text-slate-400 text-sm mt-1">
            {totalProjects} projects • {totalTopics} topics • {totalAlgorithms} algorithms
          </p>
          <p className="text-slate-500 text-xs mt-4">
            Built for aspiring ML engineers and data scientists. Start building. Start learning. 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
