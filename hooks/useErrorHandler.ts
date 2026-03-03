"use client";

import { useCallback } from "react";
import {
  logError,
  showErrorToast,
  showSuccessToast,
  classifyError,
} from "@/lib/error";

interface UseErrorHandlerOptions {
  onError?: (error: unknown) => void;
  showToast?: boolean;
  logError?: boolean;
}

/**
 * Hook for handling errors in client components
 * Provides centralized error logging, classification, and toast notifications
 */
export const useErrorHandler = (options: UseErrorHandlerOptions = {}) => {
  const {
    onError,
    showToast = true,
    logError: shouldLogError = true,
  } = options;

  const handleError = useCallback(
    (error: unknown, context?: Record<string, unknown>) => {
      // Log the error
      if (shouldLogError) {
        logError(error, context);
      }

      // Show toast notification
      if (showToast) {
        showErrorToast(error);
      }

      // Custom error handler
      if (onError) {
        onError(error);
      }
    },
    [shouldLogError, showToast, onError],
  );

  const executeAsync = useCallback(
    async <T>(
      fn: () => Promise<T>,
      context?: Record<string, unknown>,
    ): Promise<T | null> => {
      try {
        return await fn();
      } catch (error) {
        handleError(error, context);
        return null;
      }
    },
    [handleError],
  );

  const executeSync = useCallback(
    <T>(fn: () => T, context?: Record<string, unknown>): T | null => {
      try {
        return fn();
      } catch (error) {
        handleError(error, context);
        return null;
      }
    },
    [handleError],
  );

  return {
    handleError,
    executeAsync,
    executeSync,
    classifyError,
    showErrorToast,
    showSuccessToast,
  };
};

/**
 * Hook for handling form submission errors
 */
export const useFormErrorHandler = () => {
  const { handleError, executeAsync } = useErrorHandler({
    showToast: true,
    logError: true,
  });

  const handleSubmit = useCallback(
    async (fn: () => Promise<void>, onSuccess?: () => void) => {
      try {
        await fn();
        if (onSuccess) {
          onSuccess();
        }
      } catch (error) {
        handleError(error, { context: "form_submission" });
      }
    },
    [handleError],
  );

  return {
    handleSubmit,
    handleError,
    executeAsync,
    showSuccessToast,
  };
};

/**
 * Hook for handling API request errors
 */
export const useApiErrorHandler = (context?: string) => {
  const { handleError, executeAsync } = useErrorHandler({
    showToast: true,
    logError: true,
  });

  const executeApi = useCallback(
    async <T>(fn: () => Promise<T>): Promise<T | null> => {
      return executeAsync(fn, { context: context || "api_call" });
    },
    [executeAsync, context],
  );

  return {
    executeApi,
    handleError,
    showErrorToast,
    showSuccessToast,
  };
};
