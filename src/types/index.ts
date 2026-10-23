import { Question } from '../data/questionsData';
import { CondensedModule } from '../data/modulesCondensedData';
import { Flashcard } from '../data/flashcardsData';

export type AppMode = 'qbank' | 'study-notes' | 'flashcards' | 'mindmap' | 'master-tables';

export type QuestionStatusFilter = 'all' | 'unanswered' | 'incorrect' | 'correct' | 'bookmarked';

export interface QBankFilters {
  moduleId: string; // 'all' | 'm1' | 'm2' | 'm3' | 'm4' | 'm5'
  topicId: string;  // 'all' or specific topic id
  status: QuestionStatusFilter;
  tagFilter: string; // 'all' | 'repeated' | 'midterm' | 'final'
  searchQuery: string;
  examMode: boolean; // if true, don't show answers immediately
  shuffle: boolean;
}

export interface UserAnswerRecord {
  selectedOption: string;
  isCorrect: boolean;
  answeredAt: number;
}

export type FlashcardStatus = 'known' | 'learning';

export interface UserStudyState {
  answers: Record<string, UserAnswerRecord>;
  bookmarkedQuestionIds: string[];
  flashcardStatus: Record<string, FlashcardStatus>;
  darkMode: boolean;
  soundEnabled: boolean;
  fontSize: 'sm' | 'md' | 'lg';
  activeMode: AppMode;
  selectedModuleId: 'm1' | 'm2' | 'm3' | 'm4' | 'm5';
}

export type { Question, CondensedModule, Flashcard };
