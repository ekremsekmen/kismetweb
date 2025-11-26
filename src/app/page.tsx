import dynamic from 'next/dynamic';
import HeroSectionPremium from "@/components/landing/HeroSectionPremium";
import MarqueePremium from "@/components/landing/MarqueePremium";

// Lazy load below-the-fold components for better initial load
const HorizontalProductScroll = dynamic(
  () => import("@/components/landing/HorizontalProductScroll"),
  { ssr: true }
);

const AnatomyOfSafetyPremium = dynamic(
  () => import("@/components/landing/AnatomyOfSafetyPremium"),
  { ssr: true }
);

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
