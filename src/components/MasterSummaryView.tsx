import React, { useState } from 'react';
import {
  TableProperties,
  Search,
  Printer,
  Sparkles,
  ShieldAlert,
  Stethoscope,
  CheckCircle2,
  AlertOctagon
} from 'lucide-react';
import { table1Html, table2Html } from '../data/masterSummaryData';

export const MasterSummaryView: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Header Deck */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                <TableProperties className="w-4 h-4" />
              </span>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Master High-Yield Midterm Summary Tables
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Rapid-fire Drug of Choice vs Contraindications • Pathognomonic Signs • Diagnostic Tests
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Cheat-Sheet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table 1: Drug of Choice vs Strictly Contraindicated */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-rose-500">
          <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400" />
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
            Table 1: Master "Drug of Choice" vs. "Strictly Contraindicated" Rapid-Fire Guide
          </h3>
        </div>

        <div className="overflow-x-auto">
          <div
            className="prose-medical text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm"
            dangerouslySetInnerHTML={{ __html: `<table>${table1Html}</table>` }}
          />
        </div>
      </div>

      {/* Table 2: Diagnostic Tests & Pathognomonic Signs */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-indigo-500">
          <Stethoscope className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
            Table 2: Master Diagnostic Tests &amp; Pathognomonic Clinical Signs ("Buzzword Decoder")
          </h3>
        </div>

        <div
          className="prose-medical text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm"
          dangerouslySetInnerHTML={{ __html: `<div class="sum-grid">${table2Html}</div>` }}
        />
      </div>
    </div>
  );
};
