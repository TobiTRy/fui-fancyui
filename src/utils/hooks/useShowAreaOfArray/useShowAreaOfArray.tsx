'use client';

import { useMemo } from 'react';

import { TuseShowAreaOfArray } from '@/utils/hooks/useShowAreaOfArray/TuseShowAreaOfArray.model';

// --------------------------------------------------------------------------- //
// --------------------- this Hook gives back a part of a array -------------- //
// --------------------------------------------------------------------------- //
export default function useShowAreaOfArray<T>(props: TuseShowAreaOfArray<T>) {
  const { array, areaForward, areaBackward, areaStart = 0 } = props;

  const areaItems = useMemo(() => {
    if (array.length > 0) {
      // if areaStart is not set, it will be set to 0
      const startFallback = areaStart ? areaStart : 0;
      // if areaStart is negative, it will be set to 0
      const start = Math.max(0, startFallback - areaBackward);
      // create the end of the area
      const end = areaStart + (areaForward + 1);

      // split the part of the array
      return array.slice(start, end);
    }
    return [];
  }, [array, areaForward, areaBackward, areaStart]);

  return { areaItems };
}
