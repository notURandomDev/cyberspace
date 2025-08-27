import { HomePageCreditsSection } from "./credits-section";
import { GridSection } from "./grid-section";
import { HomePageHeroSection } from "./hero-section";

export default function Home() {
  return (
    <section className="container max-w-6xl py-8 px-6 flex-grow flex mx-auto justify-center">
      <div className="w-full">
        <HomePageHeroSection />
        <GridSection />
        <HomePageCreditsSection />
      </div>
    </section>
  );
}
