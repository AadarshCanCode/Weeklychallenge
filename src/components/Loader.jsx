import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; 
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevCount + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (count / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      
      <div className="relative flex items-center justify-center">
        
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 w-48 h-48"></div>
        
        {/* SVG Circle */}
        <svg className="transform -rotate-90 w-40 h-40 relative z-10">
          {/* Background track - subtle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="3"
            fill="transparent"
          />
          
          {/* Progress circle with glow */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-75 ease-linear drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(244,63,94,1)) drop-shadow(0 0 12px rgba(244,63,94,0.6))'
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Counter text */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <span className="text-4xl font-bold text-white font-mono tracking-wider">
            {count}
          </span>
        </div>
      </div>

      {/* Optional loading text - remove if you want it cleaner like the reference */}
      <div className="mt-12 text-center opacity-60">
        <p className="text-xs tracking-[0.3em] text-gray-400 font-light uppercase">
          System Initializing
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Loading Repository Modules...
        </p>
      </div>
    </div>
  );
};

export default Loader;