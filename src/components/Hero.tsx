import { Button } from "@/components/ui/button";
import { Trophy, Zap, Target } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Week 12 • 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Weekly <span className="gradient-text">Challenges</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Level up your skills with gamified challenges. Compete, learn, and earn rewards while mastering new concepts.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all">
              <Trophy className="mr-2 h-5 w-5" />
              View Challenges
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border/50 hover:border-primary/50">
              <Target className="mr-2 h-5 w-5" />
              Track Progress
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1,234</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">48</div>
              <div className="text-sm text-muted-foreground">Challenges</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15K</div>
              <div className="text-sm text-muted-foreground">Points Earned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
