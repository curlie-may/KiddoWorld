import Link from "next/link";

export function CharacterPartyFeatureSection() {
  return (
    <section className="bg-white px-4 pt-14 pb-6 md:px-6 md:pt-20 md:pb-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-center text-lg font-bold uppercase tracking-[0.2em] text-kw-red">
          CHARACTER PARTY
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-kw-dark md:text-3xl">
          The ultimate birthday party experience
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base font-light leading-relaxed text-kw-dark/85 md:text-lg">
          Our costumed character parties bring music, games, and dancing to your
          child&apos;s birthday. Your child&apos;s favorite character arrives
          ready to entertain up to 30 kids with a full party package including
          soundtrack, games, and party favors.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/the-experience"
            className="inline-flex items-center justify-center rounded-full border-2 border-kw-red bg-transparent px-8 py-3.5 text-center text-base font-bold text-kw-red transition hover:bg-kw-red/5"
          >
            Learn More
          </Link>
          <Link
            href="/order"
            className="inline-flex items-center justify-center rounded-full bg-kw-red px-8 py-3.5 text-center text-base font-bold text-white shadow-md transition hover:bg-kw-red/90"
          >
            Book a Party
          </Link>
        </div>
      </div>
    </section>
  );
}
