"use client";

const reviews = [
  {
    name: "John",
    text: "Amazing stay, very clean and peaceful!",
    rating: 5,
  },
  {
    name: "Sarah",
    text: "Loved the beach view and pool area. Felt like paradise.",
    rating: 4,
  },
  {
    name: "Mike",
    text: "Great value for money. Highly recommended!",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[#f9e28e] text-sm mt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* SOFT BRAND BACKGROUND (LIKE FACEBOOK LIGHT FEED) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-72 bg-[radial-gradient(circle_at_top,rgba(18,20,41,0.05),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-72 bg-[radial-gradient(circle_at_bottom,rgba(249,226,142,0.15),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-14 text-[#121429]">
          Guest <span className="text-[#f9e28e]">Reviews</span>
        </h2>

        {/* FEED STYLE LIST */}
        <div className="space-y-6">

          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-300"
            >

              {/* HEADER (Facebook style) */}
              <div className="flex items-center gap-3">

                {/* AVATAR */}
                <div className="w-12 h-12 rounded-full bg-[#121429] text-white flex items-center justify-center font-bold">
                  {r.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-[#121429]">{r.name}</h4>
                  <p className="text-xs text-gray-500">Verified guest</p>
                </div>

              </div>

              {/* TEXT */}
              <p className="text-gray-700 mt-4 leading-relaxed">
                "{r.text}"
              </p>

              {/* BOOKING.COM STYLE RATING */}
              <Stars rating={r.rating} />

              {/* FOOTER ACTIONS (LIKE FACEBOOK FEEL) */}
              <div className="flex gap-6 mt-5 text-sm text-gray-500">
                <span className="cursor-pointer hover:text-[#121429]">👍 Like</span>
                <span className="cursor-pointer hover:text-[#121429]">💬 Reply</span>
                <span className="cursor-pointer hover:text-[#121429]">🔗 Share</span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}