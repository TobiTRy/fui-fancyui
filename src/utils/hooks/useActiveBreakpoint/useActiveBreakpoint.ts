'use client';

import { useEffect, useState } from 'react';
import { TBreakPoints, TBreakPointsSizes } from '@/types/TBreakPoints';

export const useActiveBreakpoint = (breakpoints?: TBreakPoints) => {
  const [activeBreakpoint, setActiveBreakpoint] = useState<TBreakPointsSizes | null>(null);

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
const getActiveBreakpoint = (breakpoints?: TBreakPoints) => {
  if (!breakpoints) return null;

  Object.entries(breakpoints).map(([id, query]) => {
    if (window.matchMedia(query).matches) {
      return id;
    }
  });

  return null; // No match found
};
