/**
 * Advanced TypeScript spacing calculator with conditional return type
 * Uses conditional types to automatically infer the return type
 * based on the withPx parameter, without using 'any' type
 */

/**
 * Defines the return type based on the withPx parameter
 */
type SpacingResult<T extends boolean> = T extends true ? string : number;

/**
 * Calculates spacing value based on a step number with dynamic return type
 * @param step - The step in the spacing scale (1, 2, 3, etc.)
 * @param withPx - When true, returns string with 'px' suffix; when false, returns number
 * @returns Either a number or a string with 'px' suffix based on withPx parameter
 */
export function generateSpacingSize<T extends boolean = false>(step: number, withPx?: T): SpacingResult<T> {
  // Validate input
  if (typeof step !== 'number' || step < 1 || !Number.isInteger(step)) {
    throw new Error('Step must be a positive integer');
  }

  // Calculate the pixel value
  let pixelValue: number;

  // Base value is 2px (step 1)
  if (step === 1) {
    pixelValue = 2;
  }
  // Step 2: Double the base (2px × 2 = 4px)
  else if (step === 2) {
    pixelValue = 4;
  }
  // Step 3: Double again (4px × 2 = 8px)
  else if (step === 3) {
    pixelValue = 8;
  }
  // Step 4: Double again (8px × 2 = 16px)
  else if (step === 4) {
    pixelValue = 16;
  }
  // Steps 5-6: Add 8px per step
  else if (step >= 5 && step <= 6) {
    pixelValue = 16 + (step - 4) * 8;
  }
  // Steps 7 and beyond: Add 16px per step
  else {
    pixelValue = 32 + (step - 6) * 16;
  }

  // Return based on withPx parameter using type assertion with the conditional type
  return (withPx ? `${pixelValue}px` : pixelValue) as SpacingResult<T>;
}
