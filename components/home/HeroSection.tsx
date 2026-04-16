"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export function HeroSection() {
  const slides = useMemo(
    () => [
      { label: "Party Photo Placeholder 1", bg: "bg-kw-red/25" },
      { label: "Party Photo Placeholder 2", bg: "bg-kw-blue/25" },
      { label: "Party Photo Placeholder 3", bg: "bg-kw-green/25" },
      { label: "Party Photo Placeholder 4", bg: "bg-kw-purple/25" },
      { label: "Party Photo Placeholder 5", bg: "bg-kw-yellow/35" },
    ],
    [],
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ms = 3600;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % slides.length);
    }, ms);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <p className="inline-flex items-center gap-1 rounded-full border border-kw-yellow/50 bg-kw-yellow/35 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-kw-dark md:text-sm">
            <span className="text-kw-yellow" aria-hidden>
              ✦
            </span>
            SF Bay Area&apos;s #1 Party Characters
          </p>

          <h1 className="mt-6 font-black leading-[1.05] tracking-tight text-kw-dark text-[clamp(2.25rem,5vw,3.25rem)] md:text-[52px]">
            Make Their Birthday{" "}
            <span className="text-kw-red">Magical</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-kw-dark/90 md:text-xl">
            Professional costumed character parties with music, games, dancing,
            and party favors — creating memories that last a lifetime.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full bg-kw-red px-8 py-3.5 text-center text-base font-bold text-white shadow-md transition hover:bg-kw-red/90"
            >
              Book Your Party
            </Link>
            <Link
              href="/characters"
              className="inline-flex items-center justify-center rounded-full border-2 border-kw-red bg-transparent px-8 py-3.5 text-center text-base font-bold text-kw-red transition hover:bg-kw-red/5"
            >
              View Characters
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-kw-dark/10 bg-white/70 shadow-lg">
          <div className="relative aspect-[4/3] w-full">
            {slides.map(({ label, bg }, idx) => (
            <div
              key={label}
              className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-700 ${bg} ${
                idx === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="rounded-3xl border border-dashed border-kw-dark/20 bg-white/60 px-6 py-6 text-center backdrop-blur">
                <p className="text-xl font-black tracking-tight text-kw-dark/70">
                  {label}
                </p>
                <p className="mt-2 text-sm text-kw-dark/60">
                  Auto-playing slideshow (photos coming soon)
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
