"use client";

import React, { useState } from "react";
import Heading from "@/components/heading";
import YoutubeModal from "@/components/video-modal";

const videos = [
  {
    videoUrl: "https://www.youtube.com/embed/dmFvGbeDpR0",
    thumbnail: "https://img.youtube.com/vi/dmFvGbeDpR0/maxresdefault.jpg",
    title: "Raining",
  },
  {
    videoUrl: "https://www.youtube.com/embed/YuBczF3_Uik",
    thumbnail: "https://img.youtube.com/vi/YuBczF3_Uik/maxresdefault.jpg",
    title: "Yoga",
  },
  {
    videoUrl: "https://www.youtube.com/embed/fG-B3o-0RWg",
    thumbnail: "https://img.youtube.com/vi/fG-B3o-0RWg/maxresdefault.jpg",
    title: "Candles",
  },
  {
    videoUrl: "https://www.youtube.com/embed/woifuuztjlA",
    thumbnail: "https://img.youtube.com/vi/woifuuztjlA/maxresdefault.jpg",
    title: "valley",
  },
];

export default function MeditationVideo() {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  // Function to open the modal and set the video URL
  const openModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl); // Set the selected video URL
    setShowVideo(true); // Show the modal
  };

  return (
    <div>
      <Heading>Meditation Video</Heading>
      <div className="mx-8 space-y-4 px-4 lg:px-8 bg-indigo-50 mb-6 py-4 border rounded-xl">
        <h3 className="text-2xl font-bold text-indigo-400">Instructions</h3>
        <p className="text-muted-foreground ">
          Select a meditation video to start your meditation session.
        </p>
      </div>

      <div className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onClick={() => openModal(video.videoUrl)} // Pass the video URL to openModal
          >
            <img src={video.thumbnail} alt={video.title} className="w-full" />
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <YoutubeModal
          videoUrl={selectedVideoUrl}
          onClose={() => setShowVideo(false)}
        />
      )}
    </div>
  );
}
