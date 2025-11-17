export default function WisataPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Kategori Wisata Cilacap
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Pantai */}
        <div className="p-5 bg-blue-100 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
          <h2 className="text-xl font-bold">🏖️ Wisata Pantai</h2>
          <p className="text-gray-700">Kategori wisata pantai di Cilacap.</p>
        </div>

        {/* Pulau */}
        <div className="p-5 bg-green-100 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
          <h2 className="text-xl font-bold">🏝️ Wisata Pulau</h2>
          <p className="text-gray-700">Kategori wisata pulau di Cilacap.</p>
        </div>

        {/* Sejarah */}
        <div className="p-5 bg-yellow-100 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
          <h2 className="text-xl font-bold">🏯 Wisata Sejarah</h2>
          <p className="text-gray-700">Kategori wisata sejarah di Cilacap.</p>
        </div>

      </div>
    </div>
  );
}
