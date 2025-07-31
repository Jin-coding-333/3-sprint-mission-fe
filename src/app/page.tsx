import BottomSection from "@/pages/landing/components/BottomSection";
import HeroSection from "@/pages/landing/components/HeroSection";
import ServiceIntro1 from "@/pages/landing/components/serviceIntroSection/ServiceIntro1";
import ServiceIntro2 from "@/pages/landing/components/serviceIntroSection/ServiceIntro2";
import ServiceIntro3 from "@/pages/landing/components/serviceIntroSection/ServiceIntro3";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServiceIntro1 />
      <ServiceIntro2 />
      <ServiceIntro3 />
      <BottomSection />
    </div>
  );
}
