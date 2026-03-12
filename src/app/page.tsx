import IntroOverlay from "@/components/IntroOverlay";
import SceneCanvas from "@/components/SceneCanvas";
import HeroOverlay from "@/components/HeroOverlay";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <main className="site-shell">
      <SmoothScroll />
      <IntroOverlay />
      <SceneCanvas />
      <HeroOverlay />
      <div className="scroll-space" />
    </main>
  );
}
