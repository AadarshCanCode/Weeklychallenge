import { Trophy, Medal, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type LeaderboardEntry = {
  rank: number;
  name: string;
  points: number;
  challengesCompleted: number;
  avatar: string;
};

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Alex Chen", points: 2450, challengesCompleted: 12, avatar: "AC" },
  { rank: 2, name: "Sarah Kumar", points: 2280, challengesCompleted: 11, avatar: "SK" },
  { rank: 3, name: "Mike Johnson", points: 2150, challengesCompleted: 10, avatar: "MJ" },
  { rank: 4, name: "Emily Zhang", points: 1980, challengesCompleted: 9, avatar: "EZ" },
  { rank: 5, name: "David Park", points: 1850, challengesCompleted: 9, avatar: "DP" },
];

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-warning" />;
      case 2:
        return <Medal className="h-5 w-5 text-muted-foreground" />;
      case 3:
        return <Award className="h-5 w-5 text-warning" />;
      default:
        return <span className="font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  return (
    <section id="leaderboard" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Leaderboard</span>
          </h2>
          <p className="text-muted-foreground">
            Top performers this week
          </p>
        </div>
        
        <div className="bento-card space-y-4 animate-slide-up">
          {leaderboardData.map((entry, index) => (
            <div
              key={entry.rank}
              className={`flex items-center justify-between p-4 rounded-lg transition-all hover:bg-accent/50 ${
                index < 3 ? "border border-primary/20 bg-primary/5" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 flex items-center justify-center">
                  {getRankIcon(entry.rank)}
                </div>
                
                <Avatar className="h-10 w-10 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {entry.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-semibold">{entry.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {entry.challengesCompleted} challenges completed
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {entry.points}
                </div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
