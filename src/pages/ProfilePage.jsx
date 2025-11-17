export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profil</h1>

      {/* Foto Profil */}
      <img
        src="/icons/izac.jpg"
        alt="Foto Profil"
        className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-blue-300"
      />

      <p className="mt-2">
        <b>Nama:</b> Izac Luthfi Pranowo
      </p>
      <p>
        <b>NIM:</b> 21120123120010
      </p>
      <p>
        <b>Kelompok:</b> 12
      </p>
    </div>
  );
}
