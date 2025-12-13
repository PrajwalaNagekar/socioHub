/**
 * Shared Auth Validation Schemas
 * Common validation rules used across authentication forms
 */

import * as Yup from "yup";

/**
 * Common email validation
 */
export const emailValidation = Yup.string()
  .email("Invalid email address")
  .required("Email is required");

/**
 * Common password validation
 */
export const passwordValidation = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");

