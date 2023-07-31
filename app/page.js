import HeroSection from "../components/hero";
import OffersSection from "@/components/offers";
import ResultsSection from "@/components/results";
import ContactInfoSection from "@/components/contact";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <OffersSection />
      <ResultsSection />
      <ContactInfoSection />
    </main>
  );
}
