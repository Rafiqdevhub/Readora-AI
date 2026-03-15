import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import BookCard from "@/components/BookCard";
import { getUserBooks } from "@/lib/actions/book.actions";
import { getUserVoiceSessions } from "@/lib/actions/session.action";
import { getUserPlan } from "@/lib/subscription.server";
import { getCurrentBillingPeriodStart } from "@/lib/subscription-constants";

export const metadata: Metadata = {
  title: "My Profile | Readora",
  description: "View your uploaded books, voice sessions, and account details.",
};

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const PLAN_BADGE: Record<string, { label: string; className: string }> = {
  free: {
    label: "Free",
    className: "bg-[#f3e4c7] text-[#663820] border border-[#e5c99a]",
  },
  standard: {
    label: "Standard",
    className: "bg-blue-50 text-blue-700 border border-blue-200",
  },
  pro: {
    label: "Pro",
    className: "bg-amber-50 text-amber-700 border border-amber-300",
  },
};

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const [user, booksResult, sessionsResult, plan] = await Promise.all([
    currentUser(),
    getUserBooks(userId),
    getUserVoiceSessions(userId),
    getUserPlan(),
  ]);

  const books = booksResult.success ? (booksResult.data ?? []) : [];
  const sessions = sessionsResult.data ?? [];
  const planLocked = sessionsResult.planLocked;

  // Stats
  const totalSegments = books.reduce(
    (sum: number, b: (typeof books)[number]) => sum + (b.totalSegments ?? 0),
    0,
  );

  const billingStart = getCurrentBillingPeriodStart();
  const monthSessions = sessions.filter(
    (s) => new Date(s.billingPeriodStart) >= billingStart,
  ).length;

  const badge = PLAN_BADGE[plan] ?? PLAN_BADGE.free;
  const fullName =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") || "Reader";
  const email = user?.emailAddresses?.[0]?.emailAddress ?? "";

  return (
    <>
      <main className="wrapper container pt-28 pb-16">
        <section className="mb-10 rounded-2xl border border-(--border-medium) bg-white/80 backdrop-blur-sm shadow-(--shadow-soft-md) p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative shrink-0">
              {user?.imageUrl ? (
                <Image
                  src={user.imageUrl}
                  alt={fullName}
                  width={88}
                  height={88}
                  className="rounded-full ring-4 ring-[#f3e4c7] object-cover"
                />
              ) : (
                <div className="h-22 w-22 rounded-full ring-4 ring-[#f3e4c7] bg-[#f3e4c7] flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-[#663820]">
                    {fullName.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#212a3b]">
                  {fullName}
                </h1>
                <span
                  className={`self-center sm:self-auto inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold ${badge.className}`}
                >
                  {badge.label} Plan
                </span>
              </div>
              {email && <p className="text-sm text-[#5a6474]">{email}</p>}
            </div>

            <div className="shrink-0 flex items-center gap-2">
              {/* Upgrade CTA for free/standard */}
              {plan !== "pro" && (
                <Link
                  href="/subscriptions"
                  className="rounded-full px-5 py-2 text-sm font-semibold bg-[#663820] text-white hover:bg-[#7a4528] transition-colors"
                >
                  Upgrade Plan
                </Link>
              )}

              <SignOutButton redirectUrl="/">
                <button
                  type="button"
                  className="rounded-full px-5 py-2 text-sm font-semibold border border-(--border-medium) bg-white text-(--text-primary) hover:bg-(--bg-tertiary) transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          </div>
        </section>

        <section className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Books Uploaded", value: books.length },
            { label: "Total Segments", value: totalSegments.toLocaleString() },
            { label: "Sessions This Month", value: monthSessions },
            { label: "Current Plan", value: badge.label },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-(--border-medium) bg-white/80 p-4 text-center shadow-(--shadow-soft-md)"
            >
              <p className="text-2xl font-bold text-[#663820]">{value}</p>
              <p className="mt-1 text-xs font-medium text-[#5a6474]">{label}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#212a3b]">
              My Books
            </h2>
            <Link
              href="/books/new"
              className="rounded-full px-4 py-2 text-sm font-semibold border border-(--border-medium) bg-white/75 text-(--text-primary) hover:bg-[#f3e4c7] transition-colors"
            >
              + Upload New
            </Link>
          </div>

          {plan === "free" && (
            <div className="mb-5 rounded-2xl border border-[#e5c99a] bg-[#fdf7eb] px-4 py-3 sm:px-5">
              <p className="text-sm text-[#663820]">
                Free plan allows uploading only 1 book. You currently have{" "}
                <span className="font-semibold">{books.length}</span>
                {books.length === 1 ? " book" : " books"}. Upgrade for more
                uploads.
              </p>
            </div>
          )}

          {books.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-(--border-medium) bg-white/60 py-16 text-center">
              <p className="text-[#5a6474] mb-4">
                You haven&apos;t uploaded any books yet.
              </p>
              <Link
                href="/books/new"
                className="rounded-full px-5 py-2.5 text-sm font-semibold bg-[#663820] text-white hover:bg-[#7a4528] transition-colors"
              >
                Upload Your First Book
              </Link>
            </div>
          ) : (
            <div className="library-books-grid">
              {books.map((book) => (
                <div key={book._id} className="flex flex-col gap-1.5">
                  <BookCard
                    title={book.title}
                    author={book.author}
                    coverURL={book.coverURL}
                    slug={book.slug}
                  />
                  <p className="text-center text-xs text-[#5a6474]">
                    {book.totalSegments > 0
                      ? `${book.totalSegments.toLocaleString()} segments`
                      : "Processing…"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-[#212a3b] mb-6">
            Voice Sessions
          </h2>

          {planLocked ? (
            <div className="rounded-2xl border border-dashed border-(--border-medium) bg-white/60 py-12 text-center px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f3e4c7] mb-4">
                <svg
                  className="w-6 h-6 text-[#663820]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#212a3b] mb-1">
                Session History Unavailable
              </h3>
              <p className="text-sm text-[#5a6474] mb-5 max-w-sm mx-auto">
                Session history is available on the Standard and Pro plans.
                Upgrade to track your reading sessions.
              </p>
              <Link
                href="/subscriptions"
                className="rounded-full px-5 py-2.5 text-sm font-semibold bg-[#663820] text-white hover:bg-[#7a4528] transition-colors"
              >
                View Plans
              </Link>
            </div>
          ) : sessions.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-(--border-medium) bg-white/60 py-12 text-center">
              <p className="text-[#5a6474]">
                No voice sessions yet. Open a book and start talking!
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-(--border-medium) bg-white/80 shadow-(--shadow-soft-md) overflow-hidden">
              <div className="hidden sm:grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-3 bg-[#f8f4e9] border-b border-(--border-medium) text-xs font-semibold text-[#5a6474] uppercase tracking-wide">
                <span>Book</span>
                <span className="text-right">Duration</span>
                <span className="text-right">Date</span>
              </div>

              <ul className="divide-y divide-(--border-medium)">
                {sessions.map((session) => (
                  <li key={session._id}>
                    <Link
                      href={
                        session.bookSlug ? `/books/${session.bookSlug}` : "#"
                      }
                      className="grid sm:grid-cols-[1fr_auto_auto] gap-1 sm:gap-4 px-6 py-4 hover:bg-[#f8f4e9] transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="font-medium text-sm text-[#212a3b] truncate">
                          {session.bookTitle}
                        </p>
                        <p className="text-xs text-[#5a6474] truncate">
                          {session.bookAuthor}
                        </p>
                      </div>
                      <p className="text-sm font-mono text-[#663820] sm:text-right">
                        {formatDuration(session.durationSeconds)}
                      </p>
                      <p className="text-xs text-[#5a6474] sm:text-right whitespace-nowrap">
                        {formatDate(session.startedAt)}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
