import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-kw-red md:text-sm">
          PRICING
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-5 text-base font-light leading-8 text-kw-dark/80 md:text-lg">
          Pricing details coming soon. Contact us for a custom quote.
        </p>

        <Link
          href="/order"
          className="mt-10 inline-flex rounded-full bg-kw-red px-8 py-3.5 text-base font-bold text-white transition hover:bg-kw-red/90"
        >
          Book a Party
        </Link>
      </div>
    </section>
  );
}

