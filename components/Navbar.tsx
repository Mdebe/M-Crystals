"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Book", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#13152a]/95 backdrop-blur-md shadow-lg"
          : "bg-[#13152a]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 md:py-3">

        {/* 🔥 LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-[100px] h-[80px] md:w-[140px] md:h-[120px]">
            <Image
              src="/logo.png"
              alt="M-Crystals Logo"
              fill
              className="object-contain drop-shadow-[0_0_10px_rgba(249,226,142,0.3)]"
              priority
            />
          </div>
        </Link>

        {/* 🎯 CENTER: NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-medium text-[#f9e28e] hover:text-white transition group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f9e28e] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 👉 RIGHT: AUTH + CTA */}
        <div className="hidden md:flex items-center gap-4">

          {/* SIGN IN */}
          <Link
            href="/signin"
            className="text-[#f9e28e] hover:text-white transition font-medium"
          >
            Sign In
          </Link>

          {/* SIGN UP */}
          <Link
            href="/signup"
            className="border border-[#f9e28e] text-[#f9e28e] px-4 py-2 rounded-full hover:bg-[#f9e28e] hover:text-[#13152a] transition"
          >
            Sign Up
          </Link>

          {/* CTA */}
          <Link
            href="/booking"
            className="bg-[#f9e28e] text-[#13152a] px-5 py-2 rounded-full font-semibold hover:scale-105 transition shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* 📱 MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#f9e28e]"
        >
          ☰
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#13152a] px-6 pb-6 pt-4 flex flex-col gap-4">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#f9e28e] py-2 border-b border-[#f9e28e]/20"
            >
              {link.name}
            </Link>
          ))}

          {/* AUTH */}
          <Link
            href="/signin"
            className="text-[#f9e28e] py-2"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="border border-[#f9e28e] text-[#f9e28e] text-center py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>

          {/* CTA */}
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="bg-[#f9e28e] text-[#13152a] text-center py-3 rounded-lg mt-2 font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}