import { HomePageCreditsSection } from "./credits-section";
import { GridSection } from "./grid-section";
import { HomePageHeroSection } from "./hero-section";

export default function Home() {
  return (
    <div className="w-full">
      <HomePageHeroSection />
      <GridSection />
      <HomePageCreditsSection />
    </div>
  );
}
