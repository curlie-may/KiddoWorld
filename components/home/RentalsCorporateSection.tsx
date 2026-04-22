import Link from "next/link";

export function RentalsCorporateSection() {
  return (
    <section className="bg-kw-cream px-4 pt-6 pb-14 md:px-6 md:pt-8 md:pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-base font-light leading-relaxed text-kw-dark/85 md:text-lg">
          Kiddo World also offers character costume rentals and corporate event
          entertainment. Please use the{" "}
          <Link href="/contact" className="font-medium text-kw-red hover:underline">
            Contact Form
          </Link>{" "}
          for more information.
        </p>
      </div>
    </section>
  );
}
