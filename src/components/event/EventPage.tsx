import React, { useRef, useState, useEffect } from "react";
import { Calendar, Users, MapPin, Trophy, ArrowRight } from "lucide-react";
import EventTimer from "./EventTimer";
import StagesTimeline from "./StagesTimeline";
import EventDetails from "./EventDetails";
import FAQ1 from "./FAQ1";
import { Button } from "@/components/ui/button"; 

const EventPage: React.FC = () => {
  const stagesRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const prizesRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
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
      { ref: prizesRef, key: "prizes" }, 
      { ref: faqsRef, key: "faqs" },
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
              activeSection === "faqs"
                ? "border-b-2 border-primary text-primary"
                : "hover:text-primary"
            }`}
            onClick={() => scrollToSection(faqsRef, "faqs")}
          >
            FAQs
          </p>
        </div>

        <div className="mt-8 space-y-8 px-3 md:px-0">
          <div ref={stagesRef}>
            <StagesTimeline/>
          </div>

          <div ref={detailsRef} className="border border-border rounded-xl bg-card p-6">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">Event Details</h2>
            <EventDetails/>
          </div>

          <div ref={faqsRef} className="border border-border rounded-xl bg-card p-6">
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">FAQs</h2>
            <FAQ1/>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[340px] md:sticky md:top-0 md:h-[calc(100vh-64px)] overflow-y-auto scrollbar-hide border-t md:border-t-0 md:border-l border-border bg-background md:bg-background/50 md:backdrop-blur-sm flex flex-col justify-between">
        <div className="p-6 space-y-6">
          <div className="mt-5">
            <button className="w-full flex items-center justify-center gap-2 group bg-primary text-primary-foreground font-medium py-2 rounded-lg hover:bg-primary/90 transition cursor-pointer shadow-lg shadow-primary/20">
              Register
              <ArrowRight className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1"/>
            </button>
            <div className="mt-3 text-muted-foreground text-center">
              <EventTimer startDate="2025-10-20T19:00:00" label="Event starts in : "/>
            </div>
          </div>

          <div className="border border-border rounded-xl p-5 shadow-sm bg-card">
            <div className="flex items-center justify-between text-[1rem] text-muted-foreground mb-4">
              <span className="flex items-center gap-2 text-card-foreground">
                <Users className="w-4 h-4 text-primary" /> Registered
              </span>
              <p>748</p>
            </div>
            <div className="flex items-center justify-between text-[1rem] text-muted-foreground my-4">
              <span className="flex items-center gap-2 text-card-foreground">
                <Users className="w-4 h-4 text-primary" /> Team Size
              </span>
              <p>1 - 4 Members</p>
            </div>
            <div className="flex items-center justify-between text-[1rem] text-muted-foreground">
              <span className="flex items-center gap-2 text-card-foreground">
                <Trophy className="w-4 h-4 text-primary" /> Impressions
              </span>
              <p>4,31,277</p>
            </div>
          </div>

          <div className="border border-border rounded-xl p-5 shadow-sm bg-card">
            <p className="font-bold text-primary mb-3 flex items-center gap-2 uppercase"> 
              <Trophy className="text-primary"/> Leaderboard
            </p>
            <ul className="text-[0.9rem] text-muted-foreground space-y-5 mt-5">
              <li>1. Team Innovate</li>
              <li>2. VisionX</li>
              <li>3. Brainwave</li>
              <li>4. VisionY</li>
              <li>5. BrainNotWave</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border text-xs text-center py-3 text-muted-foreground">
          © 2025 AceInt
        </div>
      </div>
    </div>
  );
};

export default EventPage;