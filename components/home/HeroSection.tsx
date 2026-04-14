import Link from "next/link";

const categoryCards = [
  { label: "Princess Party", bg: "bg-kw-red" },
  { label: "Superhero Party", bg: "bg-kw-blue" },
  { label: "Music & Dance", bg: "bg-kw-green" },
  { label: "Cartoon Favorites", bg: "bg-kw-purple" },
] as const;

export function HeroSection() {
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

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {categoryCards.map(({ label, bg }) => (
            <div
              key={label}
              className={`flex aspect-square flex-col justify-end rounded-2xl p-4 text-white shadow-lg transition duration-300 hover:scale-[1.02] sm:p-5 ${bg}`}
            >
              <p className="text-lg font-bold leading-snug sm:text-xl">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
