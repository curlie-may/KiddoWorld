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
      className={`mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-kw-dark/10 bg-[#f5f5f5] shadow-sm md:rounded-3xl ${className}`}
    >
      <Image
        loader={cloudinaryLoader}
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        className="h-auto w-full object-contain"
        sizes="(max-width: 672px) 100vw, 672px"
        style={{ width: "100%", height: "auto" }}
        priority={priority}
      />
    </div>
  );
}
