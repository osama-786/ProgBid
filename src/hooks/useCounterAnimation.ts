import { useState, useEffect, useRef } from "react";

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCounterAnimation = ({
  end,
  duration = 2000,
  startOnView = true,
}: UseCounterAnimationProps) => {
  // Update state type to accept string (for decimals) or number
  const [count, setCount] = useState<string | number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0); // Reset count when leaving view
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentVal = easeOutQuart * end;

      // --- LOGIC UPDATE START ---
      // Check if 'end' has decimals (like 1.5)
      if (end % 1 !== 0) {
        // If it's a decimal, format it to 1 decimal place (e.g., "1.5")
        setCount(currentVal.toFixed(1));
      } else {
        // If it's a whole number, round it down (e.g., 100)
        setCount(Math.floor(currentVal));
      }
      // --- LOGIC UPDATE END ---

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return { count, ref };
};