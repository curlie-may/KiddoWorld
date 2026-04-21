import Link from "next/link";
import { AboutRoxyImage } from "@/components/about/AboutRoxyImage";

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
           <div className="space-y-4"> 
            <p>Hey there, I&apos;m Roxy, the face behind Kiddo World your
            go-to for unforgettable kids&apos; parties. About 23 years ago, my family and I moved to the U.S. not knowing it 
            would lead us here. Back then, my dad picked up a Craigslist gig to earn some extra money, and that&apos;s where my love 
            for kids&apos; entertainment first began.</p>
            <p>Fast forward over two decades, and we&apos;re still bringing smiles to kids all over the Bay Area. In 2018, after 
            18 years of performing and working events for others, I took over Kiddo World.  What started as a side hustle quickly 
            grew into my full-time passion.</p>  <p>Alongside Kiddo World, I&apos;m also a dedicated office manager at a tech company in the Bay Area, 
            where I plan corporate events and help create thoughtful, engaging workplace environments.  That experience has shaped how I approach
            every detail and how I design experiences that people genuinely enjoy&mdash;whether it&apos;s in a fast-paced tech office or at a child&apos;s
            celebration.</p> <p>Today, with 30 character costumes, Kiddo World is more than just a business, it&apos;s truly a dream come true.  Ready to add 
            a little magic to your next event? We&apos;re here to make it happen. </p>
           </div>
          </blockquote>
          <Link
            href="/order"
            className="mt-8 inline-flex rounded-full bg-kw-red px-8 py-3.5 text-base font-bold text-white transition hover:bg-kw-red/90"
          >
            Book a Party
          </Link>
        </div>

        <AboutRoxyImage />
      </div>
    </section>
  );
}
