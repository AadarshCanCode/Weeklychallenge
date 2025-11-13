import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ChallengeGrid } from "@/components/ChallengeGrid";
import { Leaderboard } from "@/components/Leaderboard";
import { ProgressTracker } from "@/components/ProgressTracker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ChallengeGrid />
      <Leaderboard />
      <ProgressTracker />
      
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 AceInt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
