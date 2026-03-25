import { supabase } from "@/lib/supabase";

export default async function Admin() {
  const { data: bookings } = await supabase
    .from("bookings")
    .select("*, rooms(name)");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bookings</h1>

      {bookings?.map((b) => (
        <div key={b.id} className="border p-4 mt-4">
          <p><b>{b.name}</b></p>
          <p>{b.email}</p>
          <p>{b.rooms?.name}</p>
          <p>{b.check_in} → {b.check_out}</p>
          <p>Status: {b.status}</p>
        </div>
      ))}
    </div>
  );
}