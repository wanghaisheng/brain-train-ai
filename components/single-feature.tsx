import React from "react";
import Image from "next/image";

interface SingleFeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export default function SingleFeature({
  title,
  description,
  imageUrl,
  alt,
}: SingleFeatureProps) {
  return (
    <section>
      <div>
        <h1 className="mt-20 text-3xl font-extrabold tracking-tight text-center text-zync-600 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div>
          <p className="mt-3 mb-3 text-center text-slate-500">{description}</p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <div className="flex flex-col justify-between bg-white text-gray-800 rounded-lg shadow-2xl p-6 h-full">
          <Image
            src={imageUrl}
            width={800}
            height={800}
            alt={alt}
            className="self-center mt-4"
          />
        </div>
      </div>
    </section>
  );
}
