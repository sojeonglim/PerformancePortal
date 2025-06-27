import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CountdownTimer from "@/components/countdown-timer";
import AboutSection from "@/components/about-section";
import CastSection from "@/components/cast-section";
import QuoteGenerator from "@/components/quote-generator";
import ShowDetails from "@/components/show-details";
import PromoVideo from "@/components/promo-video";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CountdownTimer />
      <AboutSection />
      <CastSection />
      <QuoteGenerator />
      <ShowDetails />
      <PromoVideo />

      <Footer />
    </div>
  );
}
