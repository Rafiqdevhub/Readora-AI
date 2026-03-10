"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/subscriptions" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);

  const isLinkActive = (href: string) =>
    pathName === href || (href !== "/" && pathName.startsWith(href));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 pb-3 sm:px-5 sm:pt-4 sm:pb-4">
      <div className="wrapper relative">
        <div className="relative overflow-hidden rounded-2xl border border-(--border-medium) bg-(--bg-primary)/92 backdrop-blur-xl shadow-(--shadow-soft-md)">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(102,56,32,0.14),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(33,42,59,0.12),transparent_34%)]" />

          <div className="navbar-height relative z-10 px-4 sm:px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-lg bg-white/75 p-1.5 shadow-soft-sm">
                <Image
                  src="/assets/logo.png"
                  alt="Readora-AI"
                  width={34}
                  height={24}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="logo-text block!">Readora</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-(--border-subtle) bg-white/65 px-2 py-1 shadow-soft-sm">
              {navItems.map(({ label, href }) => {
                const isActive = isLinkActive(href);

                return (
                  <Link
                    href={href}
                    key={label}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "bg-(--color-brand) text-white shadow-sm"
                        : "text-(--text-primary) hover:bg-(--bg-tertiary)",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="rounded-full border border-(--border-medium) bg-white/75 px-4 py-2 text-sm font-semibold text-(--text-primary) transition-colors hover:bg-(--bg-tertiary)"
                >
                  Sign In
                </Link>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-2 rounded-full border border-(--border-subtle) bg-white/75 px-2 py-1 shadow-soft-sm">
                  <UserButton />
                  {user?.firstName && (
                    <Link
                      href="/subscriptions"
                      className="pr-2 text-sm font-semibold text-(--text-primary) hover:text-(--color-brand)"
                    >
                      {user.firstName}
                    </Link>
                  )}
                </div>
              </SignedIn>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="rounded-full border border-(--border-medium) bg-white/75 px-3 py-1.5 text-sm font-semibold text-(--text-primary)"
                >
                  Sign In
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>

              <button
                onClick={toggleMobileMenu}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border-medium) bg-white/80 text-(--text-primary) transition-colors hover:bg-(--bg-tertiary)"
                aria-label="Toggle menu"
                aria-controls="mobile-nav"
              >
                <span className="sr-only">Open main menu</span>
                <span
                  className={cn(
                    "block h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                    isMobileMenuOpen
                      ? "translate-y-1 rotate-45"
                      : "-translate-y-1",
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                    isMobileMenuOpen
                      ? "-translate-y-1 -rotate-45"
                      : "translate-y-1",
                  )}
                />
              </button>
            </div>
          </div>

          <div
            id="mobile-nav"
            className={cn(
              "lg:hidden relative z-10 overflow-hidden border-t border-(--border-subtle) transition-all duration-300",
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <nav className="p-4 flex flex-col gap-2">
              {navItems.map(({ label, href }) => {
                const isActive = isLinkActive(href);

                return (
                  <Link
                    href={href}
                    key={label}
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-(--color-brand) text-white"
                        : "text-(--text-primary) hover:bg-(--bg-tertiary)",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
              <SignedIn>
                {user?.firstName && (
                  <Link
                    href="/subscriptions"
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-(--text-primary) hover:bg-(--bg-tertiary)"
                  >
                    {user.firstName}
                  </Link>
                )}
              </SignedIn>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
