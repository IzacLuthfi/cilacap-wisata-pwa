export default function LoadingAnimation({ fadeIn, progress }) {
  return (
    <div
      className={`w-full mt-6 transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
        <div
          className="bg-blue-600 h-2 transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-2">{progress}%</p>
    </div>
  );
}
