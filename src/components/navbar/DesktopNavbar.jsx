export default function DesktopNavbar({ onNavigate }) {
return (
<nav className="hidden md:flex bg-blue-700 text-white p-4 gap-6">
<button onClick={() => onNavigate("home")}>Home</button>
<button onClick={() => onNavigate("wisata")}>Wisata</button>
<button onClick={() => onNavigate("profile")}>Profil</button>
</nav>
);
}