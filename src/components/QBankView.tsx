import React, { useState, useMemo } from 'react';
import {
  Filter,
  CheckCircle2,
  XCircle,
  Bookmark,
  Shuffle,
  Eye,
  EyeOff,
  Flame,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Check,
  HelpCircle,
  Award,
  ArrowRight,
  ArrowLeft,
  LayoutGrid
} from 'lucide-react';
import { questionsData, Question } from '../data/questionsData';
import { UserAnswerRecord, QBankFilters } from '../types';

interface QBankViewProps {
  answers: Record<string, UserAnswerRecord>;
  bookmarkedQuestionIds: string[];
  filters: QBankFilters;
  onUpdateFilters: (filters: Partial<QBankFilters>) => void;
  onRecordAnswer: (questionId: string, option: string) => void;
  onToggleBookmark: (questionId: string) => void;
  onResetModule: (moduleId: string) => void;
  fontSize: 'sm' | 'md' | 'lg';
}

export const QBankView: React.FC<QBankViewProps> = ({
  answers,
  bookmarkedQuestionIds,
  filters,
  onUpdateFilters,
  onRecordAnswer,
  onToggleBookmark,
  onResetModule,
  fontSize,
}) => {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [showPalette, setShowPalette] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 20;

  // Module configurations
  const moduleConfigs = [
    { id: 'all', name: 'All Modules', count: questionsData.length, color: 'slate' },
    { id: 'm1', name: 'M1: Dr. Al-Ansi', count: 50, color: 'blue' },
    { id: 'm2', name: 'M2: Dr. Al-Soufi', count: 17, color: 'teal' },
    { id: 'm3', name: 'M3: Dr. Al-Khayyat', count: 22, color: 'purple' },
    { id: 'm4', name: 'M4: Dr. Nabil Sabr', count: 41, color: 'amber' },
    { id: 'm5', name: 'M5: Glaucoma/Retina', count: 26, color: 'rose' },
  ];

  // Topics for dropdown
  const availableTopics = useMemo(() => {
    let list = questionsData;
    if (filters.moduleId !== 'all') {
      list = list.filter(q => q.moduleId === filters.moduleId);
    }
    const topicsMap = new Map<string, string>();
    list.forEach(q => topicsMap.set(q.topicId, q.topicTitle));
    return Array.from(topicsMap.entries()).map(([id, title]) => ({ id, title }));
  }, [filters.moduleId]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    let result = [...questionsData];

    // Module
    if (filters.moduleId !== 'all') {
      result = result.filter(q => q.moduleId === filters.moduleId);
    }

    // Topic
    if (filters.topicId !== 'all') {
      result = result.filter(q => q.topicId === filters.topicId);
    }

    // Status
    if (filters.status === 'unanswered') {
      result = result.filter(q => answers[q.id] === undefined);
    } else if (filters.status === 'incorrect') {
      result = result.filter(q => answers[q.id] !== undefined && !answers[q.id].isCorrect);
    } else if (filters.status === 'correct') {
      result = result.filter(q => answers[q.id]?.isCorrect);
    } else if (filters.status === 'bookmarked') {
      result = result.filter(q => bookmarkedQuestionIds.includes(q.id));
    }

    // Tag filter
    if (filters.tagFilter === 'repeated') {
      result = result.filter(q => q.isRepeat);
    } else if (filters.tagFilter === 'midterm') {
      result = result.filter(q => q.tags.some(t => t.toLowerCase().includes('midterm')));
    } else if (filters.tagFilter === 'final') {
      result = result.filter(q => q.tags.some(t => t.toLowerCase().includes('final')));
    }

    // Search query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(item =>
        item.stem.toLowerCase().includes(q) ||
        item.options.some(o => o.text.toLowerCase().includes(q)) ||
        item.rationale.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Shuffle
    if (filters.shuffle) {
      result = [...result].sort(() => Math.sin(result.length) - 0.5);
    }

    return result;
  }, [filters, answers, bookmarkedQuestionIds]);

  // Pagination
  const totalPages = Math.ceil(filteredQuestions.length / pageSize) || 1;
  const paginatedQuestions = useMemo(() => {
    const start = (activePage - 1) * pageSize;
    return filteredQuestions.slice(start, start + pageSize);
  }, [filteredQuestions, activePage, pageSize]);

  // Statistics for current filtered view
  const currentAnswered = filteredQuestions.filter(q => answers[q.id] !== undefined).length;
  const currentCorrect = filteredQuestions.filter(q => answers[q.id]?.isCorrect).length;
  const currentPct = currentAnswered > 0 ? Math.round((currentCorrect / currentAnswered) * 100) : 0;

  const toggleReview = (qId: string) => {
    setExpandedReviews(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Font sizing styles
  const stemFontSizeClass = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
  }[fontSize];

  const optFontSizeClass = {
    sm: 'text-xs sm:text-sm',
    md: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg',
  }[fontSize];

  const getModuleBadgeColor = (modId: string) => {
    switch (modId) {
      case 'm1': return 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'm2': return 'bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border-teal-200 dark:border-teal-800';
      case 'm3': return 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'm4': return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'm5': return 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Control Deck */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs transition-colors">
        
        {/* Module Switcher Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
          {moduleConfigs.map(m => {
            const isActive = filters.moduleId === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  onUpdateFilters({ moduleId: m.id, topicId: 'all' });
                  setActivePage(1);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span>{m.name}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {m.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Search Row */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          
          {/* Status Pills */}
          <div className="flex items-center gap-1 flex-wrap">
            {(['all', 'unanswered', 'incorrect', 'correct', 'bookmarked'] as const).map(status => {
              const isActive = filters.status === status;
              const labels = {
                all: 'All',
                unanswered: 'Unanswered',
                incorrect: 'Incorrect',
                correct: 'Correct',
                bookmarked: 'Bookmarked',
              };
              return (
                <button
                  key={status}
                  onClick={() => {
                    onUpdateFilters({ status });
                    setActivePage(1);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {labels[status]}
                  {status === 'bookmarked' && bookmarkedQuestionIds.length > 0 && (
                    <span className="ml-1 text-[10px] font-extrabold text-amber-500">
                      ★{bookmarkedQuestionIds.length}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Repeat Filter Pill */}
            <button
              onClick={() => {
                onUpdateFilters({ tagFilter: filters.tagFilter === 'repeated' ? 'all' : 'repeated' });
                setActivePage(1);
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                filters.tagFilter === 'repeated'
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                  : 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 hover:bg-amber-100'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Repeated Qs</span>
            </button>
          </div>

          {/* Quick Search & Tools */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={filters.searchQuery}
                onChange={e => {
                  onUpdateFilters({ searchQuery: e.target.value });
                  setActivePage(1);
                }}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => onUpdateFilters({ searchQuery: '' })}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ×
                </button>
              )}
            </div>

            {/* Topic Select Dropdown */}
            {availableTopics.length > 1 && (
              <select
                value={filters.topicId}
                onChange={e => {
                  onUpdateFilters({ topicId: e.target.value });
                  setActivePage(1);
                }}
                aria-label="Filter questions by topic"
                className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold focus:outline-hidden max-w-[160px] truncate"
              >
                <option value="all">All Topics ({availableTopics.length})</option>
                {availableTopics.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            )}

            {/* Exam Mode Toggle */}
            <button
              onClick={() => onUpdateFilters({ examMode: !filters.examMode })}
              title={filters.examMode ? 'Exam Mode Active: answers hidden until submitted' : 'Practice Mode Active: instant answer explanations'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                filters.examMode
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {filters.examMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{filters.examMode ? 'Exam Mode' : 'Practice'}</span>
            </button>

            {/* Question Palette Drawer Trigger */}
            <button
              onClick={() => setShowPalette(prev => !prev)}
              title="Open full question jump palette"
              className={`p-1.5 rounded-xl border text-xs font-bold transition-all ${
                showPalette
                  ? 'bg-blue-100 dark:bg-blue-900 border-blue-400 text-blue-700 dark:text-blue-200'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Filter Progress Indicator */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">
              Showing {filteredQuestions.length} Questions
            </span>
            <span>•</span>
            <span>Answered: {currentAnswered}/{filteredQuestions.length}</span>
            <span>•</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Score: {currentCorrect} ({currentPct}%)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {filters.moduleId !== 'all' && (
              <button
                onClick={() => onResetModule(filters.moduleId)}
                className="text-rose-500 hover:text-rose-600 text-[11px] font-bold flex items-center gap-1"
                title="Reset answers for this module only"
              >
                <RotateCcw className="w-3 h-3" />
                Reset {filters.moduleId.toUpperCase()}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Jump Question Palette (Grid) */}
      {showPalette && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <LayoutGrid className="w-3.5 h-3.5 text-blue-600" />
              <span>Question Jump Palette (Showing {filteredQuestions.length} Qs)</span>
            </h4>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Correct</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span> Wrong</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 inline-block"></span> Unanswered</span>
              <span className="flex items-center gap-1"><span className="text-amber-500 font-bold">★</span> Bookmarked</span>
            </div>
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-20 gap-1.5 max-h-48 overflow-y-auto p-1">
            {filteredQuestions.map((q, idx) => {
              const record = answers[q.id];
              const isAnswered = record !== undefined;
              const isCorrect = record?.isCorrect;
              const isBookmarked = bookmarkedQuestionIds.includes(q.id);

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    const targetPage = Math.floor(idx / pageSize) + 1;
                    setActivePage(targetPage);
                    const el = document.getElementById(q.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`relative h-7 rounded text-[11px] font-bold flex items-center justify-center border transition-all ${
                    isAnswered
                      ? isCorrect
                        ? 'bg-emerald-500 text-white border-emerald-600'
                        : 'bg-rose-500 text-white border-rose-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{q.index}</span>
                  {isBookmarked && (
                    <span className="absolute -top-1 -right-1 text-[8px] text-amber-300 drop-shadow-xs">
                      ★
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Question Cards List */}
      <div className="space-y-4">
        {paginatedQuestions.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-1">
              No Questions Found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 max-w-sm mx-auto">
              No exam questions match your current filter selection. Try changing your filters or search keyword.
            </p>
            <button
              onClick={() => onUpdateFilters({ moduleId: 'all', topicId: 'all', status: 'all', tagFilter: 'all', searchQuery: '' })}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          paginatedQuestions.map((q) => {
            const record = answers[q.id];
            const isAnswered = record !== undefined;
            const isBookmarked = bookmarkedQuestionIds.includes(q.id);
            const showRationale = isAnswered && (!filters.examMode || isAnswered);
            const reviewExpanded = expandedReviews[q.id] || false;

            return (
              <div
                key={q.id}
                id={q.id}
                className={`bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-xs transition-all ${
                  isAnswered
                    ? record.isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60 ring-1 ring-emerald-500/10'
                      : 'border-rose-200 dark:border-rose-900/60 ring-1 ring-rose-500/10'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {/* Question Number Badge */}
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                      Q#{q.index}
                    </span>

                    {/* Module Badge */}
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${getModuleBadgeColor(q.moduleId)}`}>
                      {q.moduleName.split(':')[0]}
                    </span>

                    {/* Topic Badge */}
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {q.topicTitle.split('(')[0]}
                    </span>

                    {/* Repeated Tag */}
                    {q.isRepeat && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700 animate-pulse">
                        <Flame className="w-3 h-3 text-amber-600" />
                        Repeated in 2+ Exams
                      </span>
                    )}

                    {/* Tags */}
                    {q.tags.filter(t => !t.includes('Repeated')).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => onToggleBookmark(q.id)}
                    title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
                    className={`p-2 rounded-xl transition-all ${
                      isBookmarked
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100'
                        : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Question Stem */}
                <div className={`font-bold text-slate-900 dark:text-slate-100 mb-4 leading-relaxed ${stemFontSizeClass}`}>
                  {q.stem}
                </div>

                {/* Options List */}
                <div className="space-y-2 mb-4">
                  {q.options.map((opt) => {
                    const isSelected = record?.selectedOption === opt.letter;
                    const isCorrectAnswer = q.answer.toUpperCase() === opt.letter.toUpperCase();
                    
                    let buttonClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700';

                    if (isAnswered) {
                      if (isCorrectAnswer) {
                        buttonClass = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500/20';
                      } else if (isSelected && !record.isCorrect) {
                        buttonClass = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100 font-medium line-through opacity-85';
                      } else {
                        buttonClass = 'opacity-60 bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={opt.letter}
                        disabled={isAnswered}
                        onClick={() => onRecordAnswer(q.id, opt.letter)}
                        className={`w-full text-left p-3 rounded-xl border flex items-start gap-3 transition-all ${buttonClass} ${optFontSizeClass}`}
                      >
                        <span className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                          isAnswered && isCorrectAnswer
                            ? 'bg-emerald-600 text-white'
                            : isAnswered && isSelected && !record.isCorrect
                            ? 'bg-rose-600 text-white'
                            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600'
                        }`}>
                          {isAnswered && isCorrectAnswer ? (
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          ) : isAnswered && isSelected && !record.isCorrect ? (
                            <XCircle className="w-3.5 h-3.5" />
                          ) : (
                            opt.letter
                          )}
                        </span>
                        <span className="flex-1 pt-0.5">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Answer Rationale Display */}
                {showRationale && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className={`p-4 rounded-xl border mb-3 ${
                      record.isCorrect
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/80 text-rose-950 dark:text-rose-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-2 font-black text-xs uppercase tracking-wide">
                        {record.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span>Correct! Excellent Recall</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                            <span>Incorrect — Correct Answer is {q.answer}</span>
                          </>
                        )}
                      </div>
                      
                      {/* Rationale Text */}
                      <div 
                        className="text-xs sm:text-sm leading-relaxed prose-sm dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: q.rationale }}
                      />
                    </div>

                    {/* Collapsible Study Review Drawer */}
                    {q.studyReview && (
                      <div className="border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleReview(q.id)}
                          className="w-full flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/80 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors"
                        >
                          <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Quick Topic Review &amp; Exam Pearls ({q.topicTitle.split('(')[0]})</span>
                          </span>
                          {reviewExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {reviewExpanded && (
                          <div 
                            className="p-4 bg-white dark:bg-slate-900/60 text-xs text-slate-700 dark:text-slate-300 prose-medical border-t border-slate-200 dark:border-slate-800"
                            dangerouslySetInnerHTML={{ __html: q.studyReview }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <button
            disabled={activePage === 1}
            onClick={() => {
              setActivePage(prev => Math.max(1, prev - 1));
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Previous
          </button>

          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
            Page {activePage} of {totalPages}
          </span>

          <button
            disabled={activePage === totalPages}
            onClick={() => {
              setActivePage(prev => Math.min(totalPages, prev + 1));
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Next
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
