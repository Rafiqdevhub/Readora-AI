import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Voice AI Document Learning Platform",
  description:
    "Learn how Readora revolutionizes document interaction with AI-powered voice conversations. Discover our mission to transform passive reading into active learning.",
  keywords: [
    "about readora",
    "AI document platform",
    "voice learning",
    "document AI technology",
    "interactive reading",
  ],
  openGraph: {
    title: "About Readora - Transform How You Learn",
    description:
      "Readora combines voice AI with intelligent content understanding to help you learn faster and understand better.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Readora - Transform How You Learn",
    description:
      "Readora combines voice AI with intelligent content understanding to help you learn faster and understand better.",
  },
};

const highlights = [
  {
    title: "Intelligent Document Processing",
    icon: "01",
    description:
      "Upload PDFs, books, and research papers effortlessly. Our advanced AI parses, segments, and indexes your content with precision, making every piece of information instantly searchable and retrievable.",
    stats: "99.9% accuracy",
  },
  {
    title: "Voice-First Interaction",
    icon: "02",
    description:
      "Engage in natural, real-time AI voice conversations with your documents. Ask questions, explore concepts, and gain deeper understanding through intuitive spoken dialogue.",
    stats: "Real-time responses",
  },
  {
    title: "Smart Learning & Discovery",
    icon: "03",
    description:
      "Your personal AI-powered library that learns from you. Search, organize, and connect ideas across all your documents in one seamless, intelligent workspace.",
    stats: "Unlimited storage",
  },
];

const features = [
  {
    step: "01",
    title: "Upload Your Documents",
    description:
      "Drop any PDF, book, or research paper. We handle the rest with intelligent processing and indexing.",
  },
  {
    step: "02",
    title: "AI Analyzes & Organizes",
    description:
      "Our AI breaks down content into meaningful segments, creating a searchable knowledge base.",
  },
  {
    step: "03",
    title: "Start Talking",
    description:
      "Have natural voice conversations about your content. Ask questions, explore ideas, and learn faster.",
  },
];

const benefits = [
  "10x faster information retrieval",
  "Enhanced comprehension and retention",
  "Natural language understanding",
  "Centralized knowledge management",
  "Private and secure by default",
  "Access anywhere, anytime",
];

const metrics = [
  { label: "Documents Processed", value: "2M+" },
  { label: "Avg. Response Time", value: "<1s" },
  { label: "Learner Satisfaction", value: "98%" },
];

