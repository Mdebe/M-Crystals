"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#121429] pt-24 flex items-center justify-center">

      {/* circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#f9e28e]/10 blur-2xl"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">

        <div className="flex justify-center mb-6">
          <img src="/logo.png" className="h-16 w-16 rounded-full" />
        </div>

        <h2 className="text-center text-2xl font-bold text-[#f9e28e] mb-6">
          Create Account
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full border px-4 py-2 rounded-lg"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-[#f9e28e] text-[#121429] py-2 rounded-xl font-semibold">
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#f9e28e] font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}