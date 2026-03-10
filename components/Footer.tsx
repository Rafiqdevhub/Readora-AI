"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/subscriptions" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Support", href: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-(--border-medium) bg-(--bg-primary)">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(102,56,32,0.12),transparent_32%),radial-gradient(circle_at_82%_14%,rgba(33,42,59,0.12),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_50%)]" />

      <div className="wrapper relative z-10 py-14 md:py-16">
        <div className="rounded-3xl border border-(--border-subtle) bg-white/70 p-6 shadow-soft-md backdrop-blur-sm md:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-6 lg:col-span-5">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="rounded-lg bg-white p-1.5 shadow-soft-sm">
                  <Image
                    src="/assets/logo.png"
                    alt="Readora"
                    width={36}
                    height={24}
                  />
                </div>
                <span className="logo-text block!">Readora</span>
              </Link>

              <p className="mt-4 max-w-md text-sm leading-6 text-(--text-secondary) md:text-base">
                A warm reading studio where your documents become expressive
                conversations through AI voices.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-(--border-medium) bg-(--bg-tertiary) px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-(--color-brand)">
                  Voice-first
                </span>
                <span className="rounded-full border border-(--border-medium) bg-(--bg-tertiary) px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-(--color-brand)">
                  Summaries
                </span>
                <span className="rounded-full border border-(--border-medium) bg-(--bg-tertiary) px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-(--color-brand)">
                  Study Flow
                </span>
              </div>
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <h3 className="font-serif text-lg font-semibold text-(--text-primary)">
                Explore
              </h3>
              <nav className="mt-4 flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--color-brand)"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="md:col-span-3 lg:col-span-2">
              <h3 className="font-serif text-lg font-semibold text-(--text-primary)">
                Legal
              </h3>
              <nav className="mt-4 flex flex-col gap-2.5">
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm font-medium text-(--text-secondary) transition-colors hover:text-(--color-brand)"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="md:col-span-12 lg:col-span-2">
              <h3 className="font-serif text-lg font-semibold text-(--text-primary)">
                Get Started
              </h3>
              <p className="mt-4 text-sm leading-6 text-(--text-secondary)">
                Turn your next PDF into a guided audio experience.
              </p>
              <Link
                href="/books/new"
                className="mt-5 inline-flex rounded-full bg-(--color-brand) px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-(--color-brand-hover)"
              >
                Upload Now
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-(--border-subtle) pt-6">
            <p className="text-center text-sm text-(--text-secondary)">
              &copy; {currentYear} Readora. Crafted for readers, students, and
              storytellers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
