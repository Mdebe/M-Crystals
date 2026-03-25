"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Booking() {
  const params = useSearchParams();
  const room_id = params.get("room");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    check_in: "",
    check_out: "",
    guests: 1,
  });

  const handleSubmit = () => {
    // 📲 WhatsApp message
    const message = `
📅 *New Booking Request - M-Crystals*

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
🏨 Room: ${room_id || "Not selected"}
📆 Check-in: ${form.check_in}
📆 Check-out: ${form.check_out}
👥 Guests: ${form.guests}
`;

    const whatsappUrl = `https://wa.me/27827728114?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#121429] pt-24 flex justify-center items-center px-4">

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-center text-[#121429] mb-6">
          Book Your Stay
        </h1>

        {/* INPUTS */}
        <div className="space-y-3">

          <input
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            placeholder="Phone"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="date"
            onChange={(e) => setForm({ ...form, check_in: e.target.value })}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="date"
            onChange={(e) => setForm({ ...form, check_out: e.target.value })}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="number"
            min={1}
            placeholder="Guests"
            onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
            className="w-full border px-4 py-2 rounded-lg"
          />

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-[#f9e28e] text-[#121429] py-3 rounded-xl font-semibold hover:shadow-lg transition"
        >
          Book via WhatsApp
        </button>

      </div>
    </div>
  );
}