import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Target, Zap, Star, TrendingUp } from "lucide-react";
import Squares from "@/components/ui/Squares";

export function ProgressTracker() {
  const stats = [
    {
      icon: Target,
      label: "Challenges Completed",
      value: 8,
      total: 12,
      percentage: 67,
      color: "text-primary",
    },
    {
      icon: Zap,
      label: "Current Streak",
      value: 5,
      total: 7,
      percentage: 71,
      color: "text-warning",
    },
    {
      icon: Star,
      label: "Total Points",
      value: 1850,
      total: 2500,
      percentage: 74,
      color: "text-success",
    },
  ];

  const [isDarkModeState, setIsDarkModeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasDarkClass = document.documentElement.classList.contains('dark');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return hasDarkClass || (!document.documentElement.classList.contains('light') && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    const checkDarkMode = () => {
      const hasDarkClass = document.documentElement.classList.contains('dark');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkModeState(hasDarkClass || (!document.documentElement.classList.contains('light') && prefersDark));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  return (
    <section id="progress" className="py-20 px-4 relative overflow-hidden">
      {!isDarkModeState && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Squares
            squareSize={80}
            speed={0.3}
            direction="diagonal"
            borderColor="rgba(150, 150, 150, 0.25)"
            hoverFillColor="rgba(100, 100, 100, 0.1)"
            isDarkMode={false}
          />
        </div>
      )}
      {isDarkModeState && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Squares
            squareSize={80}
            speed={0.3}
            direction="diagonal"
            borderColor="rgba(255, 255, 255, 0.15)"
            hoverFillColor="rgba(255, 255, 255, 0.08)"
            isDarkMode={true}
          />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 dark:from-black dark:via-black/50 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto max-w-6xl relative z-20 pointer-events-none">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your <span className="gradient-text">Progress</span>
          </h2>
          <p className="text-muted-foreground">
            Track your journey and celebrate your achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up pointer-events-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bento-card space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-full bg-primary/10 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-2xl font-bold">
                    {stat.value}
                    <span className="text-sm text-muted-foreground ml-1">
                      / {stat.total}
                    </span>
                  </div>
                </div>
              </div>
              <Progress value={stat.percentage} className="h-2" />
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-success" />
                <span>{stat.percentage}% complete</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bento-card text-center animate-slide-up pointer-events-auto">
          <div className="space-y-4">
            <div className="inline-flex p-4 rounded-full bg-primary/10">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Keep Going! 🎉</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              You're in the top 15% of all participants. Complete 4 more challenges to reach the top 10%!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const Trophy = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
