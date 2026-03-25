"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white mt-10 overflow-hidden"
      style={{ backgroundColor: "#121429" }}>

      {/* 💎 Soft gold circular accents */}
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

      <div className="relative z-10 max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">

        {/* LOGO + BRAND */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="M-Crystals Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h2 className="font-bold text-xl text-[#f9e28e] tracking-wide">
              M-Crystals
            </h2>
          </div>

          <p className="text-sm mt-3 text-gray-300 leading-relaxed">
            Luxury beachfront guest house offering comfort, elegance, and unforgettable stays in Richards Bay.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-bold text-lg text-[#f9e28e] mb-3">
            Contact
          </h2>

          <p className="text-sm text-gray-300">📞 082 772 8114</p>
          <p className="text-sm text-gray-300">📍 Richards Bay, South Africa</p>
          <p className="text-sm text-gray-300">✉️ info@m-crystals.co.za</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="font-bold text-lg text-[#f9e28e] mb-3">
            Quick Links
          </h2>

          <ul className="text-sm space-y-2 text-gray-300">
            <li>
              <Link href="/rooms" className="hover:text-[#f9e28e] transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-[#f9e28e] transition">
                Book Now
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#f9e28e] transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/ImageGenerator" className="hover:text-[#f9e28e] transition">
                Image Generator
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 text-center text-xs py-4 text-gray-400 border-t border-white/10 mt-8">
        © {new Date().getFullYear()} M-Crystals. All rights reserved.
      </div>

    </footer>
  );
}