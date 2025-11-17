import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import WisataPage from "./pages/WisataPage";
import DetailWisataPage from "./pages/DetailWisataPage";
import ProfilePage from "./pages/ProfilePage";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import SplashScreen from "./pages/SplashScreen";

export default function App() {
  // Semua HOOK harus berada di atas, sebelum return apapun
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [detailId, setDetailId] = useState(null);

  // Setelah 0.5s baru matikan splashscreen (supaya animasi smooth)
  useEffect(() => {
    // SplashScreen akan memanggil onComplete → setLoading(false)
  }, []);

  const navigate = (p) => setPage(p);

  const openDetail = (id) => {
    setDetailId(id);
    setPage("detail");
  };

  const renderPage = () => {
    if (page === "home") return <HomePage />;
    if (page === "wisata") return <WisataPage onSelect={openDetail} />;
    if (page === "detail") return <DetailWisataPage id={detailId} />;
    if (page === "profile") return <ProfilePage />;
  };

  // return untuk splash harus DI BAWAH setelah semua hook tercatat
  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <DesktopNavbar onNavigate={navigate} />
      {renderPage()}
      <MobileNavbar onNavigate={navigate} />
    </div>
  );
}
