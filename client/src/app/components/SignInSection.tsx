"use client";

import React from "react";
import { SignIn, useSignIn } from "@clerk/nextjs";

const SignInSection: React.FC = () => {
  const { isLoaded } = useSignIn();
  return (
    <div className="flex items-center justify-center h-screen">
      {isLoaded ? <SignIn routing="hash" /> : "loading..."}
    </div>
  );
};

export default SignInSection;
