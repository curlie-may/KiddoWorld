"use client";

import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinary-loader";

export function AboutRoxyImage() {
  return (
    <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-kw-blue/10">
      <Image
        loader={cloudinaryLoader}
        src="about-roxy.jpg"
        alt="Roxy, founder of Kiddo World"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 42vw"
        priority
      />
    </div>
  );
}
