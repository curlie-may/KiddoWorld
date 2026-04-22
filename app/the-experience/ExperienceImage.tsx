"use client";

import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinary-loader";

type ExperienceImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ExperienceImage({
  src,
  alt,
  className = "",
  priority = false,
}: ExperienceImageProps) {
  return (
    <div
      className={`relative h-[400px] w-full overflow-hidden rounded-2xl border border-kw-dark/10 bg-white/50 shadow-sm md:rounded-3xl ${className}`}
    >
      <Image
        loader={cloudinaryLoader}
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 896px) 100vw, 896px"
        priority={priority}
      />
    </div>
  );
}
