import Link from "next/link";
import { ExperienceImage } from "./ExperienceImage";

const pricingRows = [
  { duration: "1 Hour", one: "$215", two: "$335", three: "$480" },
  { duration: "1½ Hours", one: "$265", two: "$435", three: "$550" },
  { duration: "2 Hours", one: "$335", two: "$510", three: "contact" },
  { duration: "2½ Hours", one: "$405", two: "$600", three: "contact" },
  { duration: "3 Hours", one: "$475", two: "$880", three: "contact" },
] as const;

function PriceCell({ value }: { value: string }) {
  if (value === "contact") {
    return (
      <Link
        href="/contact"
        className="font-medium text-kw-red hover:underline"
      >
        Contact Us
      </Link>
    );
  }
  return <span className="text-kw-dark">{value}</span>;
}

export default function TheExperiencePage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-lg font-bold uppercase tracking-[0.2em] text-kw-red">
          THE EXPERIENCE
        </p>
        <h1 className="mt-3 text-center text-3xl font-black tracking-tight text-kw-dark md:text-5xl">
          A party your child will never forget
        </h1>

        <ExperienceImage
          className="mt-8"
          src="party-parachute.jpg"
          alt="Parachute play at a Kiddo World party"
          priority
        />

        <h2 className="mt-12 text-2xl font-black tracking-tight text-kw-dark md:text-3xl">
          What to Expect
        </h2>
        <div className="mt-4 space-y-4 text-base font-light leading-relaxed text-kw-dark/90 md:text-lg">
          <p>
            Our costumed character parties bring an interactive music, games
            &amp; dance experience designed to make your child&apos;s birthday
            truly unforgettable. Perfect for kids of all ages, the show is
            tailored to a younger audience&apos;s attention span and filled with
            familiar music, engaging games, and nonstop fun.
          </p>
          <p>
            Whether kids prefer to sit and watch or jump right in and play, the
            experience is designed for everyone to enjoy. Our characters arrive
            with a complete party package, including a portable audio system
            with a high-energy party soundtrack, pre-recorded instructions that
            guide the kids through activities, and plenty of music, games, and
            party favors.
          </p>
          <p>
            Children will enjoy classic favorites like the march, limbo, &ldquo;If
            You&apos;re Happy and You Know It,&rdquo; Hokey Pokey, tunnel games,
            pass the bean bag, basketball toss, sticky-ball dart board, and
            parachute play. Every moment is interactive, energetic, and designed
            to keep the party moving and fun from start to finish.
          </p>
        </div>

        <ExperienceImage
          className="mt-10"
          src="party-limbo.jpg"
          alt="Limbo at a Kiddo World party"
        />

        <h2 className="mt-14 text-2xl font-black tracking-tight text-kw-dark md:text-3xl">
          Pricing
        </h2>
        <p className="mt-3 text-base font-light text-kw-dark/85 md:text-lg">
          Simple, transparent pricing. Travel fees apply to parties held
          outside a 25-mile radius of San Jose.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-kw-dark/10 bg-white shadow-sm">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm md:text-base">
            <thead>
              <tr className="bg-kw-red/15">
                <th className="border-b border-kw-dark/10 px-3 py-3 font-bold text-kw-dark md:px-4">
                  Duration
                </th>
                <th className="border-b border-kw-dark/10 px-3 py-3 font-bold text-kw-dark md:px-4">
                  One Character
                </th>
                <th className="border-b border-kw-dark/10 px-3 py-3 font-bold text-kw-dark md:px-4">
                  Two Characters
                </th>
                <th className="border-b border-kw-dark/10 px-3 py-3 font-bold text-kw-dark md:px-4">
                  Three Characters
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row, i) => (
                <tr
                  key={row.duration}
                  className={i % 2 === 0 ? "bg-white" : "bg-kw-blue/5"}
                >
                  <td className="border-b border-kw-dark/10 px-3 py-3 font-medium text-kw-dark md:px-4">
                    {row.duration}
                  </td>
                  <td className="border-b border-kw-dark/10 px-3 py-3 text-kw-dark md:px-4">
                    {row.one}
                  </td>
                  <td className="border-b border-kw-dark/10 px-3 py-3 text-kw-dark md:px-4">
                    {row.two}
                  </td>
                  <td className="border-b border-kw-dark/10 px-3 py-3 text-kw-dark md:px-4">
                    <PriceCell value={row.three} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm font-light text-kw-dark/70">
          *From our location in San Jose, travel fees are applied to parties held
          outside a 25-mile radius.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/order"
            className="inline-flex items-center justify-center rounded-full bg-kw-red px-8 py-3.5 text-center text-base font-bold text-white transition hover:bg-kw-red/90"
          >
            Book a Party
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-kw-red bg-transparent px-8 py-3.5 text-center text-base font-bold text-kw-red transition hover:bg-kw-red/5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
