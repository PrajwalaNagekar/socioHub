/**
 * Register Form Validation Schema
 */

import * as Yup from "yup";
import type { RegisterFormValues } from "./types";

export const registerValidationSchema = Yup.object<RegisterFormValues>({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
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

