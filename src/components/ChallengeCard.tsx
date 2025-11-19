import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

import algoImage from "@/assets/algo.png";
import reactImage from "@/assets/react.png";
import codeReviewImage from "@/assets/codereview.png";
import apiImage from "@/assets/api.png";
import cssImage from "@/assets/css.png";
import dbImage from "@/assets/db.png";
import { Code2, Component, Users2, Server, Database, Palette, Flame, Trophy, Users, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const getCategoryBackground = (category: string, title: string) => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("algorithm")) {
    return {
      image: algoImage,
    };
  }

  if (lowerTitle.includes("css") || lowerTitle.includes("animation")) {
    return {
      image: cssImage,
    };
  }

  if (lowerTitle.includes("react") || (category === "Frontend" && lowerTitle.includes("component"))) {
    return {
      image: reactImage,
    };
  }

  if (lowerTitle.includes("api") || category === "Backend") {
    return {
      image: apiImage,
    };
  }

  if (category === "Database" || lowerTitle.includes("database")) {
    return {
      image: dbImage,
    };
  }

  if (category === "Collaboration" || lowerTitle.includes("review")) {
    return {
      image: codeReviewImage,
    };
  }

  return {
    image: algoImage,
  };
};

const getCategoryIcon = (category: string, title: string) => {
  // Special handling for CSS challenges
  if (title.toLowerCase().includes("css") || title.toLowerCase().includes("animation")) {
    return categoryIcons.CSS;
  }
  return categoryIcons[category as keyof typeof categoryIcons] || Code2;
};

export function ChallengeCard({ challenge, className }: ChallengeCardProps) {
  const { image } = getCategoryBackground(challenge.category, challenge.title);
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "bento-card group relative overflow-hidden p-0 flex flex-col",
        challenge.featured && "border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.2)]",
        className
      )}
    >
      {challenge.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Flame className="h-5 w-5 text-primary animate-glow-pulse" />
        </div>
      )}
      
      <div className="relative h-40 w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="space-y-4 p-6">
       
        
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
          onClick={() => navigate('/event')}
        >
          {challenge.isActive ? "Join Challenge" : "Coming Soon"}
          
        </Button>
      </div>
    </div>
  );
}
