import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ChallengeGrid } from "@/components/ChallengeGrid";
import MagicBento from "@/components/MagicBento";
import { Footer } from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <Hero />
      <ChallengeGrid />
      <MagicBento />
      <Footer />
    </div>;
};
export default Index;