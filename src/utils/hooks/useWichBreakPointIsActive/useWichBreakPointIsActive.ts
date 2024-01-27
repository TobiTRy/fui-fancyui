import { useEffect, useState } from 'react';
import { themeStore } from '@/design/theme/themeStore';
import { TBreakPoints } from 'lib';

export const useWichBreakPointIsActive = () => {
  const breakpoints = themeStore.getState().theme.breakpoints;

  // Helper function to get the current breakpoint
  const getCurrentBreakpoint = () => {
    if (window.matchMedia(breakpoints.xl).matches) {
      return 'xl';
    } else if (window.matchMedia(breakpoints.lg).matches) {
      return 'lg';
    } else if (window.matchMedia(breakpoints.md).matches) {
      return 'md';
    } else if (window.matchMedia(breakpoints.sm).matches) {
      return 'sm';
    } else {
      return 'xs';
    }
  };

  // State to store the current breakpoint
  const [activeBreakpoint, setActiveBreakpoint] = useState(getCurrentBreakpoint());

  useEffect(() => {
    // Update the breakpoint on window resize
    const handleResize = () => {
      setActiveBreakpoint(getCurrentBreakpoint());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeBreakpoint as TBreakPoints;
};
