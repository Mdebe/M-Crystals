"use client";

export default function SocialEmbedSectionCompact() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">

      {/* Soft floating gold circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#f9e28e]/10"
            style={{
              width: `${60 + Math.random() * 90}px`,
              height: `${60 + Math.random() * 90}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121429]">
            Live <span className="text-[#f9e28e]">Social & Bookings</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            See real guest activity and booking info
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* 📘 FACEBOOK (280px FIX) */}
          <div className="bg-white border border-gray-200 rounded-xl shadow p-3">

            <h3 className="text-sm font-semibold text-[#121429] mb-2">
              Facebook Page
            </h3>

            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://web.facebook.com/p/M-Crystals-Guest-House-100063828260986/&tabs=timeline&width=400&height=280&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="100%"
              height="280"
              style={{
                border: "none",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>

          {/* 🏨 BOOKING.COM RICH CARD */}
          <div className="bg-white border border-gray-200 rounded-xl shadow p-4">

            <h3 className="text-sm font-semibold text-[#121429] mb-3">
              Booking.com Listing
            </h3>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <img
                src="/hero22.jpg"
                className="h-16 w-full object-cover rounded-lg"
              />
              <img
                src="/hero2.jpg"
                className="h-16 w-full object-cover rounded-lg"
              />
              <img
                src="/hero12.jpg"
                className="h-16 w-full object-cover rounded-lg"
              />
            </div>

            {/* DETAILS */}
            <div className="space-y-1 text-sm text-gray-600">
              <p className="font-semibold text-[#121429]">
                M-Crystals Guest House
              </p>
              <p>📍 8 Robbin Rif Birdswood,3900 Richards Bay, South Africa 
</p>
              <p>⭐ Rating: 9.2 Exceptional</p>
              <p>🛏️ Luxury Rooms | Breakfast Included</p>
              <p>🏊 Pool | WiFi | Parking | Beach Access</p>
            </div>

            {/* CTA */}
            <a
              href="https://www.booking.com/hotel/za/m-crystals.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full py-2 rounded-lg bg-[#121429] text-white text-sm font-semibold text-center hover:bg-[#f9e28e] hover:text-[#121429] transition"
            >
              View on Booking.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}