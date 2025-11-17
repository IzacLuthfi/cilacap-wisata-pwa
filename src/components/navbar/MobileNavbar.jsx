export default function MobileNavbar({ onNavigate }) {
return (
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-700 text-white flex justify-around p-3">
<button onClick={() => onNavigate("home")}>Home</button>
<button onClick={() => onNavigate("wisata")}>Wisata</button>
<button onClick={() => onNavigate("profile")}>Profil</button>
</nav>
);
}