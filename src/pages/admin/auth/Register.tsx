import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.jpg";
import { Facebook } from "lucide-react";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg border rounded-2xl">
        <CardHeader className="flex flex-col items-center gap-3">
          <img src={Logo} alt="Logo" className=" object-cover " />
          <CardTitle className="text-center text-lg font-semibold text-gray-700">
            Sign up to see photos and videos from your friends.
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button variant="outline" className="w-full text-blue-600 border-blue-500 hover:bg-blue-50">
           <Facebook/> Login with Facebook
          </Button>

          <div className="flex items-center justify-center my-2">
            <div className="border-t w-full border-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="border-t w-full border-gray-300"></div>
          </div>

          <Input placeholder="Mobile Number or Email" />
          <Input placeholder="Full Name" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
        </CardContent>

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
