import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Users, MapPin, Trophy, ArrowRight } from "lucide-react";
import EventTimer from "./TrackTimer";
import StagesTimeline from "./TrackStagesTimeline";
import EventDetails from "./TrackDetails";
import { Button } from "@/components/ui/button"; 

const EventPage: React.FC = () => {
  const location = useLocation();
  const isActive = location.state?.isActive ?? true;
  const stagesRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("stages");

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, key: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(key);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const sections = [
      { ref: stagesRef, key: "stages" },
      { ref: detailsRef, key: "details" },
      { ref: leaderboardRef, key: "leaderboard" }, 
    ];

    const scrollTop = containerRef.current.scrollTop;
    let current = "stages";

    for (const section of sections) {
      if (section.ref.current && section.ref.current.offsetTop - 100 <= scrollTop) {
        current = section.key;
      }
    }
    setActiveSection(current);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  // sample leaderboard data and current user's team
  const teams = [
    { rank: 1, name: "Team Innovate", score: 2450, badge: "🥇" },
    { rank: 2, name: "VisionX", score: 2380, badge: "🥈" },
    { rank: 3, name: "Brainwave", score: 2310, badge: "🥉" },
    { rank: 4, name: "VisionY", score: 2250 },
    { rank: 5, name: "BrainNotWave", score: 2180 },
    { rank: 6, name: "CodeCrafters", score: 2120 },
    { rank: 7, name: "AlgoMasters", score: 2050 },
    { rank: 8, name: "TechTitans", score: 1990 },
    { rank: 9, name: "DataDynamos", score: 1920 },
    { rank: 10, name: "LogicLords", score: 1850 },
  ];

  // Replace this with real user/team data from auth/context when available
  const userTeam = { rank: 12, name: "Your Team", score: 1500 };
  const userInTop = teams.some(t => t.name === userTeam.name || t.rank === userTeam.rank);

  return (
    <div className="flex flex-col md:flex-row bg-background text-foreground h-[calc(100vh-64px)]"> 
      
      <div ref={containerRef} className="flex-1 md:px-8 py-6 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-[2rem] font-bold text-center md:text-left text-foreground">DSA Sprint</p>
            <p className="text-muted-foreground mt-2 text-center md:text-left">
              Race through logic and precision - every second counts in the world of algorithms
            </p>
          </div>
          <span className="shadow-sm mt-4 md:mt-0 flex items-center justify-center gap-2 text-primary bg-primary/10 border border-primary/20 px-5 py-1.5 text-[0.9rem] rounded-md cursor-pointer">
            <div className="h-2.5 w-2.5 bg-primary animate-pulse rounded-full"></div>
            Pre-Placement Interviews
          </span>
        </div>

        <div className="details mt-6 border-b border-border flex justify-center md:justify-start gap-8 text-[0.9rem] md:text-[1rem] font-medium text-muted-foreground overflow-x-auto">
          <p
            className={`cursor-pointer pb-3 transition-colors ${
              activeSection === "stages"
                ? "border-b-2 border-primary text-primary"
                : "hover:text-primary"
            }`}
            onClick={() => scrollToSection(stagesRef, "stages")}
          >
            Stages & Timelines
          </p>
          <p
            className={`cursor-pointer pb-3 transition-colors ${
              activeSection === "details"
                ? "border-b-2 border-primary text-primary"
                : "hover:text-primary"
            }`}
            onClick={() => scrollToSection(detailsRef, "details")}
          >
            Details
          </p>
          <p
            className={`cursor-pointer pb-3 transition-colors ${
              activeSection === "leaderboard"
                ? "border-b-2 border-primary text-primary"
                : "hover:text-primary"
            }`}
            onClick={() => scrollToSection(leaderboardRef, "leaderboard")}
          >
            Leaderboard
          </p>
        </div>

        <div className="mt-8 space-y-8 px-3 md:px-0">
          <div ref={stagesRef}>
            <StagesTimeline isActive={isActive} />
          </div>

          <div ref={detailsRef} className="border border-border rounded-xl bg-card p-6">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Event Details</h2>
            <EventDetails/>
          </div>

          <div ref={leaderboardRef} className="border border-border rounded-xl bg-card p-6">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary"/> Leaderboard
            </h2>
              <div className="space-y-3">
                {teams.map((team) => {
                  const isUser = team.name === userTeam.name || team.rank === userTeam.rank;
                  return (
                    <div
                      key={team.rank}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                        team.rank <= 3
                          ? "bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30"
                          : "bg-muted/50 hover:bg-muted border border-border"
                      } ${isUser ? 'ring-2 ring-primary/20' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                            team.rank <= 3
                              ? "bg-primary text-primary-foreground text-lg"
                              : "bg-background text-muted-foreground"
                          }`}
                        >
                          {team.badge || team.rank}
                        </div>
                        <div>
                          <p className={`font-semibold ${
                            team.rank <= 3 ? "text-primary" : isUser ? "text-primary" : "text-foreground"
                          }`}>
                            {team.name}{isUser ? ' (You)' : ''}
                          </p>
                          <p className="text-sm text-muted-foreground">Score: {team.score}</p>
                        </div>
                      </div>
                      {team.rank <= 3 && (
                        <div className="text-2xl">{team.badge}</div>
                      )}
                    </div>
                  );
                })}

                {!userInTop && (
                  <>
                    <div className="h-px bg-border my-2" />
                    <div className="flex items-center justify-between p-4 rounded-lg bg-card/60 border border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold bg-background text-muted-foreground">
                          {userTeam.rank}
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{userTeam.name} <span className="text-sm text-muted-foreground">(You)</span></p>
                          <p className="text-sm text-muted-foreground">Score: {userTeam.score}</p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Rank #{userTeam.rank}</div>
                    </div>
                  </>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;