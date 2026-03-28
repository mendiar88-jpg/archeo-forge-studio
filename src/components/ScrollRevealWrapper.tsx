import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ScrollRevealWrapper = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;
