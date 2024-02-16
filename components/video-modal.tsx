"use client";

import React from "react";

export type YoutubeModalProps = {
  videoUrl: string;
  onClose: () => void;
};

export default function YoutubeModal({
  videoUrl,
  onClose,
}: YoutubeModalProps): JSX.Element | null {
  if (!videoUrl) return null;
  console.log(videoUrl);

  return (
    <div className="fixed inset-0 md:pl-72 bg-black bg-opacity-80 z-30 flex justify-center items-center">
      <div className="bg-white p-2 rounded-lg shadow-lg dark:bg-white/15">
        <iframe
          src={videoUrl}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[30rem] sm:h-[25rem] sm:w-[35rem] md:h-[35rem] md:w-[45rem]"
        />
        <button
          onClick={onClose}
          className="btn_primary my-3"
        >
          Close
        </button>
      </div>
    </div>
  );
}
