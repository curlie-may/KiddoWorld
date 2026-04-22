"use client";

import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinary-loader";

type KiddoWorldLogoProps = {
  variant: "header" | "footer";
};

export function KiddoWorldLogo({ variant }: KiddoWorldLogoProps) {
  const className =
    variant === "header"
      ? "h-8 w-auto max-h-9 md:h-9"
      : "mx-auto h-12 w-auto md:h-14";

  return (
    <Image
      loader={cloudinaryLoader}
      src="kiddo-world-logo.jpg"
      alt="Kiddo World"
      width={220}
      height={48}
      className={className}
      priority={variant === "header"}
    />
  );
}