export default function AboutPage() {
  return (
    <>
      <main className="wrapper container">
        <section className="relative overflow-hidden rounded-4xl border border-(--border-medium) bg-[radial-gradient(circle_at_8%_10%,rgba(102,56,32,0.17),transparent_28%),radial-gradient(circle_at_92%_0%,rgba(33,42,59,0.13),transparent_32%),linear-gradient(to_bottom_right,var(--bg-tertiary),white_40%,var(--bg-primary))] px-6 py-10 shadow-soft-lg sm:px-9 md:px-12 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(33,42,59,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,42,59,0.06)_1px,transparent_1px)] bg-size-[42px_42px] opacity-30" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-(--border-medium) bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-(--color-brand)">
                About Readora
              </div>

              <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-(--text-primary) sm:text-5xl md:text-6xl">
                Talk. Learn. Understand.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-secondary) sm:text-lg md:text-xl">
                Readora transforms static documents into interactive voice
                conversations, helping you learn faster, understand deeper, and
                engage with ideas in the most natural way possible.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-(--border-medium) bg-white/70 px-4 py-2 text-sm font-semibold text-(--text-primary)">
                  AI-Powered
                </span>
                <span className="rounded-full border border-(--border-medium) bg-white/70 px-4 py-2 text-sm font-semibold text-(--text-primary)">
                  Voice-First
                </span>
                <span className="rounded-full border border-(--border-medium) bg-white/70 px-4 py-2 text-sm font-semibold text-(--text-primary)">
                  Intelligent Search
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:content-start">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-(--border-subtle) bg-white/75 p-5 backdrop-blur-sm"
                >
                  <p className="text-3xl font-bold text-(--text-primary)">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-(--text-secondary)">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 md:mt-18">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-(--color-brand)">
                Core Advantages
              </p>
              <h2 className="mt-2 text-3xl font-bold text-(--text-primary) md:text-4xl">
                Why teams choose Readora
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-white/80 p-7 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md"
              >
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-(--bg-secondary)/65 blur-2xl transition-transform duration-300 group-hover:scale-125" />
                <div className="relative z-10">
                  <span className="inline-flex rounded-full border border-(--border-medium) bg-(--bg-tertiary) px-3 py-1 text-xs font-bold tracking-[0.12em] text-(--color-brand)">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-(--text-primary)">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-(--text-secondary)">
                    {item.description}
                  </p>
                  <div className="mt-5 inline-flex rounded-full bg-(--color-brand) px-3 py-1 text-xs font-semibold text-white">
                    {item.stats}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-4xl border border-(--border-medium) bg-linear-to-br from-white via-(--bg-tertiary)/60 to-(--bg-primary) p-8 md:mt-20 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-(--color-brand)">
              Simple Workflow
            </p>
            <h2 className="mt-3 text-3xl font-bold text-(--text-primary) md:text-4xl">
              From upload to insight in minutes
            </h2>
            <p className="mt-4 text-(--text-secondary)">
              Get started quickly with a streamlined process designed for focus,
              speed, and real understanding.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.step}
                className="relative rounded-2xl border border-(--border-subtle) bg-white/85 p-6"
              >
                {index < features.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-(--color-brand)/35 lg:block" />
                )}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-brand) text-lg font-bold text-white">
                  {feature.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-(--text-primary)">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-(--text-secondary)">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-stretch md:mt-20">
          <article className="rounded-4xl border border-(--border-medium) bg-white/80 p-8 shadow-soft-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-(--color-brand)">
              Built for modern learners
            </p>
            <h2 className="mt-3 text-3xl font-bold text-(--text-primary) md:text-4xl">
              Everything you need in one focused workspace
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-(--border-subtle) bg-(--bg-tertiary)/55 px-4 py-3"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-(--color-brand) text-sm font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-(--text-primary)">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-4xl border border-(--border-medium) bg-linear-to-b from-(--bg-primary) to-(--bg-secondary) p-8 md:p-10">
            <h2 className="text-3xl font-bold text-(--text-primary)">
              Our Mission
            </h2>
            <p className="mt-5 leading-relaxed text-(--text-secondary)">
              We&apos;re on a mission to revolutionize how people interact with
              documents. By combining advanced voice AI with intelligent content
              understanding, Readora empowers students, professionals,
              researchers, and curious minds to move beyond passive reading.
            </p>
            <p className="mt-4 leading-relaxed text-(--text-secondary)">
              Learning should be{" "}
              <strong className="text-(--text-primary)">conversational</strong>,
              discovery should be{" "}
              <strong className="text-(--text-primary)">effortless</strong>, and
              knowledge should be{" "}
              <strong className="text-(--text-primary)">accessible</strong> to
              everyone.
            </p>

            <div className="mt-8 rounded-2xl border border-(--border-subtle) bg-white/70 p-5">
              <p className="text-sm font-medium text-(--text-secondary)">
                Join thousands of users transforming their learning experience.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-16 mb-10 md:mt-20">
          <div className="relative overflow-hidden rounded-4xl border border-(--border-medium) bg-[linear-gradient(120deg,var(--color-brand)_-10%,#8c5a3f_45%,#b57e61_100%)] px-8 py-10 text-center text-white md:px-12 md:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_88%_80%,rgba(255,255,255,0.18),transparent_28%)]" />
            <div className="relative z-10">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                Any document. Any question. Start your journey with Readora
                today.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
                Experience the future of learning with AI-powered voice
                conversations that make understanding faster, easier, and more
                engaging.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/books/new"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-(--color-brand) transition-colors hover:bg-(--bg-tertiary)"
                >
                  Upload Your First Document
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
