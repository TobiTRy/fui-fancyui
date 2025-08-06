/**
 * Calculate position as percentage based on current position and total height
 * Used for SwipeUpModal position calculations
 *
 * @param currentPos - Current position value
 * @param height - Total height value
 * @returns Position as percentage
 */
export const calcPositionInPercent = (currentPos: number, height: number): number => {
  return ((height - currentPos) / height) * 100;
};
