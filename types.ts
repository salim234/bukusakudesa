
import { ReactNode } from 'react';

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  prompt: string;
  draftPrompt: string;
  quizId: string;
}

export type ActiveView = 'home' | 'module' | 'search' | 'favorites' | 'glossary' | 'profile';

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface GlossaryTerm {
    term: string;
    definition: string;
    category: string;
}

export interface Profile {
  name: string;
  village: string;
}
