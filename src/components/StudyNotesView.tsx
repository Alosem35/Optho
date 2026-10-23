import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Sparkles,
  Bookmark,
  ChevronRight,
  ExternalLink,
  Layers,
  Award,
  AlertTriangle,
  Lightbulb,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { condensedModulesData, CondensedModule } from '../data/modulesCondensedData';

interface StudyNotesViewProps {
  selectedModuleId: 'm1' | 'm2' | 'm3' | 'm4' | 'm5';
  onSelectModule: (id: 'm1' | 'm2' | 'm3' | 'm4' | 'm5') => void;
  onGoToQBankWithModule: (modId: string) => void;
  fontSize: 'sm' | 'md' | 'lg';
}

export const StudyNotesView: React.FC<StudyNotesViewProps> = ({
  selectedModuleId,
  onSelectModule,
  onGoToQBankWithModule,
  fontSize,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'terms' | 'mindmap' | 'chapters'>('all');
  const [copiedNotification, setCopiedNotification] = useState(false);

  // If m5 is passed, default to m1 or show notice
  const safeModuleId = selectedModuleId === 'm5' ? 'm1' : selectedModuleId;
  const currentModule = useMemo(() => {
    return condensedModulesData.find(m => m.moduleId === safeModuleId) || condensedModulesData[0];
  }, [safeModuleId]);

  // Doctor theme styling
  const moduleThemes = {
    m1: {
      gradient: 'from-blue-900 via-indigo-900 to-blue-800',
      accent: 'blue',
      badge: 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border-blue-200 dark:border-blue-800',
      activeTab: 'bg-blue-600 text-white shadow-md shadow-blue-600/20',
      pill: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    },
    m2: {
      gradient: 'from-slate-900 via-teal-950 to-teal-900',
      accent: 'teal',
      badge: 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200 border-teal-200 dark:border-teal-800',
      activeTab: 'bg-teal-600 text-white shadow-md shadow-teal-600/20',
      pill: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    },
    m3: {
      gradient: 'from-emerald-950 via-green-950 to-emerald-900',
      accent: 'emerald',
      badge: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
      activeTab: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20',
      pill: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    m4: {
      gradient: 'from-purple-950 via-violet-950 to-purple-900',
      accent: 'purple',
      badge: 'bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border-purple-200 dark:border-purple-800',
      activeTab: 'bg-purple-600 text-white shadow-md shadow-purple-600/20',
      pill: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    },
  }[safeModuleId];

  // Filtered terms
  const filteredTerms = useMemo(() => {
    if (!searchTerm.trim()) return currentModule.terms;
    const q = searchTerm.toLowerCase();
    return currentModule.terms.filter(t =>
      t.term.toLowerCase().includes(q) || t.content.toLowerCase().includes(q)
    );
  }, [currentModule, searchTerm]);

  // Copy share note
  const handleCopySummary = () => {
    const text = `${currentModule.title}\n${currentModule.subtitle}\nKey terms: ${currentModule.terms.length} | Chapters: ${currentModule.chapters.length}`;
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Module Selector Deck */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Ultra-Condensed Ophthalmology Syllabus</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              100% Exam Yield • High-Yield Keywords • Mind Maps • Master Comparison Tables
            </p>
          </div>

          {/* Module Switcher Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {condensedModulesData.map(m => {
              const isSelected = safeModuleId === m.moduleId;
              return (
                <button
                  key={m.moduleId}
                  onClick={() => onSelectModule(m.moduleId)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {m.moduleId.toUpperCase()}: {m.subtitle.split(':')[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Module Hero Banner */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${moduleThemes.gradient} text-white p-6 shadow-md`}>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-xs font-black uppercase tracking-wider mb-2 backdrop-blur-xs">
              ⚡ Ultra-Condensed Medical Notes
            </div>
            <h2 className="text-lg sm:text-2xl font-black tracking-tight mb-1 text-white">
              {currentModule.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-medium">
              {currentModule.subtitle}
            </p>

            {/* Quick in-page links */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-bold">
              <a
                href="#terms-section"
                className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
              >
                🔤 Terminology ({currentModule.terms.length})
              </a>
              <a
                href="#mindmap-section"
                className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
              >
                🧠 Mind Map
              </a>
              {currentModule.chapters.map((ch, idx) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 backdrop-blur-xs transition-colors"
                >
                  Ch {idx + 1}
                </a>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="flex md:flex-col items-center gap-2 shrink-0">
            <button
              onClick={() => onGoToQBankWithModule(safeModuleId)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-lg hover:bg-slate-100 transition-all hover:scale-105 active:scale-95"
            >
              <span>Practice {safeModuleId.toUpperCase()} QBank</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopySummary}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              {copiedNotification ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedNotification ? 'Copied!' : 'Copy Summary'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Module Terminology Section */}
      <div id="terms-section" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-black text-xs">
              🔤
            </span>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              High-Yield Keywords &amp; Terminology ({currentModule.terms.length})
            </h3>
          </div>

          {/* Terms Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search terms & keywords..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Term Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredTerms.map((t, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="font-extrabold text-xs text-blue-600 dark:text-blue-400 mb-1.5">
                  {t.term}
                </h4>
                <div 
                  className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Module Mind Map Section */}
      <div id="mindmap-section" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-black text-xs">
            🧠
          </span>
          <div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              Big-Picture Mind Map (1-Minute High-Yield Overview)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Rapid core rules, buzzwords, and diagnostic triggers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentModule.mindMap.map((mm, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900/60 shadow-xs"
            >
              <h4 className="font-black text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-2 pb-1 border-b border-slate-200 dark:border-slate-700">
                {mm.title}
              </h4>
              <div
                className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 prose-medical"
                dangerouslySetInnerHTML={{ __html: mm.content }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Chapters Section */}
      <div className="space-y-6">
        {currentModule.chapters.map((ch, idx) => (
          <div
            key={ch.id}
            id={ch.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs transition-colors"
          >
            {/* Chapter Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-blue-500 dark:border-blue-400">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs flex items-center justify-center font-black">
                  {idx + 1}
                </span>
                <span>{ch.title}</span>
              </h3>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">
                High-Yield Chapter
              </span>
            </div>

            {/* Chapter HTML Content */}
            <div
              className="prose-medical text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm"
              dangerouslySetInnerHTML={{ __html: ch.htmlContent }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
