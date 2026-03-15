"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Book Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <BookOpen
              className="w-24 h-24 text-text-muted opacity-20"
              strokeWidth={1}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-serif font-bold text-text-primary">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-text-secondary mb-2">
          It seems this chapter is missing from our library.
        </p>

        <p className="text-base text-text-muted mb-8">
          The page you're looking for doesn't exist or has been moved to another
          location.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
