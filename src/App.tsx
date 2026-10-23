/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useStudyStore } from './hooks/useStudyStore';
import { Navbar } from './components/Navbar';
import { QBankView } from './components/QBankView';
import { StudyNotesView } from './components/StudyNotesView';
import { FlashcardsView } from './components/FlashcardsView';
import { MegaMindMapView } from './components/MegaMindMapView';
import { MasterSummaryView } from './components/MasterSummaryView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AppMode } from './types';
import { Eye, BookOpen, CheckCircle2, Zap, Network, TableProperties } from 'lucide-react';

export default function App() {
  const {
    answers,
    bookmarkedQuestionIds,
    flashcardStatus,
    darkMode,
    soundEnabled,
    fontSize,
    activeMode,
    selectedModuleId,
    qbankFilters,
    stats,
    setQbankFilters,
    setFontSize,
    setActiveMode,
    setSelectedModuleId,
    toggleDarkMode,
    toggleSound,
    toggleBookmark,
    recordAnswer,
    updateFlashcard,
    resetAllProgress,
    resetModuleProgress,
  } = useStudyStore();

  const [searchOpen, setSearchOpen] = useState(false);

  // Global key listener for '/' search trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateToQuestion = (questionId: string) => {
    setActiveMode('qbank');
    // Scroll to question
    setTimeout(() => {
      const el = document.getElementById(questionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  const handleNavigateToModule = (modId: 'm1' | 'm2' | 'm3' | 'm4') => {
    setSelectedModuleId(modId);
    setActiveMode('study-notes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToQBankWithModule = (modId: string) => {
    setQbankFilters(prev => ({ ...prev, moduleId: modId, topicId: 'all' }));
    setActiveMode('qbank');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors flex flex-col font-sans`}>
      
      {/* Top Header & Sticky Navigation */}
      <Navbar
        activeMode={activeMode}
        onSelectMode={setActiveMode}
        stats={stats}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        onOpenSearch={() => setSearchOpen(true)}
        onResetAll={resetAllProgress}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6">
        {activeMode === 'study-notes' && (
          <StudyNotesView
            selectedModuleId={selectedModuleId}
            onSelectModule={setSelectedModuleId}
            onGoToQBankWithModule={handleGoToQBankWithModule}
            fontSize={fontSize}
          />
        )}

        {activeMode === 'qbank' && (
          <QBankView
            answers={answers}
            bookmarkedQuestionIds={bookmarkedQuestionIds}
            filters={qbankFilters}
            onUpdateFilters={newFilters => setQbankFilters(prev => ({ ...prev, ...newFilters }))}
            onRecordAnswer={recordAnswer}
            onToggleBookmark={toggleBookmark}
            onResetModule={resetModuleProgress}
            fontSize={fontSize}
          />
        )}

        {activeMode === 'flashcards' && (
          <FlashcardsView
            flashcardStatus={flashcardStatus}
            onUpdateFlashcard={updateFlashcard}
            soundEnabled={soundEnabled}
          />
        )}

        {activeMode === 'mindmap' && (
          <MegaMindMapView
            onGoToNotes={handleNavigateToModule}
            onGoToQBank={handleGoToQBankWithModule}
          />
        )}

        {activeMode === 'master-tables' && (
          <MasterSummaryView />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-0">
            <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-slate-700 dark:text-slate-300">
              OphthoMaster
            </span>
            <span>— Thamar University Medical School • Batches 20–24</span>
          </div>

          <div className="flex items-center justify-center gap-4 font-semibold text-[11px]">
            <button onClick={() => setActiveMode('study-notes')} className="hover:text-blue-500">
              Notes
            </button>
            <button onClick={() => setActiveMode('qbank')} className="hover:text-blue-500">
              QBank (156 Qs)
            </button>
            <button onClick={() => setActiveMode('flashcards')} className="hover:text-blue-500">
              Flashcards
            </button>
            <button onClick={() => setActiveMode('master-tables')} className="hover:text-blue-500">
              Drug Tables
            </button>
            <button onClick={() => setSearchOpen(true)} className="hover:text-blue-500">
              Search (/)
            </button>
          </div>
        </div>
      </footer>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigateToQuestion={handleNavigateToQuestion}
        onNavigateToModule={handleNavigateToModule}
      />
    </div>
  );
}
