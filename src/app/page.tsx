import HeroSection from "@/components/landing/HeroSection";
import Marquee from "@/components/landing/Marquee";
import ProductShowcase from "@/components/landing/ProductShowcase";
import AnatomyOfSafety from "@/components/landing/AnatomyOfSafety";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex-col overflow-x-hidden">
      <HeroSection />
      <Marquee />
      <ProductShowcase />
      <AnatomyOfSafety />
    </div>
  );
}
