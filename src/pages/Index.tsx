import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ChallengeGrid } from "@/components/ChallengeGrid";
import { WhyChooseAceInt } from "@/components/WhyChooseAceInt";
import { Footer } from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <Hero />
      <ChallengeGrid />
      <WhyChooseAceInt />
      <Footer />
    </div>;
};
export default Index;