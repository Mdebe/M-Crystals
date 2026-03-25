"use client";

type Booking = {
  id: number;
  name: string;
  email: string;
  room: string;
  check_in: string;
  check_out: string;
  status: string;
};

const bookings: Booking[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    room: "Deluxe Queen",
    check_in: "2026-04-01",
    check_out: "2026-04-03",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@email.com",
    room: "Family Suite",
    check_in: "2026-04-05",
    check_out: "2026-04-08",
    status: "Confirmed",
  },
];

export default function Admin() {
  return (
    <div className="min-h-screen bg-[#121429] pt-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#f9e28e] mb-8
        drop-shadow-[0_0_12px_rgba(249,226,142,0.6)]">
          Admin Dashboard
        </h1>

        {/* BOOKINGS */}
        <div className="space-y-6">

          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-5 shadow-lg
              border border-gray-100 hover:shadow-xl transition"
            >

              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg text-[#121429]">
                  {b.name}
                </h2>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    b.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {b.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mt-1">{b.email}</p>

              <div className="mt-3 text-sm text-gray-700 space-y-1">
                <p>🏨 Room: {b.room}</p>
                <p>📅 {b.check_in} → {b.check_out}</p>
              </div>

              {/* ACTIONS (future ready) */}
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-1 rounded-lg bg-[#f9e28e] text-[#121429] text-sm font-medium">
                  Approve
                </button>
                <button className="px-4 py-1 rounded-lg border text-sm">
                  Reject
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}