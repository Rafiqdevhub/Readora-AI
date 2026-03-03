"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Root Route Error:", {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
    });
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle
            className="w-16 h-16 text-destructive opacity-60"
            strokeWidth={1.5}
          />
        </div>

        <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
          Library Error
        </h2>

        <p className="text-muted-foreground mb-6">
          We encountered an error loading the library. Please try again.
        </p>

        <div className="flex flex-col gap-3">
          <Button onClick={reset} className="w-full">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
