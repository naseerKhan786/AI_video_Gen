import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  onVideoGenerated: (url: string) => void;
};

export default function PromptForm({ onVideoGenerated }: Props) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/generate-video', { prompt });
      onVideoGenerated(res.data.videoUrl);
    } catch (err) {
      console.error(err);
      alert('Error generating video');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Enter video prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-indigo-600"
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </form>
  );
}
