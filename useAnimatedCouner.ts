import { useEffect, useState } from 'react';

export const useAnimatedCounter = (endValue: number, duration: number = 1000, startValue: number = 0) => {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const currentValue = Math.floor(startValue + progress * (endValue - startValue));

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId); // clean up on unmount
  }, [endValue, duration, startValue]);

  return displayValue;
};
