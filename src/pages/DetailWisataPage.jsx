import { WisataData } from "../data/wisata";


export default function DetailWisataPage({ id }) {
const item = wisataCilacap.find((w) => w.id === id);


return (
<div className="p-6">
<img src={item.gambar} className="rounded-lg w-full max-h-80 object-cover" />
<h1 className="text-2xl font-bold mt-4">{item.nama}</h1>
<p className="mt-2 text-gray-700">{item.deskripsi}</p>
</div>
);
}