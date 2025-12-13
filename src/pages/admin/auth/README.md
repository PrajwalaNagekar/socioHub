# Auth Module Structure

This directory contains all authentication-related forms and utilities.

## Directory Structure

```
auth/
├── shared/              # Shared utilities, types, and schemas
│   ├── types.ts        # Common auth types
│   └── schemas.ts      # Reusable validation schemas
├── login/              # Login form module
│   ├── Login.tsx       # Login component
│   ├── types.ts        # Login-specific types
│   ├── schema.ts       # Login validation schema
│   ├── constants.ts    # Login initial values
│   └── index.ts        # Module exports
├── register/           # Register form module
│   ├── Register.tsx    # Register component
│   ├── types.ts        # Register-specific types
│   ├── schema.ts       # Register validation schema
│   ├── constants.ts    # Register initial values
│   └── index.ts        # Module exports
└── README.md           # This file
```

## Module Pattern

Each form module (login, register) follows a consistent structure:

### 1. **types.ts** - Type Definitions
Defines TypeScript interfaces for form values.

```typescript
export interface LoginFormValues {
  email: string;
  password: string;
}
```

### 2. **schema.ts** - Validation Schema
Contains Yup validation schema using shared validation rules.

```typescript
import { emailValidation, passwordValidation } from "../shared/schemas";

export const loginValidationSchema = Yup.object<LoginFormValues>({
  email: emailValidation,
  password: passwordValidation,
});
```

### 3. **constants.ts** - Initial Values
Defines initial form values.

```typescript
export const initialLoginValues: LoginFormValues = {
  email: "",
  password: "",
};
```

### 4. **Component.tsx** - Form Component
The actual form component using Formik.

### 5. **index.ts** - Module Exports
Centralized exports for clean imports.

```typescript
export { default as Login } from "./Login";
export type { LoginFormValues } from "./types";
export { loginValidationSchema } from "./schema";
export { initialLoginValues } from "./constants";
```

## Shared Resources

The `shared/` folder contains reusable code:

- **types.ts**: Common types used across multiple forms
- **schemas.ts**: Reusable validation rules (email, password, etc.)

## Usage Example

```typescript
// Import from module index
import { Login, type LoginFormValues, loginValidationSchema, initialLoginValues } from "@/pages/admin/auth/login";

// Or import directly
import Login from "@/pages/admin/auth/login/Login";
import type { LoginFormValues } from "@/pages/admin/auth/login/types";
```

## Adding a New Auth Form

1. Create a new folder (e.g., `forgot-password/`)
2. Add the standard files: `types.ts`, `schema.ts`, `constants.ts`, `Component.tsx`, `index.ts`
3. Use shared schemas from `shared/schemas.ts` when possible
4. Export everything through `index.ts`

## Benefits

- **Separation of Concerns**: Each file has a single responsibility
- **Reusability**: Shared validation rules prevent duplication
- **Maintainability**: Easy to find and update specific parts
- **Type Safety**: TypeScript types ensure consistency
- **Scalability**: Easy to add new auth forms following the same pattern

