import React, { useState } from 'react';
import {
  Network,
  BookOpen,
  Search,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { megaMapHtml } from '../data/masterSummaryData';

interface MegaMindMapViewProps {
  onGoToNotes: (modId: 'm1' | 'm2' | 'm3' | 'm4') => void;
  onGoToQBank: (modId: string) => void;
}

export const MegaMindMapView: React.FC<MegaMindMapViewProps> = ({
  onGoToNotes,
  onGoToQBank,
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <div className="space-y-6">
      
      {/* Header Deck */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                <Network className="w-4 h-4" />
              </span>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Mega Visual Mind Map — Entire Ophthalmology Syllabus
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Comprehensive clinical connections connecting all 4 professors + Module 5 (Glaucoma &amp; Retina)
            </p>
          </div>

          {/* Quick Jump Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => onGoToNotes('m1')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              M1: Al-Ansi
            </button>
            <button
              onClick={() => onGoToNotes('m2')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
            >
              M2: Al-Soufi
            </button>
            <button
              onClick={() => onGoToNotes('m3')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
            >
              M3: Al-Khayyat
            </button>
            <button
              onClick={() => onGoToNotes('m4')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
            >
              M4: Nabil Sabr
            </button>
          </div>
        </div>
      </div>

      {/* Visual Mind Map Board */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm overflow-x-auto">
        <div
          className="prose-medical text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm"
          dangerouslySetInnerHTML={{ __html: megaMapHtml }}
        />
      </div>
    </div>
  );
};
