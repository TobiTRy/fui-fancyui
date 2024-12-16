'use client';

import { useEffect, useState } from 'react';
import { TBreakPoints, TBreakPointsSizes } from '@/types/TBreakPoints';
import { themeStore } from '@/design/theme/themeStore';

export const useActiveBreakpoint = (breakpoints?: TBreakPoints) => {
  const [activeBreakpoint, setActiveBreakpoint] = useState<TBreakPointsSizes | null>(null);
  const theme = themeStore((state) => state.theme);

  useEffect(() => {
    const handleResize = () => {
      setActiveBreakpoint(getActiveBreakpoint(breakpoints || theme.breakpoints));
    };

    window.addEventListener('resize', handleResize);

    // Call once to set initial breakpoint
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints, theme]); // Re-evaluate on breakpoints change

  return activeBreakpoint;
};

// Helper to get the active breakpoint based on media query matches
const getActiveBreakpoint = (breakpoints?: TBreakPoints) => {
  if (!breakpoints) return null;

  // Using find instead of map
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const match = Object.entries(breakpoints).find(([_, query]) => {
    return window.matchMedia(query).matches;
  });

  // Return the id if found, null otherwise
  return match ? (match[0] as TBreakPointsSizes) : null;
};
