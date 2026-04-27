const reviews = [
  {
    initials: "CI",
    name: "Carmen I.",
    city: "Sunnyvale, CA",
    quote:
      "We had an amazing experience with Kiddo World for my daughter's 3rd birthday party! Roxana came as Bluey, and she was absolutely fantastic! Roxana's energy and ability to make every child feel included were incredible. Highly recommend for any kid's party!",
    ring: "ring-kw-green",
    bg: "bg-kw-green/15",
  },
  {
    initials: "AP",
    name: "Alina P.",
    city: "Santa Clara, CA",
    quote:
      "Roxy is amazing, I highly recommend her! She is punctual, friendly, flexible and very decently priced! Mickey and Minnie were not just characters; they were truly captivating performers. They engaged with the children on a personal level, making each child feel special.",
    ring: "ring-kw-blue",
    bg: "bg-kw-blue/15",
  },
  {
    initials: "BM",
    name: "Bee M.",
    city: "Newark, CA",
    quote:
      "Thank you Curious George (Roxy) for making my son's dream come true! Roxy arrived early to prepare, and she was the life of the party! The kids loved playing limbo, basketball, Velcro darts, parachute, tunnel, and more. My son had the absolute time of his life.",
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
        <p className="text-center text-lg font-bold uppercase tracking-[0.2em] text-kw-red md:text-base">
          REVIEWS
        </p>
        <h2 className="mt-3 text-center text-2xl font-black tracking-tight text-kw-dark md:text-3xl">
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
              <blockquote className="mt-4 flex-1 text-base italic leading-relaxed text-kw-dark/90">
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
