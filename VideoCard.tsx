import React from 'react';

type Props = { videoUrl: string };

export default function VideoCard({ videoUrl }: Props) {
  return (
    <div className="mt-4 p-4 border rounded shadow-md">
      <video controls className="w-full rounded">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
