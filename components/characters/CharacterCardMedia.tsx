"use client";

import Image from "next/image";
import { useState } from "react";
import cloudinaryLoader from "@/lib/cloudinary-loader";

type CharacterCardMediaProps = {
  character: string;
  initials: string;
  cardColorClass: string;
  cloudinarySrc: string;
};

export function CharacterCardMedia({
  character,
  initials,
  cardColorClass,
  cloudinarySrc,
}: CharacterCardMediaProps) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <div
        className={`flex aspect-square items-center justify-center rounded-2xl ${cardColorClass}`}
      >
        <span className="text-5xl font-black tracking-tight text-kw-dark/60">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-2xl ${cardColorClass}`}
    >
      <Image
        loader={cloudinaryLoader}
        src={cloudinarySrc}
        alt={`${character} character`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        crossOrigin="anonymous"
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
