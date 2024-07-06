import { useActiveBreakpoint } from '@/utils/hooks/useActiveBreakpoint';
import { TuseBreakpointComparison } from '@/utils/hooks/useBreakpointComparison';

// --------------------------------------------------------------------------- //
// ---------- this hook checks the situation of the breakpointId ------------- //
// --------------------------------------------------------------------------- //
export function useBreakpointComparison(props: TuseBreakpointComparison) {
  const { breakpointId, breakPoints } = props;

  // Get the active breakpoint
  const activeBreakpoint = useActiveBreakpoint(breakPoints);

  // If no active breakpoint is found, return null
  if (!activeBreakpoint) {
    return null; // Or throw an error, depending on your error handling strategy
  }

  // Compare the active breakpoint with the target breakpoint
  const activeIndex = breakPoints.findIndex((bp) => bp.id === activeBreakpoint);
  const targetIndex = breakPoints.findIndex((bp) => bp.id === breakpointId);

  // Return the comparison result
  if (activeIndex === -1 || targetIndex === -1) {
    throw new Error('Invalid breakpoint ID provided');
  }

  // Return the comparison result
  if (activeIndex === targetIndex) {
    return 'isEqual';
  } else if (activeIndex > targetIndex) {
    return 'isBigger';
  } else {
    return 'isSmaller';
  }
}
