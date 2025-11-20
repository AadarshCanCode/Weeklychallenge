import React, { useState, useEffect } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text"; 

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2500; 
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(timer);
          if (onComplete) onComplete();
          return 100;
        }
        return prevCount + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white font-mono">
      
      <div className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter">
        <EncryptedText 
            text="Welcome to Weekly challenge" 
            className="text-white"
            revealDelayMs={74}
            flipDelayMs={30}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-6xl font-bold tracking-widest">
          {count}%
        </span>
        
        <span className="text-xs text-gray-500 uppercase tracking-[0.5em] animate-pulse">
            {count === 100 ? "System Ready" : "Decrypting..."}
        </span>
      </div>

    </div>
  );
};

export default Loader;