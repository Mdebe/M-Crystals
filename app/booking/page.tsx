"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
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

  const handleSubmit = async () => {
    await supabase.from("bookings").insert([
      {
        ...form,
        room_id,
      },
    ]);

    alert("Booking request sent!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Book Room</h1>

      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} className="input" />
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} className="input" />
      <input placeholder="Phone" onChange={(e)=>setForm({...form,phone:e.target.value})} className="input" />

      <input type="date" onChange={(e)=>setForm({...form,check_in:e.target.value})} className="input" />
      <input type="date" onChange={(e)=>setForm({...form,check_out:e.target.value})} className="input" />

      <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 mt-4">
        Confirm Booking
      </button>
    </div>
  );
}