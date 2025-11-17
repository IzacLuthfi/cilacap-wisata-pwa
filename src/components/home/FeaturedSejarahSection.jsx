export default function FeaturedSejarahSection({ sejarah }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-amber-700 mb-4">Wisata Sejarah</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sejarah.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.nama}</h3>
              <p className="text-gray-600 text-sm">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
