"use client";

import Link from "next/link";
import { useState } from "react";
import { KiddoWorldLogo } from "@/components/layout/KiddoWorldLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
  { href: "/the-experience", label: "The Experience" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-kw-dark/10 bg-kw-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <KiddoWorldLogo variant="header" />
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-kw-dark md:flex"
          aria-label="Main"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-kw-red"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/order"
            className="rounded-full bg-kw-red px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-kw-red/90"
          >
            Book a Party
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-kw-dark/15 p-2 text-kw-dark md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-kw-dark/10 bg-kw-cream px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3 text-base font-medium" aria-label="Mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-1 text-kw-dark hover:text-kw-red"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/order"
              className="mt-2 rounded-full bg-kw-red px-4 py-3 text-center font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Book a Party
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
