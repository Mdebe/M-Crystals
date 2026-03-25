"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
  {
    images: ["/hero22.jpg", "/hero2.jpg", "/hero12.jpg"],
    subtitle: "Bed & Breakfast • Conference Venue • Entertainment experiences in a luxury setting.",
  },
  {
    images: ["/hero2.jpg", "/hero12.jpg", "/hero22.jpg"],
    subtitle: "Relax, unwind, and experience pure elegance.",
  },
  {
    images: ["/hero12.jpg", "/hero22.jpg", "/hero2.jpg"],
    subtitle: "Your premium escape in the heart of the city.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#13152a]">

      {/* IMAGE GRID */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 grid grid-cols-3"
      >
        {slides[index].images.map((img, i) => (
          <div key={i} className="relative w-full h-full overflow-hidden">
            <img
              src={img}
              className="w-full h-full object-cover scale-105 transition duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#13152a]/20" />
          </div>
        ))}
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13152a]/80 via-[#13152a]/40 to-[#13152a]/90" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        {/* BADGE */}
        <span className="bg-[#f9e28e]/10 border border-[#f9e28e]/30 text-[#f9e28e] px-4 py-1 rounded-full text-sm mb-5 backdrop-blur">
          ✨ Luxury • Comfort • Premium Stay
        </span>

        {/* TITLE WITH GOLD GLOW */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold text-[#f9e28e]
          drop-shadow-[0_0_15px_rgba(249,226,142,0.8)]
          animate-pulse tracking-wide"
        >
          M-Crystals
        </motion.h1>

        {/* GOLD LINE */}
        <div className="w-24 h-[2px] bg-[#f9e28e] my-4 rounded-full shadow-[0_0_10px_rgba(249,226,142,0.6)]" />

        {/* SUBTITLE (PER SLIDE) */}
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-2 text-lg md:text-xl max-w-2xl text-white/80"
        >
          {slides[index].subtitle}
        </motion.p>

        {/* CTA */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">

          <Link
            href="/booking"
            className="bg-[#f9e28e] text-[#13152a] px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg hover:shadow-[0_0_20px_rgba(249,226,142,0.5)]"
          >
            Book Now
          </Link>

          <a
            href="https://wa.me/27827728114"
            className="border border-[#f9e28e] text-[#f9e28e] px-6 py-3 rounded-full hover:bg-[#f9e28e] hover:text-[#13152a] transition"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* DOT NAV */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-[#f9e28e]" : "bg-[#f9e28e]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}