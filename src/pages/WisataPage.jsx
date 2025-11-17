import { WisataData } from "../data/wisata";

export default function WisataPage({ onSelect }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Wisata</h1>

      {/* PANTAI */}
      <h2 className="text-xl font-semibold mb-2">Wisata Pantai</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WisataData.pantai.list.map((item) => (
          <div
            key={item.id}
            className="border rounded p-3 cursor-pointer"
            onClick={() => onSelect(item.id)}
          >
            <img src={item.gambar} className="rounded mb-2" />
            <h3 className="font-bold">{item.nama}</h3>
            <p className="text-sm text-gray-600">{item.deskripsi}</p>
          </div>
        ))}
      </div>

      {/* SEJARAH */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Wisata Sejarah</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WisataData.sejarah.list.map((item) => (
          <div
            key={item.id}
            className="border rounded p-3 cursor-pointer"
            onClick={() => onSelect(item.id)}
          >
            <img src={item.gambar} className="rounded mb-2" />
            <h3 className="font-bold">{item.nama}</h3>
            <p className="text-sm text-gray-600">{item.deskripsi}</p>
          </div>
        ))}
      </div>

      {/* PULAU */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Wisata Pulau</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WisataData.pulau.list.map((item) => (
          <div
            key={item.id}
            className="border rounded p-3 cursor-pointer"
            onClick={() => onSelect(item.id)}
          >
            <img src={item.gambar} className="rounded mb-2" />
            <h3 className="font-bold">{item.nama}</h3>
            <p className="text-sm text-gray-600">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
