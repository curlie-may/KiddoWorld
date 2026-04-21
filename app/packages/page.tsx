import Link from "next/link";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";
import { packages } from "@/lib/site-data";

export default function PackagesPage() {
  return (
    <section className="bg-kw-cream px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-kw-red md:text-sm">
          PACKAGES
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-kw-dark md:text-5xl">
          Everything you need for an unforgettable party
        </h1>

        <div className="mt-12 space-y-8">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className="grid gap-6 rounded-3xl bg-white p-6 shadow-sm md:p-8 lg:grid-cols-2 lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <PlaceholderBox
                  label={`${pkg.name} Image Placeholder`}
                  className={`min-h-[280px] ${pkg.accentClass}`}
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-black tracking-tight text-kw-dark">
                  {pkg.name}
                </h2>
                <p className="mt-4 text-base leading-8 text-kw-dark/80 md:text-lg">
                  {pkg.description}
                </p>
                {pkg.name === "Character-Themed Party" && (
                  <div className="mt-6">
                    <PlaceholderBox
                      label="Video goes here"
                      className="min-h-[200px] bg-kw-dark/5"
                      initials="▶"
                    />
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {pkg.name === "Character-Themed Party" && (
                    <Link
                      href="/pricing"
                      className="inline-flex items-center justify-center rounded-full border-2 border-kw-red px-7 py-3 text-base font-bold text-kw-red transition hover:bg-kw-red/5"
                    >
                      Learn More
                    </Link>
                  )}
                  {pkg.name === "Character-Themed Party" ? (
                    <Link
                      href="/order"
                      className="inline-flex items-center justify-center rounded-full bg-kw-red px-7 py-3 text-base font-bold text-white transition hover:bg-kw-red/90"
                    >
                      Book This Package
                    </Link>
                  ) : pkg.name === "Costume Rental" ? (
                    <Link
                      href="/order-rental"
                      className="inline-flex items-center justify-center rounded-full bg-kw-red px-7 py-3 text-base font-bold text-white transition hover:bg-kw-red/90"
                    >
                      Get a Quote
                    </Link>
                  ) : (
                    <Link
                      href="/order-corporate"
                      className="inline-flex items-center justify-center rounded-full bg-kw-red px-7 py-3 text-base font-bold text-white transition hover:bg-kw-red/90"
                    >
                      Get a Quote
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
