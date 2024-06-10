import { useEffect, useState } from 'react';
import { TBreakpoint } from '@/types/TBreakPoint';

export const useActiveBreakpoint = (breakpoints?: TBreakpoint[]) => {
  // Helper to get the active breakpoint based on media query matches
  const getActiveBreakpoint = (): string | null => {
    if (!breakpoints) return null;

    for (const breakpoint of breakpoints) {
      if (window.matchMedia(breakpoint.query).matches) {
        return breakpoint.id;
      }
    }
    return null; // No match found
  };

  const [activeBreakpoint, setActiveBreakpoint] = useState<string | null>(getActiveBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setActiveBreakpoint(getActiveBreakpoint());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]); // Re-evaluate on breakpoints change

  return activeBreakpoint;
};
