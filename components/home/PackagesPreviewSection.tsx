import Link from "next/link";
import { Building2, Shirt, Star } from "lucide-react";

const cards = [
  {
    icon: Star,
    title: "Character-Themed Party",
    body: "Let Kiddo World provide the character fun and games for your party!",
  },
  {
    icon: Shirt,
    title: "Costume Rental",
    body: "Choose from a variety of costumes to host your own themed party!",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    body: "Add fun to your company's event with a costumed character to entertain the kids...and adults!",
  },
] as const;

export function PackagesPreviewSection() {
  return (
    <section className="bg-white px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-kw-red md:text-sm">
          PACKAGES
        </p>
        <h2 className="mt-3 text-center text-3xl font-black tracking-tight text-kw-dark md:text-4xl">
          Everything you need for an unforgettable party
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <Link
              key={title}
              href="/packages"
              className="group flex flex-col rounded-2xl border border-kw-dark/10 bg-kw-cream/50 p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-kw-red/30 hover:shadow-md"
            >
              <Icon className="h-10 w-10 text-kw-red" aria-hidden />
              <h3 className="mt-4 text-xl font-bold text-kw-dark group-hover:text-kw-red">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-kw-dark/80">
                {body}
              </p>
              <span className="mt-6 text-sm font-bold text-kw-red">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
