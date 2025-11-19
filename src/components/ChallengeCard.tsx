import { useNavigate } from "react-router-dom";
import { Code2, Component, Users2, Server, Database, Palette, Flame, Trophy, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import algoImage from "@/assets/algo.png";
import reactImage from "@/assets/react.png";
import codeReviewImage from "@/assets/codereview.png";
import apiImage from "@/assets/api.png";
import cssImage from "@/assets/css.png";
import dbImage from "@/assets/db.png";

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
  Easy: "bg-green-500/10 text-green-400 border-green-500/20",
  Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Hard: "bg-red-500/10 text-red-400 border-red-500/20",
};

const getCategoryBackground = (category: string, title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("algorithm")) return { image: algoImage };
  if (lowerTitle.includes("css") || lowerTitle.includes("animation")) return { image: cssImage };
  if (lowerTitle.includes("react") || (category === "Frontend" && lowerTitle.includes("component"))) return { image: reactImage };
  if (lowerTitle.includes("api") || category === "Backend") return { image: apiImage };
  if (category === "Database" || lowerTitle.includes("database")) return { image: dbImage };
  if (category === "Collaboration" || lowerTitle.includes("review")) return { image: codeReviewImage };
  return { image: algoImage };
};

export function ChallengeCard({ challenge, className }: ChallengeCardProps) {
  const { image } = getCategoryBackground(challenge.category, challenge.title);
  const navigate = useNavigate();

  return (
    <Card
      className={cn(
        "group relative overflow-hidden flex flex-col border-white/5 bg-gray-950",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:scale-[1.02]", 
        "hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)]",
        "hover:border-blue-500/50",
        challenge.featured && "border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]",
        
        className
      )}
    >
      {challenge.featured && (
        <div className="absolute top-4 right-4 z-20">
          <Flame className="h-5 w-5 text-blue-400 animate-pulse drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        </div>
      )}

      <div className="relative h-40 w-full overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
      </div>

      <CardHeader className="space-y-4 p-6 pb-2">
        <div className="flex items-start justify-between gap-4">
          <Badge className={cn("border backdrop-blur-sm", difficultyColors[challenge.difficulty])}>
            {challenge.difficulty}
          </Badge>
          <div className="flex items-center gap-1 text-blue-400 font-bold drop-shadow-sm">
            <Trophy className="h-4 w-4" />
            <span>{challenge.points}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors drop-shadow-md">
            {challenge.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {challenge.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="px-6 py-2">
        <div className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-blue-200/70 transition-colors">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{challenge.participants}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{challenge.deadline}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-4 mt-auto">
        <Button 
          className={cn(
            "w-full rounded-full font-semibold transition-all duration-300",
            "bg-blue-600 text-white hover:bg-blue-500",
            "shadow-lg shadow-blue-900/20 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          )}
          disabled={!challenge.isActive}
          onClick={() => navigate('/event')}
        >
          {challenge.isActive ? "Join Challenge" : "Coming Soon"}
        </Button>
      </CardFooter>
    </Card>
  );
}