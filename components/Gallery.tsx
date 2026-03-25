const images = ["/hero22.jpg", "/hero2.jpg", "/hero12.jpg", "/hero2.jpg"];

export default function Gallery() {
  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Gallery
      </h2>

      <div className="grid md:grid-cols-4 gap-3 px-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-40 w-full object-cover rounded-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}