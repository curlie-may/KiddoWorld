import Link from "next/link";
import { KiddoWorldLogo } from "@/components/layout/KiddoWorldLogo";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
  { href: "/the-experience", label: "The Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-kw-dark/10 bg-kw-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="text-center">
          <KiddoWorldLogo variant="footer" />
          <p className="mt-3 text-sm font-light text-white/80">
            SF Bay Area&apos;s favorite party characters
          </p>
        </div>

        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-white/90"
          aria-label="Footer"
        >
          {footerLinks.map(({ href, label }, i) => (
            <span key={href} className="inline-flex items-center gap-x-4">
              {i > 0 && (
                <span className="hidden text-white/40 sm:inline" aria-hidden>
                  ·
                </span>
              )}
              <Link href={href} className="hover:text-kw-yellow">
                {label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.yelp.com/biz/kiddo-world-san-jose"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-4 py-2 text-sm hover:border-kw-yellow hover:text-kw-yellow"
          >
            Yelp
          </a>
          <a
            href="https://example.com/google-reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-4 py-2 text-sm hover:border-kw-yellow hover:text-kw-yellow"
          >
            Google Reviews
          </a>
          <a
            href="https://www.instagram.com/kidd0w0rld"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-4 py-2 text-sm hover:border-kw-yellow hover:text-kw-yellow"
          >
            Instagram
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-white/55">
          © 2026 Kiddo World · San Jose, CA · (669) 444-0941
        </p>
      </div>
    </footer>
  );
}
