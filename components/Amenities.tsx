const services = [
  {
    title: "Bed & Breakfast",
    icon: "🍽️",
    desc: "Enjoy comfortable stays with premium breakfast service included.",
  },
  {
    title: "Conference Venue",
    icon: "🏢",
    desc: "Modern, fully equipped space for meetings and corporate events.",
  },
  {
    title: "Entertainment",
    icon: "🎉",
    desc: "Relax and enjoy curated entertainment experiences for guests.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#121429] via-[#1b1f3f] to-[#0b0c1a] overflow-hidden">

      {/* GOLD GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,226,142,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#f9e28e]
        drop-shadow-[0_0_18px_rgba(249,226,142,0.7)] animate-pulse">
          Our Services
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-md border border-white/10
              rounded-2xl p-8 text-center
              shadow-[0_20px_50px_rgba(0,0,0,0.6)]
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]
              transform hover:-translate-y-2 transition-all duration-500"
            >

              {/* ICON */}
              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#f9e28e]">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-200 mt-3 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* GOLD LINE */}
              <div className="w-14 h-[2px] bg-[#f9e28e] mx-auto mt-5 rounded-full shadow-[0_0_10px_rgba(249,226,142,0.5)]" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}