/**
 * Shared Auth Types
 * 
 * Common types used across multiple auth forms
 */

// Re-export form types for convenience
export type { RegisterFormValues } from "./register/types";
export type { LoginFormValues } from "./login/types";

// Common auth response types (if needed for API responses)
export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
    fullName?: string;
  };
}

export interface AuthError {
  message: string;
  field?: string;
}

