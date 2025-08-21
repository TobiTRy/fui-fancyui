'use client';

import { TModalStatus } from '@/types/TModalStatus';
import { calcPositionInPercent } from '@/utils/functions/calcPositionInPercent';
import { useEffect, useState } from 'react';

/**
 * Custom hook for managing SwipeUpModal height animations
 * Handles smooth transitions when modal content height changes
 */
export function useSwipeUpModalHeightAnimation({
  heightRecalculationTrigger,
  statusModal,
  windowHeight,
  contentRef,
  scalingSection,
  initialHeightRef,
  setModalPosition,
  setContentHeight,
  modalPosition,
}: {
  heightRecalculationTrigger?: number;
  statusModal: TModalStatus | 'opening';
  windowHeight: number;
  contentRef: React.RefObject<HTMLDivElement>;
  scalingSection: React.RefObject<HTMLDivElement>;
  initialHeightRef: React.MutableRefObject<number>;
  setModalPosition: (position: number) => void;
  setContentHeight: (height: number) => void;
  modalPosition: number;
}) {
  const [isHeightTransitioning, setIsHeightTransitioning] = useState(false);

  // Recalculate height when heightRecalculationTrigger changes
  useEffect(() => {
    if (heightRecalculationTrigger && heightRecalculationTrigger > 0 && statusModal === 'open') {
      // Enable smooth transition
      setIsHeightTransitioning(true);

      // Use requestAnimationFrame for immediate but smooth execution
      requestAnimationFrame(() => {
        const actualContentHeight = contentRef?.current?.offsetHeight ?? 0;
        const scalingSectionHeight = scalingSection.current?.offsetHeight ?? 0;

        // Follow the same logic as the original opening calculation
        const minHeight = Math.min(actualContentHeight + scalingSectionHeight, windowHeight);
        const position = calcPositionInPercent(minHeight, windowHeight);

        initialHeightRef.current = minHeight;
        setModalPosition(position);

        // Use the same formula as in handleOpeningAndClosing
        setContentHeight(windowHeight - actualContentHeight + scalingSectionHeight / 2);

        // Disable smooth transition after animation completes
        setTimeout(() => {
          setIsHeightTransitioning(false);
        }, 300); // Match transition duration
      });
    }
  }, [
    heightRecalculationTrigger,
    statusModal,
    windowHeight,
    modalPosition,
    contentRef,
    scalingSection,
    initialHeightRef,
    setModalPosition,
    setContentHeight,
  ]);

  return {
    isHeightTransitioning,
  };
}
