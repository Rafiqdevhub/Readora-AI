/**
 * Error Handling Utilities
 * Centralized error handling, logging, and user-friendly error messages
 */

import { toast } from "sonner";

// Custom Error Classes
export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class AuthError extends AppError {
  constructor(message: string = "Authentication failed") {
    super("AUTH_ERROR", message, 401);
    this.name = "AuthError";
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string = "Validation failed",
    public field?: string,
  ) {
    super("VALIDATION_ERROR", message, 400);
    this.name = "ValidationError";
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super("NOT_FOUND", message, 404);
    this.name = "NotFoundError";
  }
}

export class NetworkError extends AppError {
  constructor(message: string = "Network request failed") {
    super("NETWORK_ERROR", message, 0);
    this.name = "NetworkError";
  }
}

export class DatabaseError extends AppError {
  constructor(message: string = "Database operation failed") {
    super("DATABASE_ERROR", message, 500);
    this.name = "DatabaseError";
  }
}

// Error Classification
export const classifyError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof TypeError) {
    if (error.message.includes("fetch")) {
      return new NetworkError("Failed to connect to server");
    }
    return new ValidationError(error.message);
  }

  if (error instanceof SyntaxError) {
    return new ValidationError("Invalid data format");
  }

  if (error instanceof Error) {
    const message = error.message.toLowerCase();

    if (message.includes("auth") || message.includes("unauthorized")) {
      return new AuthError(error.message);
    }

    if (message.includes("not found") || message.includes("404")) {
      return new NotFoundError(error.message);
    }

    if (message.includes("network") || message.includes("fetch")) {
      return new NetworkError(error.message);
    }

    if (message.includes("database") || message.includes("mongodb")) {
      return new DatabaseError(error.message);
    }

    return new AppError("UNKNOWN_ERROR", error.message);
  }

  return new AppError("UNKNOWN_ERROR", "An unexpected error occurred");
};

// User-Friendly Error Messages
const errorMessages: Record<string, string> = {
  AUTH_ERROR: "Please sign in again to continue.",
  VALIDATION_ERROR: "Please check your input and try again.",
  NOT_FOUND: "The requested resource could not be found.",
  NETWORK_ERROR: "Check your internet connection and try again.",
  DATABASE_ERROR: "Database error. Please try again later.",
  UNKNOWN_ERROR: "Something went wrong. Please try again.",
};

export const getUserFriendlyMessage = (error: AppError | Error): string => {
  if (error instanceof AppError) {
    return errorMessages[error.code] || error.message;
  }
  return "Something went wrong. Please try again.";
};

// Error Logging
export const logError = (
  error: unknown,
  context?: Record<string, unknown>,
): void => {
  const appError = classifyError(error);

  // Console logging (development)
  if (process.env.NODE_ENV === "development") {
    console.error("Error Log:", {
      code: appError.code,
      message: appError.message,
      statusCode: appError.statusCode,
      context,
      timestamp: new Date().toISOString(),
      stack: appError.stack,
    });
  }

  // TODO: Send to external error tracking service (e.g., Sentry)
  // Example:
  // Sentry.captureException(appError, {
  //   contexts: { custom: context },
  //   tags: { code: appError.code },
  // });
};

// Toast Notifications
export const showErrorToast = (
  error: unknown,
  customMessage?: string,
): void => {
  const appError = classifyError(error);
  const message = customMessage || getUserFriendlyMessage(appError);

  toast.error(message, {
    description:
      process.env.NODE_ENV === "development" ? appError.message : undefined,
    duration: 5000,
  });
};

export const showSuccessToast = (message: string): void => {
  toast.success(message, { duration: 3000 });
};

export const showWarningToast = (message: string): void => {
  toast.warning(message, { duration: 4000 });
};

export const showInfoToast = (message: string): void => {
  toast.info(message, { duration: 3000 });
};

// API Error Handler
export const handleApiError = async (response: Response): Promise<never> => {
  let error: AppError;

  try {
    const data = await response.json();
    error = classifyError(new Error(data.message || response.statusText));
  } catch {
    error = classifyError(new Error(response.statusText));
  }

  error.statusCode = response.status;
  logError(error);
  throw error;
};

// Safe Try-Catch Wrapper with Toast
export const executeWithErrorHandling = async <T>(
  fn: () => Promise<T>,
  options?: {
    showToast?: boolean;
    logError?: boolean;
    errorMessage?: string;
  },
): Promise<T | null> => {
  const {
    showToast: shouldShowToast = true,
    logError: shouldLog = true,
    errorMessage,
  } = options || {};

  try {
    return await fn();
  } catch (error) {
    if (shouldLog) {
      logError(error);
    }

    if (shouldShowToast) {
      showErrorToast(error, errorMessage);
    }

    return null;
  }
};
