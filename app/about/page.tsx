import Link from "next/link";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

export default function AboutPage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kw-red md:text-sm">
            OUR STORY
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
            Meet Roxy
          </h1>
          <blockquote className="mt-6 rounded-3xl bg-white p-6 text-base leading-8 text-kw-dark/85 shadow-sm md:p-8 md:text-lg">
            &ldquo;Hey there, I&apos;m Roxy, the mastermind behind Kiddo World, your
            go-to for epic kids&apos; parties. Picture this: two decades ago, my
            family and I landed in the USA, unknowingly setting the stage for a
            wild ride. Back in the day, my Dad, on the hunt for extra cash,
            stumbled upon a Craigslist gig that sparked my joy-filled journey
            into kids&apos; parties. Fast forward 20 years, and we&apos;re still cruising
            the Bay Area, delivering smiles to kiddos. In 2018, I took the helm
            of Kiddo World after spending 18 years rocking stages for others.
            Little did I know, what started as a side hustle would become my
            full-time gig. Now with over 20 character costumes, Kiddo World
            isn&apos;t just a business — it&apos;s my dream come true. Ready to sprinkle
            some magic at your event? We are here to make that magic come
            alive!&rdquo;
          </blockquote>
          <Link
            href="/order"
            className="mt-8 inline-flex rounded-full bg-kw-red px-8 py-3.5 text-base font-bold text-white transition hover:bg-kw-red/90"
          >
            Book a Party
          </Link>
        </div>

        <PlaceholderBox
          label="Roxy Photo Placeholder"
          initials="R"
          className="min-h-[420px] bg-kw-blue/10"
        />
      </div>
    </section>
  );
}
