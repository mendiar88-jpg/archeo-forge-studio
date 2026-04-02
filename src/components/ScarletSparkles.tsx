import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const ScarletSparkles = ({ count = 6 }: { count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generate = () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 4,
        duration: 1.5 + Math.random() * 2,
      }));
    setSparkles(generate());
    const interval = setInterval(() => setSparkles(generate()), 5000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: "hsl(14 100% 57%)",
            boxShadow: `0 0 ${s.size * 2}px hsl(0 100% 50%), 0 0 ${s.size * 4}px hsl(14 100% 57% / 0.5)`,
            animation: `sparkle-bloom ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default ScarletSparkles;
