import React, { useEffect, useState } from "react";

interface EventTimerProps {
  startDate: string;
  label?: string;
}

export default function EventTimer({ startDate, label = "Time left:" }: EventTimerProps) {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    if (!startDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(startDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setCountdown("0:00");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(
        `${hours > 0 ? hours + "h " : ""}${minutes}m ${seconds}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <p className="text-[0.9rem] text-foreground">
      {label} <span className="text-primary font-medium">{countdown}</span>
    </p>
  );
}