import { useState, useEffect, useCallback, useMemo } from 'react';
import { AppMode, QBankFilters, UserAnswerRecord, FlashcardStatus } from '../types';
import { questionsData } from '../data/questionsData';
import { playSound } from '../utils/audio';

const STORAGE_KEY = 'ophtho_master_study_state_v1';

export function useStudyStore() {
  // Load saved state from localStorage
  const [answers, setAnswers] = useState<Record<string, UserAnswerRecord>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_answers`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_bookmarks`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [flashcardStatus, setFlashcardStatus] = useState<Record<string, FlashcardStatus>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_flashcards`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_dark`);
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_sound`);
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [activeMode, setActiveMode] = useState<AppMode>('study-notes');
  const [selectedModuleId, setSelectedModuleId] = useState<'m1' | 'm2' | 'm3' | 'm4' | 'm5'>('m1');

  // QBank filters
  const [qbankFilters, setQbankFilters] = useState<QBankFilters>({
    moduleId: 'all',
    topicId: 'all',
    status: 'all',
    tagFilter: 'all',
    searchQuery: '',
    examMode: false,
    shuffle: false,
  });

  // Persist answers
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_answers`, JSON.stringify(answers));
    } catch {}
  }, [answers]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_bookmarks`, JSON.stringify(bookmarkedQuestionIds));
    } catch {}
  }, [bookmarkedQuestionIds]);

  // Persist flashcards
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_flashcards`, JSON.stringify(flashcardStatus));
    } catch {}
  }, [flashcardStatus]);

  // Apply dark mode to document element
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_dark`, JSON.stringify(darkMode));
    } catch {}
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Persist sound
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_sound`, JSON.stringify(soundEnabled));
    } catch {}
  }, [soundEnabled]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  const toggleBookmark = useCallback((questionId: string) => {
    setBookmarkedQuestionIds(prev => {
      const exists = prev.includes(questionId);
      if (soundEnabled) playSound('click');
      return exists ? prev.filter(id => id !== questionId) : [...prev, questionId];
    });
  }, [soundEnabled]);

  const recordAnswer = useCallback((questionId: string, selectedOption: string) => {
    const q = questionsData.find(item => item.id === questionId);
    if (!q) return;

    const isCorrect = selectedOption.toUpperCase() === q.answer.toUpperCase();

    if (soundEnabled) {
      if (isCorrect) playSound('correct');
      else playSound('wrong');
    }

    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        selectedOption,
        isCorrect,
        answeredAt: Date.now(),
      }
    }));
  }, [soundEnabled]);

  const updateFlashcard = useCallback((cardId: string, status: FlashcardStatus) => {
    if (soundEnabled) playSound('click');
    setFlashcardStatus(prev => ({
      ...prev,
      [cardId]: status
    }));
  }, [soundEnabled]);

  const resetAllProgress = useCallback(() => {
    if (soundEnabled) playSound('click');
    setAnswers({});
    setFlashcardStatus({});
    setBookmarkedQuestionIds([]);
  }, [soundEnabled]);

  const resetModuleProgress = useCallback((modId: string) => {
    if (soundEnabled) playSound('click');
    setAnswers(prev => {
      const next = { ...prev };
      questionsData.forEach(q => {
        if (q.moduleId === modId) {
          delete next[q.id];
        }
      });
      return next;
    });
  }, [soundEnabled]);

  // Calculated Statistics
  const stats = useMemo(() => {
    const totalQuestions = questionsData.length;
    const answeredEntries = Object.entries(answers);
    const answeredCount = answeredEntries.length;
    const correctCount = answeredEntries.filter(([_, a]) => a.isCorrect).length;
    const incorrectCount = answeredCount - correctCount;
    const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const overallProgress = Math.round((answeredCount / totalQuestions) * 100);

    // Module-specific breakdown
    const modules = ['m1', 'm2', 'm3', 'm4', 'm5'] as const;
    const moduleStats: Record<string, { total: number; answered: number; correct: number; pct: number }> = {};

    modules.forEach(m => {
      const mQuestions = questionsData.filter(q => q.moduleId === m);
      const mAnswered = mQuestions.filter(q => answers[q.id] !== undefined);
      const mCorrect = mAnswered.filter(q => answers[q.id]?.isCorrect);
      moduleStats[m] = {
        total: mQuestions.length,
        answered: mAnswered.length,
        correct: mCorrect.length,
        pct: mAnswered.length > 0 ? Math.round((mCorrect.length / mAnswered.length) * 100) : 0,
      };
    });

    return {
      totalQuestions,
      answeredCount,
      correctCount,
      incorrectCount,
      percentage,
      overallProgress,
      bookmarksCount: bookmarkedQuestionIds.length,
      moduleStats
    };
  }, [answers, bookmarkedQuestionIds]);

  return {
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
  };
}
