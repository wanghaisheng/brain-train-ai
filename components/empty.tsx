import React from "react";
import Image from "next/image";

type EmptyProps = {
  imageUrl: string;
  label: string;
};

export default function empty({ imageUrl, label }: EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src={imageUrl} fill alt="Empty Placeholder" />
      </div>
      <p className="text-muted-foreground text-sm text-center mt-3">
        {label}
      </p>
    </div>
  );
}
