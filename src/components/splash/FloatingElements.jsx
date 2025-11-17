export default function FloatingElements({ fadeOut }) {
  const items = ["🌊", "🏝️", "🐚"];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((icon, i) => (
        <div
          key={i}
          className={`absolute text-3xl animate-bounce-slow ${
            fadeOut ? "opacity-0" : "opacity-60"
          }`}
          style={{
            top: `${20 + i * 25}%`,
            left: i % 2 === 0 ? "15%" : "75%",
            animationDelay: `${i}s`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
