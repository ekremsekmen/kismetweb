import dynamic from 'next/dynamic';
import HeroSectionPremium from "@/components/landing/HeroSectionPremium";
import MarqueePremium from "@/components/landing/MarqueePremium";
import { HorizontalScrollSkeleton, AnatomySkeleton } from "@/components/ui/skeleton";

// Lazy load below-the-fold components with skeleton loaders
const HorizontalProductScroll = dynamic(
  () => import("@/components/landing/HorizontalProductScroll"),
  { 
    ssr: true,
    loading: () => <HorizontalScrollSkeleton />
  }
);

const AnatomyOfSafetyPremium = dynamic(
  () => import("@/components/landing/AnatomyOfSafetyPremium"),
  { 
    ssr: true,
    loading: () => <AnatomySkeleton />
  }
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
