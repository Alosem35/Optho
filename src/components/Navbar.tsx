import React, { useState } from 'react';
import {
  Eye,
  BookOpen,
  CheckCircle2,
  Zap,
  Network,
  TableProperties,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  RotateCcw,
  Search,
  Bookmark,
  Sparkles,
  BarChart3,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import { AppMode } from '../types';

interface NavbarProps {
  activeMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  stats: {
    totalQuestions: number;
    answeredCount: number;
    correctCount: number;
    percentage: number;
    bookmarksCount: number;
  };
  darkMode: boolean;
  onToggleDarkMode: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  fontSize: 'sm' | 'md' | 'lg';
  onChangeFontSize: (size: 'sm' | 'md' | 'lg') => void;
  onOpenSearch: () => void;
  onResetAll: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeMode,
  onSelectMode,
  stats,
  darkMode,
  onToggleDarkMode,
  soundEnabled,
  onToggleSound,
  fontSize,
  onChangeFontSize,
  onOpenSearch,
  onResetAll,
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { mode: 'study-notes' as AppMode, label: 'Study Notes', icon: BookOpen, badge: 'M1–M4' },
    { mode: 'qbank' as AppMode, label: 'QBank Exam', icon: CheckCircle2, badge: `${stats.totalQuestions} Qs` },
    { mode: 'flashcards' as AppMode, label: 'Flashcards', icon: Zap, badge: '54 Cards' },
    { mode: 'mindmap' as AppMode, label: 'Mega Mind Map', icon: Network },
    { mode: 'master-tables' as AppMode, label: 'Master Tables', icon: TableProperties, badge: 'Drugs & Traps' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-2">
            
            {/* Brand Logo & Title */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20">
                <Eye className="w-6 h-6 animate-pulse" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div className="cursor-pointer" onClick={() => onSelectMode('study-notes')}>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                    OphthoMaster
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
                    Batches 20–24
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:block">
                  All 4 Professors • 156 Questions • Ultra-Condensed Review
                </p>
              </div>
            </div>

            {/* Desktop Navigation Modes */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = activeMode === item.mode;
                return (
                  <button
                    key={item.mode}
                    onClick={() => onSelectMode(item.mode)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                        isActive
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Stats & Controls Toolbar */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                title="Search across all questions and notes (Shortcut: /)"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded">
                  /
                </kbd>
              </button>

              {/* Progress HUD Pill */}
              <div 
                className="cursor-pointer flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs"
                onClick={() => onSelectMode('qbank')}
                title="Click to open QBank"
              >
                <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-slate-200">
                  <BarChart3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span className="hidden sm:inline">{stats.answeredCount}/{stats.totalQuestions}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold ${
                    stats.percentage >= 80 
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' 
                      : stats.percentage >= 60 
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' 
                      : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                  }`}>
                    {stats.percentage}%
                  </span>
                </div>
              </div>

              {/* Sound Toggle */}
              <button
                onClick={onToggleSound}
                title={soundEnabled ? 'Mute sound effects' : 'Enable audio feedback'}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {/* Dark / Light Toggle */}
              <button
                onClick={onToggleDarkMode}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              {/* Font Size Toggle */}
              <div className="hidden sm:flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 border border-slate-200 dark:border-slate-700 text-[11px] font-bold">
                <button
                  onClick={() => onChangeFontSize('sm')}
                  className={`px-1.5 py-0.5 rounded ${fontSize === 'sm' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-500'}`}
                  title="Small Text"
                >
                  A-
                </button>
                <button
                  onClick={() => onChangeFontSize('md')}
                  className={`px-1.5 py-0.5 rounded ${fontSize === 'md' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-500'}`}
                  title="Default Text"
                >
                  A
                </button>
                <button
                  onClick={() => onChangeFontSize('lg')}
                  className={`px-1.5 py-0.5 rounded ${fontSize === 'lg' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-500'}`}
                  title="Large Text"
                >
                  A+
                </button>
              </div>

              {/* Reset Progress */}
              <button
                onClick={() => setShowResetConfirm(true)}
                title="Reset answered questions and scores"
                className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = activeMode === item.mode;
                return (
                  <button
                    key={item.mode}
                    onClick={() => {
                      onSelectMode(item.mode);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-center text-slate-900 dark:text-white mb-2">
              Reset All Study Progress?
            </h3>
            <p className="text-xs text-center text-slate-600 dark:text-slate-400 mb-6">
              This will clear all your answered questions, scores, bookmarks, and flashcard mastery. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 px-4 py-2 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onResetAll();
                  setShowResetConfirm(false);
                }}
                className="flex-1 px-4 py-2 text-xs font-bold rounded-xl bg-rose-600 text-white hover:bg-rose-700 shadow-md shadow-rose-600/20"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
