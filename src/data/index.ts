import { Section } from './types';
import { regressionTopic } from './regression';
import { classificationTopic } from './classification';
import { clusteringTopic } from './clustering';
import { dimensionalityTopic } from './dimensionality';
import { ensembleTopic } from './ensemble';
import { anomalyTopic } from './anomaly';
import { associationTopic } from './association';
import { semiSupervisedTopic } from './semisupervised';
import { reinforcementTopic } from './reinforcement';

export const mlData: Section[] = [
  {
    id: 'supervised',
    title: 'Supervised Learning',
    subtitle: 'Learn from labeled data',
    icon: '🎯',
    topics: [
      {
        id: 'regression',
        letter: 'A',
        title: 'Regression',
        emoji: '📈',
        color: 'blue',
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Predict continuous numerical values',
        subtopics: [regressionTopic]
      },
      {
        id: 'classification',
        letter: 'A',
        title: 'Classification',
        emoji: '🏷️',
        color: 'purple',
        gradient: 'from-purple-500 to-pink-500',
        description: 'Predict discrete categories',
        subtopics: [classificationTopic]
      }
    ]
  },
  {
    id: 'unsupervised',
    title: 'Unsupervised Learning',
    subtitle: 'Discover hidden patterns',
    icon: '🔍',
    topics: [
      {
        id: 'clustering',
        letter: 'B',
        title: 'Clustering',
        emoji: '🔮',
        color: 'green',
        gradient: 'from-emerald-500 to-teal-500',
        description: 'Group similar data points together',
        subtopics: [clusteringTopic]
      },
      {
        id: 'dimensionality',
        letter: 'B',
        title: 'Dimensionality Reduction',
        emoji: '🔬',
        color: 'teal',
        gradient: 'from-teal-500 to-cyan-500',
        description: 'Reduce feature space while preserving information',
        subtopics: [dimensionalityTopic]
      },
      {
        id: 'association',
        letter: 'B',
        title: 'Association Rules',
        emoji: '🔗',
        color: 'amber',
        gradient: 'from-amber-500 to-orange-500',
        description: 'Discover relationships between variables',
        subtopics: [associationTopic]
      },
      {
        id: 'anomaly',
        letter: 'B',
        title: 'Anomaly Detection',
        emoji: '🚨',
        color: 'red',
        gradient: 'from-red-500 to-rose-500',
        description: 'Identify unusual patterns and outliers',
        subtopics: [anomalyTopic]
      }
    ]
  },
  {
    id: 'ensemble',
    title: 'Ensemble Learning',
    subtitle: 'Job market king ⭐',
    icon: '👑',
    topics: [
      {
        id: 'ensemble',
        letter: 'C',
        title: 'Ensemble Methods',
        emoji: '⭐',
        color: 'yellow',
        gradient: 'from-yellow-500 to-amber-500',
        description: 'Combine multiple models for superior performance',
        subtopics: [ensembleTopic]
      }
    ]
  },
  {
    id: 'semisupervised',
    title: 'Semi-Supervised & Self-Supervised',
    subtitle: 'Learn with limited labels',
    icon: '🔄',
    topics: [
      {
        id: 'semisupervised',
        letter: 'D',
        title: 'Semi & Self-Supervised',
        emoji: '🔄',
        color: 'indigo',
        gradient: 'from-indigo-500 to-violet-500',
        description: 'Bridge between labeled and unlabeled learning',
        subtopics: [semiSupervisedTopic]
      }
    ]
  },
  {
    id: 'reinforcement',
    title: 'Reinforcement Learning',
    subtitle: 'Learn by interaction',
    icon: '🎮',
    topics: [
      {
        id: 'reinforcement',
        letter: 'E',
        title: 'Reinforcement Learning',
        emoji: '🎮',
        color: 'rose',
        gradient: 'from-rose-500 to-red-500',
        description: 'Learn by interacting with environments and maximizing rewards',
        subtopics: [reinforcementTopic]
      }
    ]
  }
];

export type { Section, Topic, SubTopic, Project, Difficulty } from './types';
