import React from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Zap, Target } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function LandingHero() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-background dark:bg-black overflow-hidden">
      <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center w-full h-full bg-transparent">
        
        <div className="container mx-auto max-w-7xl relative z-20 px-4 py-20 md:py-0">
          <div className="text-center space-y-8 animate-fade-in">
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-4 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-base font-semibold text-primary">Game Mode ON</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-foreground drop-shadow-2xl leading-tight">
              Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Challenges</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Level up your skills with gamified challenges. Compete, learn, and earn rewards while mastering new concepts.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all scale-100 hover:scale-105">
                <Trophy className="mr-2 h-6 w-6" />
                View Challenges
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-primary/20 bg-background/50 backdrop-blur-md hover:bg-primary/10 hover:border-primary/50">
                <Target className="mr-2 h-6 w-6" />
                Track Progress
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-16 text-foreground">
              <div className="space-y-2 p-6 rounded-3xl bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors border border-white/5">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">1,234</div>
                <div className="text-lg text-muted-foreground font-medium">Active Users</div>
              </div>
              <div className="space-y-2 p-6 rounded-3xl bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors border border-white/5">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">48</div>
                <div className="text-lg text-muted-foreground font-medium">Challenges</div>
              </div>
              <div className="space-y-2 p-6 rounded-3xl bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors border border-white/5">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">15K</div>
                <div className="text-lg text-muted-foreground font-medium">Points Earned</div>
              </div>
            </div>
            
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default LandingHero;