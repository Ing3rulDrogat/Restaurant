"use client";
import { resetUserPassword } from "@/actions/user.actions";
import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail(value);
  };

  const resetPassword = () => {
    resetUserPassword(email);
  };

  return (
    <div className="w-screen bg-[url('/Pattern.webp')] h-screen justify-items-center content-center">
      <div className="w-1/3 h-1/3 bg-white/95 rounded-3xl flex flex-col items-center">
        <div>
          <h1 className="text-3xl py-5 text-black">Forgot your password?</h1>
          <p className="text-lg text-black">To reset your password, we first need to varify your email address.</p>
          <div className="w-full flex justify-center items-center flex-col">
            <form onSubmit={resetPassword} className="w-full flex justify-center items-center flex-col">
              <input
                type="Email"
                placeholder="Email (required)"
                required
                onChange={(e) => handleChange(e)}
                className="mb-4 p-2 border border-gray-400 rounded text-black placeholder-gray-400 my-10 w-2/3"
              ></input>
              <button
                type="submit"
                className="flex items-center justify-center bg-amber-500 text-black px-4 py-2 rounded hover:shadow-lg cursor-pointer transition-all my-5"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
