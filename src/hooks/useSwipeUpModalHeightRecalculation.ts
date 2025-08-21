'use client';

import { useCallback } from 'react';

/**
 * Hook to trigger height recalculation for a SwipeUpModal
 *
 * @param modalId - The ID of the modal to recalculate height for
 * @param recalculateHeightFunction - The recalculateHeight function from the SwipeUpModal store
 * @returns A function that triggers height recalculation
 */
export function useSwipeUpModalHeightRecalculation(modalId: string, recalculateHeightFunction?: (id: string) => void) {
  const recalculateHeight = useCallback(() => {
    if (modalId && recalculateHeightFunction) {
      recalculateHeightFunction(modalId);
    }
  }, [modalId, recalculateHeightFunction]);

  return recalculateHeight;
}
