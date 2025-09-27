import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import VideoCard from './components/VideoCard';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">AI Video Generator</h1>
      <PromptForm onVideoGenerated={setVideoUrl} />
      {videoUrl && <VideoCard videoUrl={videoUrl} />}
    </div>
  );
}
