import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form container */}
      <div className="w-3/12 absolute left-0 right-0 mx-auto top-1/3">
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>

        {/* Actual form */}
        <form className="relative text-white p-6 z-10">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Full name only in Sign Up mode */}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-800 placeholder-white rounded"
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-800 placeholder-white rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-800 placeholder-white rounded"
          />

          <button className="p-4 my-6 bg-red-900 w-full rounded-lg hover:bg-red-800 transition">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
