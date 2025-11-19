import React, { useState, useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Zap, Target } from "lucide-react";
import  FaultyTerminal  from "./ui/FaultyTerminal";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      if (progress < duration) {
        const percentage = progress / duration;
        const easeOut = 1 - Math.pow(1 - percentage, 3); 
        
        setCount(Math.floor(end * easeOut));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return count.toLocaleString();
};


export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#ffffff"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="container mx-auto max-w-7xl relative z-20 px-6 py-20">
        <div className="text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border-2 border-emerald-500/50 backdrop-blur-sm shadow-lg shadow-emerald-500/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold text-emerald-400 tracking-wide">Game Mode ON</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none text-white drop-shadow-2xl">
              Weekly
            </h1>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 drop-shadow-2xl">
                Challenges
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium pt-4">
            Level up your skills with gamified challenges. Compete, learn, and earn rewards while mastering new concepts.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105 border-2 border-blue-400"
            >
              <Trophy className="mr-2 h-5 w-5" />
              View Challenges
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 py-6 text-base font-bold border-2 border-gray-700 bg-black/50 text-gray-300 backdrop-blur-md hover:bg-gray-900 hover:border-gray-600 transition-all hover:scale-105"
            >
              <Target className="mr-2 h-5 w-5" />
              Track Progress
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-blue-500/50 transition-all transform hover:scale-105">
                <div className="text-5xl font-black text-blue-500 mb-2">
                  <AnimatedCounter end={1234} />
                </div>
                <div className="text-base text-gray-400 font-semibold">Active Users</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-purple-500/50 transition-all transform hover:scale-105">
                <div className="text-5xl font-black text-purple-500 mb-2">
                  <AnimatedCounter end={48} />
                </div>
                <div className="text-base text-gray-400 font-semibold">Challenges</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-emerald-500/50 transition-all transform hover:scale-105">
                <div className="text-5xl font-black text-emerald-500 mb-2">
                  <AnimatedCounter end={15} />K
                </div>
                <div className="text-base text-gray-400 font-semibold">Points Earned</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;