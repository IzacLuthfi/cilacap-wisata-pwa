export default function HeroSection() {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg mt-4">
      <img
        src="https://i.ibb.co/8PZg65J/teluk-penyu.jpg"
        className="h-full w-full object-cover brightness-75"
        alt="Cilacap"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Wisata Kabupaten Cilacap
        </h1>
        <p className="text-sm md:text-lg mt-2 drop-shadow-md">
          Menjelajahi Keindahan Alam & Budaya Pesisir Selatan
        </p>
      </div>
    </section>
  );
}
