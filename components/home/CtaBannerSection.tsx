import Link from "next/link";

export function CtaBannerSection() {
  return (
    <section className="bg-kw-red px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
          Ready to make their birthday magical?
        </h2>
        <p className="mt-4 text-base font-light text-white/90 md:text-lg">
          Serving San Jose and the greater SF Bay Area.
        </p>
        <Link
          href="/order"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-3.5 text-base font-bold text-kw-red shadow-lg transition hover:bg-white/95"
        >
          Book a Party
        </Link>
      </div>
    </section>
  );
}
