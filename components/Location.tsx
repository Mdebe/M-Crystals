export default function Location() {
  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold">Find Us</h2>

      <p className="mt-4 text-gray-600">
        Richards Bay, KwaZulu-Natal, South Africa
      </p>

      <iframe
        className="mt-6 w-full h-64 rounded-xl"
        src="https://www.google.com/maps/embed?pb="
        loading="lazy"
      />
    </section>
  );
}