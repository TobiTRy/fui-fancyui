// Clamp a number between a minimum and maximum value
export const clampNumbers = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};
