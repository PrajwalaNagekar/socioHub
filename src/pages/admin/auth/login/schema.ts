/**
 * Login Form Validation Schema
 */

import * as Yup from "yup";
import type { LoginFormValues } from "./types";
import { emailValidation, passwordValidation } from "../shared/schemas";

export const loginValidationSchema = Yup.object<LoginFormValues>({
  email: emailValidation,
  password: passwordValidation,
});

