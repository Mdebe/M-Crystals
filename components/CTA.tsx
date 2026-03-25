import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 text-center bg-black text-white px-6">
      <h2 className="text-3xl font-bold">
        Ready for your stay?
      </h2>

      <p className="mt-4 text-gray-300">
        Book your room today at M-Crystals
      </p>

      <Link
        href="/booking"
        className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Book Now
      </Link>
    </section>
  );
}