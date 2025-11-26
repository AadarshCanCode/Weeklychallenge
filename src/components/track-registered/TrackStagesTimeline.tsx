import React from "react";
import { Calendar, Clock, Award, ArrowRight } from "lucide-react";

const StagesTimeline: React.FC = () => {
  const handleAttempt = (stage: string) => {
    // placeholder: replace with navigation or attempt flow
    if (typeof window !== "undefined") {
      window.alert(`Starting attempt for ${stage}`);
    }
  };

  return (
    <div className="bg-card shadow-md rounded-xl md:p-6 pl-2 border border-border">
      <div className="relative py-5">
        {/* Vertical Line */}
        <div className="absolute left-5 md:left-7 top-10 bottom-30 md:bottom-20 w-px bg-primary/30"></div>
        
        {/* Stage 1 */}
        <div className="flex items-start mb-15 relative">
          <div className="flex items-center justify-center bg-primary rounded-xl w-10 md:w-14 h-10 md:h-14 z-10 relative">
            <Clock className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="px-4 md:px-6 flex-1">
            <div className="flex items-start justify-between">
              <div className="pr-4">
                <h3 className="text-lg font-semibold text-foreground">Stage 1: Online Assessment</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground my-1">
                  <span>25th Oct</span>
                  <span>• 45-60 minutes</span>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleAttempt("Stage 1")}
                  className="bg-primary text-primary-foreground font-medium py-1 px-3 rounded-md hover:bg-primary/90 transition"
                >
                  Attempt now
                </button>
              </div>
            </div>
            <div className="text-foreground/80 text-sm leading-relaxed mt-3">
              <p className="mb-2">
                <span className="font-semibold text-foreground">Format:</span> 30 Multiple Choice Questions covering DSA theory (arrays, stacks, recursion)
              </p>
              <p className="mb-1">
                <span className="font-semibold text-foreground">Objective:</span> Evaluate problem-solving speed, analytical thinking, and fundamental technical knowledge.
              </p>
              <p>
                <span className="font-semibold text-foreground">Outcome:</span> Top scorers (scores &gt;50%) qualify for the next round: Coding Test.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stage 2 */}
        <div className="flex items-start mb-15 relative">
          <div className="flex items-center justify-center bg-primary rounded-xl w-10 md:w-14 h-10 md:h-14 z-10 relative">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="px-4 md:px-6 flex-1">
            <div className="flex items-start justify-between">
              <div className="pr-4">
                <h3 className="text-lg font-semibold text-foreground">Stage 2: Coding Test</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground my-1">
                  <span>27th Oct</span>
                  <span>• 90 minutes</span>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleAttempt("Stage 2")}
                  className="bg-primary text-primary-foreground font-medium py-1 px-3 rounded-md hover:bg-primary/90 transition"
                >
                  Attempt now
                </button>
              </div>
            </div>
            <div className="text-foreground/80 text-sm leading-relaxed mt-3">
              <p className="mb-2">
                <span className="font-semibold text-foreground">Format:</span> Solve 3 coding problems based on Arrays & Strings, Recursion/Backtracking, Sorting/Searching, Data Structures (Stacks, Queues, Linked List)
              </p>
              <p className="mb-1">
                <span className="font-semibold text-foreground">Objective:</span> Test logical clarity, algorithmic design, and code optimization skills under time pressure.
              </p>
              <p>
                <span className="font-semibold text-foreground">Outcome:</span> Top performers (solving ≥1 problem) move to the final AI Interview Round.
              </p>
            </div>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="flex items-start mb-15 relative">
          <div className="flex items-center justify-center bg-primary rounded-xl w-10 md:w-14 h-10 md:h-14 z-10 relative">
            <Clock className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="px-4 md:px-6 flex-1">
            <div className="flex items-start justify-between">
              <div className="pr-4">
                <h3 className="text-lg font-semibold text-foreground">Stage 3: AI Interview Simulation</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground my-1">
                  <span>29th, 30th Oct</span>
                  <span>• 15-20 minutes per candidate</span>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleAttempt("Stage 3")}
                  className="bg-primary text-primary-foreground font-medium py-1 px-3 rounded-md hover:bg-primary/90 transition"
                >
                  Attempt now
                </button>
              </div>
            </div>
            <div className="text-foreground/80 text-sm leading-relaxed mt-3">
              <p className="mb-2">
                <span className="font-semibold text-foreground">Format:</span> AI-driven interview simulation covering coding round questions and core technical domains. Instant feedback on communication, reasoning, and confidence.
              </p>
              <p className="mb-1">
                <span className="font-semibold text-foreground">Objective:</span> Replicate real-world HR & technical interviews, allowing participants to assess placement readiness.
              </p>
              <p>
                <span className="font-semibold text-foreground">Outcome:</span> Final leaderboard and performance report shared. Top scorers receive recognition, potential internships, and placement drive experience. Minimum 70% in AI interview required to be “Interview Ready”.
              </p>
            </div>
          </div>
        </div>
        
        {/* Final Stage */}
        <div className="flex items-start mb-0 relative">
          <div className="flex items-center justify-center bg-primary rounded-xl w-10 md:w-14 h-10 md:h-14 z-10 relative">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="px-4 md:px-6 flex-1">
            <div className="flex items-start justify-between">
              <div className="pr-4">
                <h3 className="text-lg font-semibold text-foreground">Result Announcement</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground my-1">
                  <span>1st November</span>
                  <span>• instantaneous</span>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleAttempt("Result Announcement")}
                  className="bg-primary text-primary-foreground font-medium py-1 px-3 rounded-md hover:bg-primary/90 transition"
                >
                  Attempt now
                </button>
              </div>
            </div>
            <div className="text-foreground/80 text-sm leading-relaxed mt-3">
              <p>
                <span className="font-semibold text-foreground">Outcome:</span> Participants with leaderboard scores more than 70% will receive certificates to boost resumes and placement prospects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagesTimeline;
