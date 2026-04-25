import Link from "next/link";
import { ExperienceImage } from "./ExperienceImage";
import { partyPricing } from "@/lib/site-data";

function PriceCell({ value }: { value: number | null }) {
  if (value === null) {
    return (
      <Link
        href="/contact"
        className="font-medium text-kw-red hover:underline"
      >
        Contact Us
      </Link>
    );
  }
  return <span className="text-kw-dark">${value}</span>;
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
        <div className="mt-4 space-y-5 text-base font-light leading-relaxed text-kw-dark/90 md:text-lg">
          <p>
            Our costumed character parties bring an interactive music, games
            &amp; dance experience designed to make your child&apos;s birthday
            truly unforgettable. Perfect for kids of all ages &mdash; whether they
            prefer to sit and watch or jump right in and play.
          </p>
          <div>
            <p className="mb-2 font-bold text-kw-dark/90">What&apos;s included:</p>
            <ul className="ml-1 list-outside list-disc space-y-1.5 pl-5">
              <li>Portable audio system with high-energy party soundtrack</li>
              <li>Pre-recorded instructions that guide kids through activities</li>
              <li>Party games and party favors for all kids</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-bold text-kw-dark/90">Activities kids love:</p>
            <ul className="ml-1 list-outside list-disc space-y-1.5 pl-5">
              <li>March, Limbo, Hokey Pokey</li>
              <li>Tunnel games, pass the bean bag</li>
              <li>Basketball toss, sticky-ball dart board</li>
              <li>Parachute play</li>
              <li>
                &ldquo;If You&rsquo;re Happy and You Know It&rdquo; and more
              </li>
            </ul>
          </div>
          <p>
            Every moment is interactive, energetic, and designed to keep the
            party moving and fun from start to finish.
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
              {Object.entries(partyPricing).map(([duration, prices], i) => (
                <tr
                  key={duration}
                  className={i % 2 === 0 ? "bg-white" : "bg-kw-blue/5"}
                >
                  <td className="border-b border-kw-dark/10 px-3 py-3 font-medium text-kw-dark md:px-4">
                    {duration}
                  </td>
                  <td className="border-b border-kw-dark/10 px-3 py-3 text-kw-dark md:px-4">
                    <PriceCell value={prices[1]} />
                  </td>
                  <td className="border-b border-kw-dark/10 px-3 py-3 text-kw-dark md:px-4">
                    <PriceCell value={prices[2]} />
                  </td>
                  <td className="border-b border-kw-dark/10 px-3 py-3 text-kw-dark md:px-4">
                    <PriceCell value={prices[3]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
