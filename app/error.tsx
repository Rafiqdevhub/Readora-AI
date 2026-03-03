"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, RefreshCw, BookOpen } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error for monitoring/debugging
    console.error("Application Error:", {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
    });

    // Optional: Send to error tracking service (e.g., Sentry)
    // logErrorToService(error);
  }, [error]);

  const isDevelopment = process.env.NODE_ENV === "development";
  const isAuthError =
    error.message.includes("auth") || error.message.includes("unauthorized");
  const isNetworkError =
    error.message.includes("fetch") || error.message.includes("network");
  const isDBError =
    error.message.includes("database") || error.message.includes("mongodb");

  // Determine user-friendly error message
  const getErrorMessage = () => {
    if (isAuthError) {
      return "You don't have permission to access this page. Please sign in again.";
    }
    if (isNetworkError) {
      return "We're having trouble connecting to our servers. Please check your internet connection.";
    }
    if (isDBError) {
      return "We're experiencing database issues. Our team has been notified.";
    }
    return "Something went wrong while processing your request.";
  };

  // Determine error icon
  const getErrorIcon = () => {
    if (isAuthError) {
      return "🔐";
    }
    if (isNetworkError) {
      return "🌐";
    }
    if (isDBError) {
      return "💾";
    }
    return "📖";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <AlertCircle
              className="w-24 h-24 text-destructive opacity-20"
              strokeWidth={1}
            />
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              {getErrorIcon()}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Oops! Something Went Wrong
        </h1>

        <p className="text-lg text-muted-foreground mb-2">
          {getErrorMessage()}
        </p>

        {/* Error Details (Development Only) */}
        {isDevelopment && error.message && (
          <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20 text-left mb-8">
            <p className="text-sm font-mono text-destructive mb-2">
              <span className="font-bold">Error:</span> {error.message}
            </p>
            {error.digest && (
              <p className="text-sm font-mono text-muted-foreground">
                <span className="font-bold">Digest:</span> {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={reset} size="lg" variant="outline">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go to Home
            </Link>
          </Button>
        </div>

        {/* Additional Help Text */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            If the problem persists, please try:
          </p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Refreshing the page</li>
            <li>• Clearing your browser cache</li>
            <li>• Signing out and signing back in</li>
            <li>• Contacting support if the error continues</li>
          </ul>
        </div>

        {/* Support Footer */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Need help? Contact our support team or check our{" "}
            <Link href="/" className="text-primary hover:underline">
              documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
