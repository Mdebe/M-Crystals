"use client";

import { useState } from "react";
import Link from "next/link";

type Room = {
  name: string;
  price: number;
  img: string;
  size?: string;
  bed?: string;
  balcony?: boolean;
  view?: boolean;
  bathroom?: string;
  tv?: boolean;
  kettle?: boolean;
  smoking?: string;
  description?: string;
  facilities?: string[];
};

const rooms: Room[] = [
  {
    name: "Deluxe Queen",
    price: 1200,
    img: "/hero22.jpg",
    size: "25 m²",
    bed: "1 full bed",
    balcony: true,
    view: true,
    bathroom: "Private bathroom",
    tv: true,
    kettle: true,
    smoking: "No smoking",
    description:
      "Elegant deluxe room designed with comfort and modern luxury in mind.",
    facilities: ["Balcony", "Flat-screen TV", "Electric kettle", "WiFi"],
  },
  {
    name: "Double Room",
    price: 950,
    img: "/hero2.jpg",
    bed: "1 full bed",
    bathroom: "Private bathroom",
    tv: true,
    smoking: "No smoking",
    description:
      "Comfortable double room perfect for short and relaxing stays.",
    facilities: ["WiFi", "Flat-screen TV"],
  },
  {
    name: "Family Suite",
    price: 1600,
    img: "/hero12.jpg",
    size: "45 m²",
    bed: "2 full beds",
    balcony: true,
    view: true,
    bathroom: "Private bathroom",
    tv: true,
    kettle: true,
    smoking: "No smoking",
    description:
      "Spacious family suite offering premium comfort and luxury experience.",
    facilities: ["Balcony", "WiFi", "Flat-screen TV", "Mini bar"],
  },
];

export default function RoomsPreview() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* ✨ SEMI-TRANSPARENT CIRCULAR ACCENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#f9e28e]/20"
            style={{
              width: `${80 + Math.random() * 150}px`,
              height: `${80 + Math.random() * 150}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14 text-[#121429]">
          Our <span className="text-[#f9e28e] drop-shadow-[0_0_20px_rgba(249,226,142,0.5)]">Rooms</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {rooms.map((room, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-200
              bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              transform hover:-translate-y-2 transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={room.img}
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* GOLD LINE ACCENT */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f9e28e]" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-lg font-bold text-[#121429]">{room.name}</h3>
                <p className="text-gray-600 mt-1">
                  From <span className="text-[#121429] font-semibold">R{room.price}</span> / night
                </p>

                <button
                  onClick={() => setSelectedRoom(room)}
                  className="mt-5 w-full py-2 rounded-xl font-semibold
                  bg-[#f9e28e] text-[#121429]
                  hover:bg-[#121429] hover:text-white
                  transition shadow-md"
                >
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white border border-gray-200 text-[#121429]
          rounded-2xl max-w-2xl w-full p-6 shadow-2xl">

            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-5 right-6 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-[#121429] mb-3">{selectedRoom.name}</h2>
            <p className="text-gray-600 mb-4">{selectedRoom.description}</p>

            <div className="space-y-1 text-sm text-gray-700">
              {selectedRoom.size && <p>📏 {selectedRoom.size}</p>}
              {selectedRoom.bed && <p>🛏️ {selectedRoom.bed}</p>}
              <p>🚿 {selectedRoom.bathroom}</p>
              <p>🚭 {selectedRoom.smoking}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/booking"
                className="flex-1 text-center bg-[#121429] text-white py-2 rounded-xl font-semibold"
              >
                Book Now
              </Link>
              <button
                onClick={() => setSelectedRoom(null)}
                className="flex-1 border border-gray-300 py-2 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}