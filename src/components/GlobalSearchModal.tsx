import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  X,
  BookOpen,
  CheckCircle2,
  Zap,
  ArrowRight,
  ExternalLink,
  Flame
} from 'lucide-react';
import { questionsData, Question } from '../data/questionsData';
import { condensedModulesData } from '../data/modulesCondensedData';
import { AppMode } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToQuestion: (qId: string) => void;
  onNavigateToModule: (modId: 'm1' | 'm2' | 'm3' | 'm4') => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToQuestion,
  onNavigateToModule,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search calculations
  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) {
      return { questions: [], terms: [] };
    }

    const q = query.toLowerCase();

    // Matching questions
    const matchingQuestions = questionsData.filter(item =>
      item.stem.toLowerCase().includes(q) ||
      item.options.some(o => o.text.toLowerCase().includes(q)) ||
      item.rationale.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 10);

    // Matching terminology from condensed modules
    const matchingTerms: Array<{ modId: 'm1' | 'm2' | 'm3' | 'm4'; term: string; content: string }> = [];
    condensedModulesData.forEach(mod => {
      mod.terms.forEach(t => {
        if (t.term.toLowerCase().includes(q) || t.content.toLowerCase().includes(q)) {
          matchingTerms.push({
            modId: mod.moduleId,
            term: t.term,
            content: t.content
          });
        }
      });
    });

    return {
      questions: matchingQuestions,
      terms: matchingTerms.slice(0, 8)
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-slate-200 dark:border-slate-800 p-4">
          <Search className="w-5 h-5 text-slate-400 absolute left-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search symptoms, signs, drugs, questions, or buzzwords..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-9 pr-10 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 bg-transparent focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-slate-400">
              Type at least 2 letters to search 156 exam questions, high-yield terms, and condensed clinical notes.
            </div>
          ) : results.questions.length === 0 && results.terms.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matches found for "{query}". Try a different keyword or clinical term.
            </div>
          ) : (
            <>
              {/* Question Matches */}
              {results.questions.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>Exam Questions ({results.questions.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.questions.map(q => (
                      <button
                        key={q.id}
                        onClick={() => {
                          onNavigateToQuestion(q.id);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700/80 transition-all flex items-start justify-between gap-3 group"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                              Q#{q.index}
                            </span>
                            <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                              {q.moduleName.split(':')[0]}
                            </span>
                            {q.isRepeat && (
                              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
                                <Flame className="w-2.5 h-2.5" /> Repeat
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-2">
                            {q.stem}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Terminology Matches */}
              {results.terms.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-500" />
                    <span>High-Yield Terminology &amp; Buzzwords ({results.terms.length})</span>
                  </h4>
                  <div className="space-y-1.5">
                    {results.terms.map((t, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToModule(t.modId);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200 dark:border-slate-700/80 transition-all flex items-start justify-between gap-3 group"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400">
                              {t.modId.toUpperCase()} Terminology
                            </span>
                          </div>
                          <h5 className="text-xs font-black text-slate-900 dark:text-white mb-0.5">
                            {t.term}
                          </h5>
                          <div 
                            className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: t.content }}
                          />
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-100 dark:border-slate-800 px-4 py-2.5 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between text-[11px] text-slate-400">
          <span>Press ESC or click outside to close</span>
          <span>Tip: Jump directly to any question or clinical term</span>
        </div>
      </div>
    </div>
  );
};
