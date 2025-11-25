import React from "react";
import { ArrowRight } from "lucide-react";

const EventDetails: React.FC = () => {
  return (
    <div className="space-y-6 bg-background">
      <p className="text-muted-foreground text-[1rem] mt-5 leading-relaxed italic">
        “Race through logic and precision. Every second counts in the world of algorithms.”
      </p>
      <p className="text-foreground text-[1rem] leading-relaxed">
        DSA Sprint is a high-intensity hiring simulation built to test how you think, code, and optimize under pressure.
        Inspired by real tech interviews, this challenge pushes your mastery of data structures, algorithms, and problem-solving speed.
      </p>
      <p className="text-foreground text-[1rem] leading-relaxed">
        Tackle time-bound problems across arrays, graphs, recursion, and dynamic programming. Each crafted to evaluate both accuracy and approach.
        Track your progress, climb the leaderboard, and experience what it feels like to compete at the level of top tech candidates.
      </p>
      <p className="text-foreground text-[1rem] leading-relaxed font-semibold">
        💻Can you keep up the pace and sprint your way to the top?
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-4">Objectives:</h3>
      <ul className="list-disc list-inside text-muted-foreground text-[1rem] leading-relaxed space-y-1">
        <li>Assess participants' problem-solving skills under time constraints</li>
        <li>Help students prepare for interview-level DSA problems</li>
        <li>Foster a competitive environment with leaderboards</li>
        <li>Encourage clarity in approach, code efficiency, and correctness</li>
      </ul>

      <button className="flex items-center gap-1.5 cursor-pointer w-fit text-primary hover:underline font-semibold mt-3">
        Register now <ArrowRight className="h-4 w-4 mt-1" />
      </button>
    </div>
  );
};

export default EventDetails;