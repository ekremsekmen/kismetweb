import HeroSectionPremium from "@/components/landing/HeroSectionPremium";
import MarqueePremium from "@/components/landing/MarqueePremium";
import HorizontalProductScroll from "@/components/landing/HorizontalProductScroll";
import AnatomyOfSafetyPremium from "@/components/landing/AnatomyOfSafetyPremium";

export default function Home() {
  return (
    <div className="relative w-full">
      <HeroSectionPremium />
      <MarqueePremium />
      <HorizontalProductScroll />
      <AnatomyOfSafetyPremium />
    </div>
  );
}
