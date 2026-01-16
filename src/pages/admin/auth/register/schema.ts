/**
 * Register Form Validation Schema
 */

import * as Yup from "yup";
import type { RegisterFormValues } from "./types";

export const registerValidationSchema = Yup.object<RegisterFormValues>({
  emailOrMobile: Yup.string()
    .required("Email or mobile number is required")
    .test(
      "email-or-mobile",
      "Enter a valid email or mobile number",
      (value) => {
        if (!value) return false;

        const emailRegex =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const mobileRegex =
          /^[6-9]\d{9}$/; // Indian 10-digit mobile

        return emailRegex.test(value) || mobileRegex.test(value);
      }
    ),
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

