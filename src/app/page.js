import HeroSection from "@/components/hero/page";
import FeaturedAnimals from "@/components/hero/featured/page";
import QurbaniTips from "@/components/hero/tips/page";
import TopBreeds from "@/components/hero/breeds/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedAnimals />
      <QurbaniTips />
      <TopBreeds />
    </main>
  );
}