import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "INITIALIZING NEXUS...",
    "LOADING ARCHIVES...",
    "DECRYPTING CODEX...",
    "SYSTEM ONLINE",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setPhase(0);
    else if (progress < 55) setPhase(1);
    else if (progress < 85) setPhase(2);
    else setPhase(3);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/40" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[hsl(var(--neon-crimson))]/40" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[hsl(var(--neon-crimson))]/40" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/40" />

      {/* Monogram */}
      <div className="relative mb-8">
        <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-[0.3em] neon-text-gold bloom-gold">
          D.A.M.
        </h1>
        <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      {/* Progress bar */}
      <div className="w-64 md:w-80 mb-4">
        <div className="h-px w-full bg-border overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-100 shadow-[0_0_10px_hsl(185_100%_50%_/_0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Phase text */}
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase neon-text-cyan">
        {phases[phase]}
      </p>
      <p className="font-mono text-[10px] tracking-wider text-bone-dim mt-2">
        [{progress}%]
      </p>
    </div>
  );
};

export default LoadingScreen;
