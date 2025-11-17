export default function TitleSection({ fadeIn }) {
  return (
    <div
      className={`text-center mt-4 transition-all duration-700 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
        Wisata Kabupaten Cilacap
      </h1>
      <p className="text-gray-600 mt-1 text-sm">
        Menjelajahi Keindahan Alam & Budaya
      </p>
    </div>
  );
}
