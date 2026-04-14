const reviews = [
  {
    initials: "JM",
    name: "Jennifer M.",
    city: "San Jose CA",
    quote:
      "My son's birthday party was truly magical, thanks to Kiddo World and the incredible performance of Mickey and Minnie Mouse. The moment they arrived, the children's faces lit up with pure joy.",
    ring: "ring-kw-green",
    bg: "bg-kw-green/15",
  },
  {
    initials: "RL",
    name: "Ricardo L.",
    city: "Fremont CA",
    quote:
      "My son was freaking over the moon that Chase came to his bday party (and even had birthday cake together!). He's been talking about it non stop after the party. Definitely a core memory made.",
    ring: "ring-kw-blue",
    bg: "bg-kw-blue/15",
  },
  {
    initials: "AP",
    name: "Anita P.",
    city: "Santa Clara CA",
    quote:
      "Wonderful experience from start to finish — the team was responsive, punctual, and the kids had an absolute blast. We will definitely book again!",
    ring: "ring-kw-purple",
    bg: "bg-kw-purple/15",
  },
] as const;

function Stars() {
  return (
    <p className="text-kw-yellow text-lg tracking-tight" aria-label="5 out of 5 stars">
      {"★★★★★"}
    </p>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-[var(--kw-section-reviews)] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-kw-red md:text-sm">
          REVIEWS
        </p>
        <h2 className="mt-3 text-center text-3xl font-black tracking-tight text-kw-dark md:text-4xl">
          Families love us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base font-light text-kw-dark/85 md:text-lg">
          Trusted by hundreds of Bay Area families for over a decade.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map(({ initials, name, city, quote, ring, bg }) => (
            <article
              key={initials}
              className="flex flex-col rounded-2xl border border-kw-green/15 bg-white/90 p-6 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-kw-dark/90">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-kw-dark ring-2 ${ring} ${bg}`}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-kw-dark">{name}</p>
                  <p className="text-xs text-kw-dark/65">{city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
