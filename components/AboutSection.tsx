"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = ["/hero22.jpg", "/hero2.jpg", "/hero12.jpg"];

export default function AboutSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#121429] via-[#1b1f3f] to-[#0b0c1a] py-24 px-6 overflow-hidden">

      {/* GOLD GLOW BACKGROUND EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,226,142,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT: IMAGE 3D CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[420px] rounded-2xl overflow-hidden
          shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
          transform hover:-translate-y-2 transition-all duration-500"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          {/* badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium shadow-md">
            🌊 Beachfront Experience
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* GOLD TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9e28e]
          drop-shadow-[0_0_18px_rgba(249,226,142,0.7)] animate-pulse">
            About M-Crystals
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            A luxury beachfront guesthouse in Richards Bay designed for comfort,
            peace, and unforgettable stays.
          </p>

          {/* WHY GUESTS LOVE US - 3D CARD FIXED */}
          <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
          shadow-[0_20px_50px_rgba(0,0,0,0.6)]
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]
          transform hover:-translate-y-2 transition-all duration-500">

            <h3 className="font-semibold text-lg mb-3 text-[#f9e28e]">
              Why Guests Love Us
            </h3>

            <ul className="text-sm text-gray-200 space-y-2">
              <li>✔ Beachfront location with ocean breeze</li>
              <li>✔ Modern rooms with premium comfort</li>
              <li>✔ Swimming pool & BBQ area</li>
              <li>✔ Free WiFi & secure parking</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="/rooms"
              className="bg-[#f9e28e] text-[#121429] px-6 py-3 rounded-2xl font-semibold
              shadow-lg hover:shadow-[0_0_25px_rgba(249,226,142,0.5)]
              hover:scale-105 transition"
            >
              View Rooms
            </a>

            <a
              href="/booking"
              className="border border-[#f9e28e] text-[#f9e28e] px-6 py-3 rounded-2xl
              hover:bg-[#f9e28e] hover:text-[#121429] transition"
            >
              Book Now
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}