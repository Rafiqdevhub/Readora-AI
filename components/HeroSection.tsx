"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { useSubscription } from "@/hooks/userSubscription";
import { getUserBookCount } from "@/lib/actions/book.actions";
import {
  ArrowRight,
  AudioLines,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Layers,
  Sparkles,
  Upload,
  UserPlus,
  WandSparkles,
} from "lucide-react";

const HeroSection = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { limits } = useSubscription();
  const [isChecking, setIsChecking] = useState(false);

  const handleUploadClick = async () => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }
    setIsChecking(true);
    try {
      const count = await getUserBookCount();
      if (count >= limits.maxBooks) {
        router.push("/subscriptions");
      } else {
        router.push("/books/new");
      }
    } finally {
      setIsChecking(false);
    }
  };

  const features = [
    { icon: AudioLines, label: "Natural Voice Chat" },
    { icon: BookOpen, label: "Books, PDFs, Notes" },
    { icon: Brain, label: "Context-Aware Answers" },
  ];

  const journey = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up in seconds — no credit card required.",
      icon: UserPlus,
    },
    {
      number: "02",
      title: "Upload Your Material",
      description: "Drop any book, PDF, or study notes in one place.",
      icon: Upload,
    },
    {
      number: "03",
      title: "AI Maps The Knowledge",
      description: "We segment, index, and understand every chapter fast.",
      icon: Layers,
    },
    {
      number: "04",
      title: "Talk And Learn",
      description: "Ask with your voice and receive clear, cited answers.",
      icon: WandSparkles,
    },
  ];

  const benefits = [
    {
      icon: Clock3,
      title: "Faster Study Sessions",
      description: "Find the exact concept you need in seconds, not hours.",
    },
    {
      icon: Sparkles,
      title: "Natural Learning Flow",
      description: "Converse naturally instead of scrolling endless pages.",
    },
    {
      icon: CheckCircle2,
      title: "Reliable Explanations",
      description: "Answers stay grounded in your own uploaded material.",
    },
  ];

  return (
    <section className="wrapper relative mb-16 overflow-hidden pt-8 sm:pt-10 md:mb-20 md:pt-12">
      <div className="hero-glow hero-glow-main pointer-events-none absolute -top-112 left-1/2 h-168 w-2xl -translate-x-1/2 rounded-full bg-linear-to-b from-[#ffe4b3] via-[#ffe9c8]/70 to-transparent blur-3xl" />
      <div className="hero-glow hero-glow-left pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#7a9fd6]/20 blur-3xl" />
      <div className="hero-glow hero-glow-right pointer-events-none absolute -right-28 bottom-10 h-64 w-64 rounded-full bg-[#f5c27a]/30 blur-3xl" />

      <div className="hero-shell relative z-10 rounded-[2rem] border border-[#edd8b4] bg-linear-to-br from-[#fffdf8] via-[#fff6e8] to-[#edf4ff] p-4 shadow-soft-lg sm:p-6 lg:p-8">
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-70 [background:radial-gradient(circle_at_22%_22%,rgba(102,56,32,0.13),transparent_48%),radial-gradient(circle_at_78%_14%,rgba(52,84,122,0.2),transparent_42%)]" />

        <div className="hero-badge-wrap relative mb-7 flex justify-center lg:mb-9">
          <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-[#e7cfab] bg-white/90 px-4 py-2 shadow-soft-sm backdrop-blur-sm sm:px-5">
            <Sparkles className="h-4 w-4 text-[#663820]" />
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#663820] sm:text-xs">
              STUDY STUDIO FOR VOICE-FIRST LEARNING
            </span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="hero-title max-w-3xl text-[2.15rem] font-serif font-semibold leading-[1.02] tracking-tight text-[#1d2738] sm:text-5xl lg:text-[4.1rem]">
              Your Reading Stack,
              <span className="block bg-linear-to-r from-[#3d2518] via-[#35506e] to-[#0f4f63] bg-clip-text text-transparent">
                Remixed Into Live Dialogue
              </span>
            </h1>

            <p className="hero-copy mt-5 max-w-2xl text-[15px] leading-relaxed text-[#3f5168] sm:mt-6 sm:text-lg">
              Readora transforms books and notes into an intelligent voice
              tutor. Upload once, ask naturally, and get precise responses
              grounded in your own pages.
            </p>

            <div className="hero-features mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const delayClass =
                  index === 0
                    ? "[animation-delay:260ms]"
                    : index === 1
                      ? "[animation-delay:350ms]"
                      : "[animation-delay:440ms]";
                return (
                  <div
                    key={feature.label}
                    className={`hero-chip ${delayClass} group flex items-center gap-2 rounded-full border border-[#e8d5b4] bg-white/95 px-3.5 py-2 shadow-soft-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#34547a] hover:shadow-soft`}
                  >
                    <Icon className="h-4 w-4 text-[#663820] transition-colors duration-300 group-hover:text-[#34547a]" />
                    <span className="text-xs font-medium text-[#1d2738] sm:text-sm">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="hero-actions mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <button
                onClick={handleUploadClick}
                disabled={isChecking}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#1f2d44] to-[#34547a] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.015] hover:shadow-soft-lg active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-7 sm:text-base"
              >
                {isChecking ? (
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  <Upload className="h-5 w-5 shrink-0" />
                )}
                <span>{isChecking ? "Checking..." : "Upload PDF / Book"}</span>
                {!isChecking && (
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              <button
                type="button"
                onClick={() => router.push("/about")}
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#d6c2a1] bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#1f2d44] transition-all duration-300 hover:border-[#34547a] hover:text-[#34547a] sm:w-auto sm:px-7 sm:text-base"
              >
                Explore How It Works
              </button>
            </div>

            <div className="hero-benefits mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const delayClass =
                  index === 0
                    ? "[animation-delay:520ms]"
                    : index === 1
                      ? "[animation-delay:630ms]"
                      : "[animation-delay:740ms]";
                return (
                  <div
                    key={benefit.title}
                    className={`hero-benefit ${delayClass} group rounded-2xl border border-[#ead7b5] bg-white/85 p-4 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#663820]`}
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-[#f7e8cd] p-2 text-[#663820] transition-colors duration-300 group-hover:bg-[#663820] group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#1f2d44] sm:text-base">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#4a5b73] sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero-rail-wrap lg:col-span-5">
            <div className="hero-rail relative rounded-[1.7rem] border border-[#ebd8b6] bg-[#fff9ef]/95 p-4 shadow-soft-lg sm:p-5">
              <div className="hero-impact mb-4 rounded-2xl border border-[#ecdab9] bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.19em] text-[#7a533a]">
                  Learning impact
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[#efdfc4] bg-[#fff9ef] p-3">
                    <p className="text-2xl font-bold text-[#1f2d44]">10x</p>
                    <p className="text-xs text-[#4a5b73]">Faster lookup</p>
                  </div>
                  <div className="rounded-xl border border-[#efdfc4] bg-[#fff9ef] p-3">
                    <p className="text-2xl font-bold text-[#1f2d44]">24/7</p>
                    <p className="text-xs text-[#4a5b73]">Voice companion</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                {journey.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className={`hero-step ${
                        index === 0
                          ? "[animation-delay:360ms]"
                          : index === 1
                            ? "[animation-delay:480ms]"
                            : index === 2
                              ? "[animation-delay:600ms]"
                              : "[animation-delay:720ms]"
                      } group relative overflow-hidden rounded-2xl border border-[#ead7b5] bg-white p-3.5 transition-all duration-300 hover:border-[#3b5c7d] hover:shadow-soft`}
                    >
                      <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#f8edd9] opacity-70 transition-colors duration-300 group-hover:bg-[#d8e8ff]" />
                      {index < journey.length - 1 && (
                        <span className="pointer-events-none absolute left-8 top-[4.05rem] h-7 w-px bg-[#e6d2ad]" />
                      )}

                      <div className="relative flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#f4e1bf] to-[#fff9ee] text-[#663820] transition-all duration-300 group-hover:from-[#2d4664] group-hover:to-[#4b7099] group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <span className="inline-flex rounded-md bg-[#f4e7ce] px-2 py-1 text-[10px] font-bold tracking-widest text-[#6a432d]">
                            STEP {step.number}
                          </span>
                          <h3 className="mt-1.5 text-sm font-semibold text-[#1f2d44] sm:text-base">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-[13px] leading-relaxed text-[#4a5b73] sm:text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-shell,
        .hero-badge,
        .hero-title,
        .hero-copy,
        .hero-features,
        .hero-actions,
        .hero-benefits,
        .hero-rail,
        .hero-impact,
        .hero-step,
        .hero-chip,
        .hero-benefit,
        .hero-rail-wrap {
          opacity: 0;
          transform: translate3d(0, 18px, 0);
          animation: heroFadeUp 680ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-shell {
          animation-delay: 30ms;
        }

        .hero-badge {
          animation-delay: 120ms;
        }

        .hero-title {
          animation-delay: 170ms;
        }

        .hero-copy {
          animation-delay: 220ms;
        }

        .hero-features {
          animation-delay: 240ms;
        }

        .hero-actions {
          animation-delay: 320ms;
        }

        .hero-benefits {
          animation-delay: 420ms;
        }

        .hero-rail-wrap {
          animation-delay: 270ms;
        }

        .hero-rail {
          animation-delay: 300ms;
        }

        .hero-impact {
          animation-delay: 340ms;
        }

        .hero-chip,
        .hero-benefit,
        .hero-step {
          will-change: transform, opacity;
        }

        .hero-glow {
          animation: heroFloat 10s ease-in-out infinite;
        }

        .hero-glow-main {
          animation-delay: -1.1s;
        }

        .hero-glow-left {
          animation-duration: 12s;
          animation-delay: -2.4s;
        }

        .hero-glow-right {
          animation-duration: 9.5s;
          animation-delay: -3.3s;
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -9px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-shell,
          .hero-badge,
          .hero-title,
          .hero-copy,
          .hero-features,
          .hero-actions,
          .hero-benefits,
          .hero-rail,
          .hero-impact,
          .hero-step,
          .hero-chip,
          .hero-benefit,
          .hero-rail-wrap,
          .hero-glow {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
