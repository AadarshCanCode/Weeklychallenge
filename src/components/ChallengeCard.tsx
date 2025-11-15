import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

import algoImg from "@/assets/algo.png";
import reactImg from "@/assets/react.png";
import codeReviewImg from "@/assets/codereview.png";
import apiImg from "@/assets/api.png";
import cssImg from "@/assets/css.png";
import dbImg from "@/assets/db.png";
import { Code2, Component, Users2, Server, Database, Palette, Flame, Trophy, Users, Clock } from "lucide-react";

export type Challenge = {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  participants: number;
  deadline: string;
  category: string;
  isActive: boolean;
  featured?: boolean;
};

interface ChallengeCardProps {
  challenge: Challenge;
  className?: string;
}

const difficultyColors = {
  Easy: "bg-success/10 text-success border-success/20",
  Medium: "bg-warning/10 text-warning border-warning/20",
  Hard: "bg-destructive/10 text-destructive border-destructive/20",
};

const categoryIcons = {
  Algorithms: Code2,
  Frontend: Component,
  Collaboration: Users2,
  Backend: Server,
  Database: Database,
  CSS: Palette,
};

const categoryImages: Record<string, string> = {
  algo: algoImg,
  algorithm: algoImg,
  algorithms: algoImg,
  react: reactImg,
  "code review": codeReviewImg,
  codereview: codeReviewImg,
  review: codeReviewImg,
  api: apiImg,
  css: cssImg,
  db: dbImg,
  database: dbImg,
};

const getCategoryIcon = (category: string, title: string) => {
  // Special handling for CSS challenges
  if (title.toLowerCase().includes("css") || title.toLowerCase().includes("animation")) {
    return categoryIcons.CSS;
  }
  return categoryIcons[category as keyof typeof categoryIcons] || Code2;
};

const getCategoryImage = (category: string, title: string) => {
  if (!category) return undefined;
  const key = category.toLowerCase();
  if (key in categoryImages) return categoryImages[key];
  // fallback via title keywords
  const t = title.toLowerCase();
  for (const k of Object.keys(categoryImages)) {
    if (t.includes(k)) return categoryImages[k];
  }
  return undefined;
};
export function ChallengeCard({ challenge, className }: ChallengeCardProps) {
  return (
    <div
      className={cn(
        "bento-card group relative overflow-hidden",
        challenge.featured && "border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.2)]",
        className
      )}
    >
      {challenge.featured && (
        <div className="absolute top-4 right-4">
          <Flame className="h-5 w-5 text-primary animate-glow-pulse" />
        </div>
      )}
      
      <div className="space-y-4">
        {/* Category Image / Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-2 overflow-hidden">
          {(() => {
            const imgSrc = getCategoryImage(challenge.category, challenge.title);
            if (imgSrc) {
              return <img src={imgSrc} alt={challenge.category} className="h-8 w-8 object-contain" />;
            }
            const IconComponent = getCategoryIcon(challenge.category, challenge.title);
            return <IconComponent className="h-6 w-6 text-primary" />;
          })()}
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge className={cn("challenge-badge border", difficultyColors[challenge.difficulty])}>
              {challenge.difficulty}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-primary font-bold">
            <Trophy className="h-4 w-4" />
            <span>{challenge.points}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {challenge.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {challenge.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{challenge.participants}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{challenge.deadline}</span>
          </div>
        </div>
        
        <Button 
          className="w-full rounded-full bg-primary hover:bg-primary-dark transition-all"
          disabled={!challenge.isActive}
        >
          {challenge.isActive ? "Join Challenge" : "Coming Soon"}
        </Button>
      </div>
    </div>
  );
}
