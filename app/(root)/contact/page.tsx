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
        {/* Hero Section */}
        <section className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft-sm">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Get in Touch
          </p>
          <h1 className="page-title-xl mb-4">
            Let&apos;s Start a Conversation
          </h1>
          <p className="subtitle max-w-3xl">
            Have questions about Readora-AI? Need help with your account? Or
            just want to share feedback? Drop us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-soft-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-(--accent-light) flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-(--color-brand)"
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
              <h2 className="text-xl font-semibold text-black font-serif">
                Email
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">
              rafkhan9323@gmail.com
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-soft-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-(--accent-light) flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-(--color-brand)"
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
              <h2 className="text-xl font-semibold text-black font-serif">
                Location
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">
              KPITB Tower, 2nd Floor, Chamkani Peshawer, Pakistan
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-soft-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-(--accent-light) flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-(--color-brand)"
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
              <h2 className="text-xl font-semibold text-black font-serif">
                Response Time
              </h2>
            </div>
            <p className="text-(--text-secondary) leading-7">Within 24 hours</p>
          </article>
        </section>
        <ContactForm />
      </main>
    </>
  );
}
