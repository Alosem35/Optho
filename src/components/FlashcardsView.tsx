import React, { useState, useEffect, useMemo } from 'react';
import {
  Zap,
  RotateCw,
  CheckCircle2,
  XCircle,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Award
} from 'lucide-react';
import { flashcardsData, Flashcard } from '../data/flashcardsData';
import { FlashcardStatus } from '../types';

interface FlashcardsViewProps {
  flashcardStatus: Record<string, FlashcardStatus>;
  onUpdateFlashcard: (cardId: string, status: FlashcardStatus) => void;
  soundEnabled: boolean;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  flashcardStatus,
  onUpdateFlashcard,
  soundEnabled,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [shuffled, setShuffled] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    flashcardsData.forEach(c => set.add(c.category));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered cards
  const activeDeck = useMemo(() => {
    let list = [...flashcardsData];
    if (selectedCategory !== 'all') {
      list = list.filter(c => c.category === selectedCategory);
    }
    if (shuffled) {
      list = list.sort(() => Math.sin(list.length) - 0.5);
    }
    return list;
  }, [selectedCategory, shuffled]);

  const currentCard = activeDeck[currentIndex] || activeDeck[0];
  const totalInDeck = activeDeck.length;

  // Mastered stats
  const masteredCount = activeDeck.filter(c => flashcardStatus[c.id] === 'known').length;
  const progressPct = totalInDeck > 0 ? Math.round((masteredCount / totalInDeck) * 100) : 0;

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalInDeck]);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % totalInDeck);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + totalInDeck) % totalInDeck);
  };

  const handleMark = (status: FlashcardStatus) => {
    if (!currentCard) return;
    onUpdateFlashcard(currentCard.id, status);
    // Auto advance
    setTimeout(() => {
      handleNext();
    }, 250);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Header Deck Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400">
                <Zap className="w-4 h-4 fill-current" />
              </span>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Ophthalmology High-Yield Flashcard Drill
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Active recall for buzzwords, triads, diagnostic signs &amp; exam traps
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={e => {
                setSelectedCategory(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              aria-label="Filter flashcards by category"
              className="px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 focus:outline-hidden"
            >
              <option value="all">All Categories ({flashcardsData.length})</option>
              {categories.filter(c => c !== 'all').map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Shuffle Button */}
            <button
              onClick={() => {
                setShuffled(prev => !prev);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              title="Shuffle Deck"
              className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                shuffled
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mastery Progress Bar */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-slate-700 dark:text-slate-300">
              Mastery Progress: {masteredCount} of {totalInDeck} Cards Mastered
            </span>
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
              {progressPct}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3D Interactive Flashcard */}
      {currentCard && (
        <div
          onClick={() => setIsFlipped(prev => !prev)}
          className="cursor-pointer group relative min-h-[300px] sm:min-h-[340px] rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-600"
        >
          {/* Card Top Label */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {currentCard.category}
            </span>
            <div className="flex items-center gap-2">
              {flashcardStatus[currentCard.id] === 'known' && (
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Mastered
                </span>
              )}
              <span className="text-xs font-bold text-slate-400">
                {currentIndex + 1} / {totalInDeck}
              </span>
            </div>
          </div>

          {/* Card Main Body */}
          <div className="my-auto py-6 text-center">
            {!isFlipped ? (
              <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block">
                  Question / Clinical Term
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {currentCard.front}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full mt-4">
                  <RotateCw className="w-3.5 h-3.5 animate-spin-reverse" />
                  Click or Press Spacebar to Flip
                </span>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                  Definition / Diagnostic Yield
                </span>
                <p className="text-base sm:text-xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed max-w-xl mx-auto">
                  {currentCard.back}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  Click again to flip back
                </span>
              </div>
            )}
          </div>

          {/* Card Footer Help */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3">
            <span>Tip: Space = Flip</span>
            <span>Arrow keys = Previous / Next</span>
          </div>
        </div>
      )}

      {/* Control Buttons Deck */}
      <div className="flex items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Action Buttons: Still Learning vs Mastered */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleMark('learning')}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-bold text-xs hover:bg-rose-100 transition-all hover:scale-105 active:scale-95"
          >
            <XCircle className="w-4 h-4 text-rose-500" />
            <span>Need Review</span>
          </button>

          <button
            onClick={() => handleMark('known')}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Mastered (Got it!)</span>
          </button>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
