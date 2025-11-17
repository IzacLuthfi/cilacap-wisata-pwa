import { WisataData } from "../data/wisata";
import HeroSection from "../components/home/HeroSection";
import FeaturedPantaiSection from "../components/home/FeaturedPantaiSection";
import FeaturedSejarahSection from "../components/home/FeaturedSejarahSection";
import FeaturedPulauSection from "../components/home/FeaturedPulauSection";

export default function HomePage() {
  const pantai = WisataData.pantai.list.slice(0, 3);
  const sejarah = WisataData.sejarah.list.slice(0, 3);
  const pulau = WisataData.pulau.list.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-10">
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        <FeaturedPantaiSection pantai={pantai} />
        <FeaturedSejarahSection sejarah={sejarah} />
        <FeaturedPulauSection pulau={pulau} />
      </main>
    </div>
  );
}
