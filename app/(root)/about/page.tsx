import type { Metadata } from "next";
import Footer from "@/components/Footer";

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
    title: "🎯 Intelligent Document Processing",
    description:
      "Upload PDFs, books, and research papers effortlessly. Our advanced AI parses, segments, and indexes your content with precision, making every piece of information instantly searchable and retrievable.",
    stats: "99.9% accuracy",
  },
  {
    title: "🎤 Voice-First Interaction",
    description:
      "Engage in natural, real-time AI voice conversations with your documents. Ask questions, explore concepts, and gain deeper understanding through intuitive spoken dialogue.",
    stats: "Real-time responses",
  },
  {
    title: "🚀 Smart Learning & Discovery",
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
  "⚡ 10x faster information retrieval",
  "🧠 Enhanced comprehension and retention",
  "💬 Natural language understanding",
  "📚 Centralized knowledge management",
  "🔒 Private and secure by default",
  "🌐 Access anywhere, anytime",
];

export default function AboutPage() {
  return (
    <>
      <main className="wrapper container">
        {/* Hero Section */}
        <section className="relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/20 p-8 md:p-14 shadow-lg overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

          <div className="relative z-10">
            <div className="inline-block rounded-full px-4 py-1.5 bg-primary/10 border border-primary/20 mb-4">
              <p className="text-sm font-semibold text-primary">
                About Readora
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Talk. Learn. Understand.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              Readora transforms static documents into interactive voice
              conversations, empowering you to learn faster, understand deeper,
              and engage with ideas in the most natural way possible — through
              conversation.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium">Voice-First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-sm font-medium">Intelligent Search</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mt-12 md:mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose Readora?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of document interaction with cutting-edge AI
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-xs font-semibold">
                    {item.stats}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-16 md:mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-xl font-bold shadow-lg mb-4">
                    {feature.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mt-16 md:mt-20 rounded-3xl border border-border bg-gradient-to-br from-muted/30 to-muted/10 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Built for Modern Learners
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to transform how you interact with information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl bg-card border border-border p-4 hover:bg-muted/50 transition-colors"
              >
                <span className="text-2xl">{benefit.split(" ")[0]}</span>
                <span className="font-medium">{benefit.substring(3)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mt-16 md:mt-20 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We&apos;re on a mission to revolutionize how people interact with
              documents. By combining advanced voice AI with intelligent content
              understanding, Readora empowers students, professionals,
              researchers, and curious minds to move beyond passive reading.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe learning should be{" "}
              <span className="font-semibold text-foreground">
                conversational
              </span>
              , discovery should be{" "}
              <span className="font-semibold text-foreground">effortless</span>,
              and knowledge should be{" "}
              <span className="font-semibold text-foreground">accessible</span>{" "}
              to everyone.
            </p>
            <div className="mt-8 inline-block rounded-2xl bg-card border border-border px-6 py-3">
              <p className="text-sm font-medium text-muted-foreground">
                Join thousands of users transforming their learning experience
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 md:mt-20 mb-10 text-center">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-primary/5 to-card p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Any document. Any question. Start your journey with Readora today.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Experience the future of learning with AI-powered voice
              conversations that make understanding faster, easier, and more
              engaging than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-card border-2 border-border px-8 py-4 text-lg font-semibold hover:bg-muted transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
