import Link from "next/link";
import { characters } from "@/lib/site-data";

const cardColors = [
  "bg-kw-red/10",
  "bg-kw-orange/10",
  "bg-kw-yellow/20",
  "bg-kw-green/10",
  "bg-kw-blue/10",
  "bg-kw-purple/10",
] as const;

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function CharactersPage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-kw-red md:text-sm">
          CHARACTERS
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
          Find the perfect character for your party
        </h1>
        <p className="mt-4 max-w-2xl text-base font-light text-kw-dark/80 md:text-lg">
          We have 20+ costumes. Browse our roster and pick your child&apos;s
          favorite.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {characters.map((character, index) => (
            <article
              key={character}
              className="rounded-3xl border border-kw-dark/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:scale-[1.01]"
            >
              <div
                className={`flex aspect-square items-center justify-center rounded-2xl ${cardColors[index % cardColors.length]}`}
              >
                <span className="text-5xl font-black tracking-tight text-kw-dark/60">
                  {getInitials(character)}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-kw-dark">{character}</h2>
              {character === "Easter Bunny" && (
                <p className="mt-1 text-sm text-kw-dark/55">Contact for pricing</p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full border-2 border-kw-red px-8 py-3 text-base font-bold text-kw-red transition hover:bg-kw-red/5"
          >
            Don&apos;t see your character? Contact us.
          </Link>
        </div>
      </div>
    </section>
  );
}
