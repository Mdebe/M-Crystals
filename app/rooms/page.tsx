import { supabase } from "@/lib/supabase";

export default async function Rooms() {
  const { data: rooms } = await supabase.from("rooms").select("*");

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {rooms?.map((room) => (
        <div key={room.id} className="border p-4 rounded">
          <img src={room.image_url} className="w-full h-40 object-cover" />
          <h2 className="text-xl font-bold mt-2">{room.name}</h2>
          <p>R{room.price}/night</p>

          <a
            href={`/booking?room=${room.id}`}
            className="mt-3 inline-block bg-black text-white px-3 py-2 rounded"
          >
            Book Now
          </a>
        </div>
      ))}
    </div>
  );
}