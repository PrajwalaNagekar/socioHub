import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { Facebook } from "lucide-react";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/images/logo.jpg";

import type { RegisterFormValues } from "./types";
import { registerValidationSchema } from "./schema";
import { initialRegisterValues } from "./constants";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (
    values: RegisterFormValues,
    { setSubmitting, resetForm }: FormikHelpers<RegisterFormValues>
  ) => {
    console.log("Form submitted:", values);

    // Simulate API delay
    setTimeout(() => {
      alert("Dummy submit successful!");
      resetForm();
      setSubmitting(false);
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg border rounded-2xl">
        <CardHeader className="flex flex-col items-center gap-3">
          <img src={Logo} alt="Logo" className=" object-cover " />
          <CardTitle className="text-center text-lg font-semibold text-gray-700">
            Sign up to see photos and videos from your friends.
          </CardTitle>
        </CardHeader>

        <Formik
          initialValues={initialRegisterValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <CardContent className="flex flex-col gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full text-blue-600 border-blue-500 hover:bg-blue-50"
                >
                  <Facebook /> Login with Facebook
                </Button>

                <div className="flex items-center justify-center my-2">
                  <div className="border-t w-full border-gray-300"></div>
                  <span className="px-2 text-gray-500 text-sm">OR</span>
                  <div className="border-t w-full border-gray-300"></div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Mobile Number or Email</Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Mobile Number or Email"
                    className={
                      errors.email && touched.email ? "border-red-500" : ""
                    }
                    aria-invalid={errors.email && touched.email ? "true" : "false"}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Field
                    as={Input}
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    className={
                      errors.fullName && touched.fullName ? "border-red-500" : ""
                    }
                    aria-invalid={errors.fullName && touched.fullName ? "true" : "false"}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    className={
                      errors.username && touched.username ? "border-red-500" : ""
                    }
                    aria-invalid={errors.username && touched.username ? "true" : "false"}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={
                      errors.password && touched.password ? "border-red-500" : ""
                    }
                    aria-invalid={errors.password && touched.password ? "true" : "false"}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </Button>
              </CardContent>
            </Form>
          )}
        </Formik>

        <CardContent className="text-center text-sm text-gray-600">
          Have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;

