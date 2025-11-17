export default function Footer({ fadeOut, fadeIn }) {
  return (
    <p
      className={`absolute bottom-6 text-xs text-gray-500 transition-all duration-700 ${
        fadeIn ? "opacity-60" : "opacity-0"
      } ${fadeOut ? "opacity-0" : ""}`}
    >
      © 2025 Wisata Cilacap
    </p>
  );
}
