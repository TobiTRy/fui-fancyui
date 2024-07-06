import { useEffect, useState } from 'react';
import { TBreakpoint } from '@/types/TBreakPoint';
import { TBreakPoints } from '@/types/TBreakPoints';

export const useActiveBreakpoint = (breakpoints?: TBreakpoint[]) => {
  const [activeBreakpoint, setActiveBreakpoint] = useState<TBreakPoints | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setActiveBreakpoint(getActiveBreakpoint(breakpoints));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]); // Re-evaluate on breakpoints change

  return activeBreakpoint;
};

// Helper to get the active breakpoint based on media query matches
const getActiveBreakpoint = (breakpoints?: TBreakpoint[]) => {
  if (!breakpoints) return null;

  for (const breakpoint of breakpoints) {
    if (window.matchMedia(breakpoint.query).matches) {
      return breakpoint.id;
    }
  }
  return null; // No match found
};
