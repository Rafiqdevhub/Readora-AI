import React from "react";
import { BookOpenText, Loader2, Sparkles } from "lucide-react";

type RouteLoadingProps = {
  title?: string;
  description?: string;
};

const RouteLoading = ({
  title = "Curating Your Library",
  description = "Shelving your latest books, indexing smart summaries, and setting up a smooth reading experience.",
}: RouteLoadingProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f8f4e9]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(102,56,32,0.20),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(61,72,94,0.18),transparent_38%),linear-gradient(165deg,#f8f4e9_0%,#fff6e5_45%,#f3e4c7_100%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-5 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-[#663820]/15 bg-white/85 p-7 shadow-[0_28px_70px_-28px_rgba(33,42,59,0.35)] backdrop-blur-sm sm:p-10">
          <div className="flex items-center justify-center gap-3 text-[#663820]">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="font-serif text-sm font-semibold tracking-[0.2em] uppercase">
              Readora Vault
            </span>
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>

          <div className="mt-8 flex justify-center">
            <div className="relative grid h-24 w-24 place-items-center rounded-2xl border border-[#663820]/20 bg-[#fff6e5] shadow-inner">
              <Loader2 className="h-12 w-12 animate-spin text-[#663820]" />
              <BookOpenText className="absolute h-6 w-6 text-[#212a3b]" />
            </div>
          </div>

          <h2 className="mt-8 text-center font-serif text-3xl font-semibold text-[#212a3b]">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-center text-[15px] leading-relaxed text-[#3d485e]">
            {description}
          </p>

          <div className="mt-8 space-y-4">
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#f3e4c7]">
              <div className="h-full w-2/3 rounded-full bg-linear-to-r from-[#663820] via-[#8b583d] to-[#212a3b] animate-pulse" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#663820]/75 [animation-delay:0ms]" />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#663820]/75 [animation-delay:120ms]" />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#663820]/75 [animation-delay:240ms]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteLoading;
