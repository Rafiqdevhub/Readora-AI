import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Readora",
  description:
    "Have questions about Readora? Need help with your account? Contact our support team and we'll respond within 24 hours.",
  keywords: [
    "contact readora",
    "customer support",
    "help center",
    "get in touch",
    "support",
  ],
  openGraph: {
    title: "Contact Readora - We're Here to Help",
    description:
      "Get in touch with our team for questions, support, or feedback about your AI voice learning experience.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="wrapper container">
        <section className="relative overflow-hidden rounded-4xl border border-(--border-medium) bg-[radial-gradient(circle_at_8%_14%,rgba(102,56,32,0.16),transparent_32%),radial-gradient(circle_at_92%_6%,rgba(33,42,59,0.12),transparent_30%),linear-gradient(to_bottom_right,var(--bg-tertiary),white_42%,var(--bg-primary))] px-6 py-10 shadow-soft-lg md:px-12 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(33,42,59,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,42,59,0.05)_1px,transparent_1px)] bg-size-[38px_38px] opacity-35" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-(--border-medium) bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--color-brand)">
                Get in Touch
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-(--text-primary) md:text-6xl">
                Let&apos;s Start a Conversation
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-(--text-secondary) md:text-xl">
                Have questions about Readora? Need help with your account? Or
                just want to share feedback? Drop us a message and we&apos;ll
                respond as soon as possible.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <article className="rounded-2xl border border-(--border-subtle) bg-white/75 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-(--text-primary)">24h</p>
                <p className="mt-1 text-sm font-medium text-(--text-secondary)">
                  Response Promise
                </p>
              </article>
              <article className="rounded-2xl border border-(--border-subtle) bg-white/75 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-(--text-primary)">7d</p>
                <p className="mt-1 text-sm font-medium text-(--text-secondary)">
                  Weekly Support
                </p>
              </article>
              <article className="rounded-2xl border border-(--border-subtle) bg-white/75 p-5 backdrop-blur-sm">
                <p className="text-3xl font-bold text-(--text-primary)">1:1</p>
                <p className="mt-1 text-sm font-medium text-(--text-secondary)">
                  Human Assistance
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="group rounded-3xl border border-(--border-subtle) bg-white/80 p-6 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border-medium) bg-(--bg-tertiary) text-(--color-brand)">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-(--text-primary) font-serif">
                Email Support
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">
              rafkhan9323@gmail.com
            </p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              Best for account questions and product feedback.
            </p>
          </article>

          <article className="group rounded-3xl border border-(--border-subtle) bg-white/80 p-6 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border-medium) bg-(--bg-tertiary) text-(--color-brand)">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-(--text-primary) font-serif">
                Location
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">
              KPITB Tower, 2nd Floor, Chamkani Peshawer, Pakistan
            </p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              For partnerships and in-person collaboration requests.
            </p>
          </article>

          <article className="group rounded-3xl border border-(--border-subtle) bg-white/80 p-6 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border-medium) bg-(--bg-tertiary) text-(--color-brand)">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-(--text-primary) font-serif">
                Response Time
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">Within 24 hours</p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              Most replies arrive the same business day.
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-4xl border border-(--border-medium) bg-[linear-gradient(to_bottom,var(--bg-primary),white)] p-2 md:p-3">
          <div className="rounded-[1.55rem] border border-(--border-subtle) bg-white/85 p-5 md:p-8">
            <div className="mb-2 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-(--color-brand)">
                Message Us
              </p>
              <h2 className="mt-2 text-2xl font-bold text-(--text-primary) md:text-3xl">
                Tell us what you need, and we&apos;ll help quickly
              </h2>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
