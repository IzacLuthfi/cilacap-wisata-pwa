export default function WisataCard({ item, onClick }) {
return (
<div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
<img src={item.gambar} className="h-40 w-full object-cover" />
<div className="p-4">
<h2 className="font-bold text-lg">{item.nama}</h2>
</div>
</div>
);
}