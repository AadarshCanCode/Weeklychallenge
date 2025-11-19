import { Hero } from "@/components/Hero";
import { ChallengeGrid } from "@/components/ChallengeGrid";
import MagicBento from "@/components/MagicBento";
import { Footer } from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen">
      <Hero />
      <ChallengeGrid />
      <MagicBento />
      <Footer />
    </div>;
};
export default Index;