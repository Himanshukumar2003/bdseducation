"use client";

import { useEffect, useMemo, useState } from "react";

function getTimeLeft(target) {
  const now = new Date().getTime();
  const diff = Math.max(0, target.getTime() - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad(n) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer() {
  // 👇 Set your fixed launch date here
  const targetDate = "2025-11-14T00:00:00"; // 30 days from today
  const target = useMemo(() => new Date(targetDate), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const isComplete =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="grid grid-cols-4 gap-3 text-center">
      {[
        { label: "Days", value: pad(timeLeft.days) },
        { label: "Hours", value: pad(timeLeft.hours) },
        { label: "Minutes", value: pad(timeLeft.minutes) },
        { label: "Seconds", value: pad(timeLeft.seconds) },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-md border bg-secondary text-secondary-foreground p-3"
        >
          <div className="text-2xl font-semibold tabular-nums">
            {item.value}
          </div>
          <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
        </div>
      ))}

      {isComplete && (
        <div className="col-span-4 text-center text-sm text-accent-foreground mt-2">
          🎉 Course Launch is Live!
        </div>
      )}
    </div>
  );
}
