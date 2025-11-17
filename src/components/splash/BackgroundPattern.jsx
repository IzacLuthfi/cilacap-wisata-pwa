export default function BackgroundPattern({ fadeOut }) {
  return (
    <div
      className={`absolute inset-0 opacity-40 transition-all duration-700 ${
        fadeOut ? "opacity-0" : "opacity-40"
      }`}
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/wavecut.png')",
      }}
    ></div>
  );
}
