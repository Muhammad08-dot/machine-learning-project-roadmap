import { useState, useEffect } from 'react';
import { Topic } from './data';
import Dashboard from './components/Dashboard';
import TopicView from './components/TopicView';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTopic]);

  if (selectedTopic) {
    return (
      <TopicView
        topic={selectedTopic}
        onBack={() => setSelectedTopic(null)}
      />
    );
  }

  return <Dashboard onSelectTopic={setSelectedTopic} />;
}
