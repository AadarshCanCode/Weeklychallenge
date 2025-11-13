import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Trophy, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

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
