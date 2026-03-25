export default function Features() {
  const features = [
    "Beachfront Location 🌊",
    "Outdoor Pool 🏊",
    "Free Parking 🚗",
    "Free WiFi 📶",
    "BBQ Facilities 🍖",
    "Family Rooms 👨‍👩‍👧‍👦",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="p-4 border rounded text-center shadow">
          {f}
        </div>
      ))}
    </div>
  );
}