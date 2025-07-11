import { useEffect, useState } from 'react';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export function useDay(): TimeOfDay {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');

  useEffect(() => {
    const updateTimeOfDay = () => {
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDay('morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        setTimeOfDay('afternoon');
      } else if (currentHour >= 17 && currentHour < 21) {
        setTimeOfDay('evening');
      } else {
        setTimeOfDay('night');
      }
    };

    // Update immediately
    updateTimeOfDay();

    // Set up interval to update every minute
    const intervalId = setInterval(updateTimeOfDay, 60000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return timeOfDay;
}