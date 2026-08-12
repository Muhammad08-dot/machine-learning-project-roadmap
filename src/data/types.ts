export type Difficulty = 'basic' | 'intermediate' | 'advanced';

export interface Project {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  tools: string[];
  dataset?: string;
}

export interface SubTopic {
  name: string;
  emoji: string;
  description: string;
  algorithms: string[];
  projects: Project[];
}

export interface Topic {
  id: string;
  letter: string;
  title: string;
  emoji: string;
  color: string;
  gradient: string;
  description: string;
  subtopics: SubTopic[];
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  topics: Topic[];
}
