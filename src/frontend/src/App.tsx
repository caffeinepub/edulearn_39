import CTABand from "./components/CTABand";
import CoursesSection from "./components/CoursesSection";
import HeroSection from "./components/HeroSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import StatsBar from "./components/StatsBar";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseSection from "./components/WhyChooseSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <HeroSection />
        <StatsBar />
        <CoursesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTABand />
      </main>
      <SiteFooter />
    </div>
  );
}
