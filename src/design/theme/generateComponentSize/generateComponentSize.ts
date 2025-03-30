/**
 * Size calculator that follows an alternating ratio pattern:
 * - Even steps use a 1.5x multiplier
 * - Odd steps use a 1.33x multiplier
 * Starting with a base size of 16px at level 1
 */

/**
 * Calculates the size at a given level using alternating ratios
 * @param level - The level number (1-based index)
 * @param withPx - Whether to return the value with 'px' suffix
 * @param baseSize - The starting size (default: 16)
 * @returns The calculated size for the given level, as a string with 'px' or as a number
 */
export function generateComponentSize<T extends boolean>(
  level: number,
  withPx?: T,
  baseSize: number = 16
): T extends true ? string : number {
  // Initialize with base size
  let currentSize = baseSize;

  // Calculate size for level > 1
  if (level > 1) {
    // Calculate size based on alternating multipliers
    for (let i = 2; i <= level; i++) {
      // Apply 1.5x multiplier for even steps in the pattern (2->3, 4->5, etc.)
      // Apply 1.33x multiplier for odd steps in the pattern (3->4, 5->6, etc.)
      const multiplier = i % 2 === 0 ? 1.5 : 1.33;
      currentSize = currentSize * multiplier;
    }
  }

  // Round to nearest integer to avoid decimal pixels
  const rounded = Math.round(currentSize);

  // Use a type guard to help TypeScript understand the return type
  if (withPx) {
    return (rounded + 'px') as T extends true ? string : number;
  } else {
    return rounded as T extends true ? string : number;
  }
}

/**
 * Get a mapping of level numbers to their corresponding sizes
 * @param maxLevel - The maximum level to calculate
 * @param withPx - Whether to return sizes with 'px' suffix
 * @param baseSize - The starting size (default: 16)
 * @returns An object mapping level numbers to sizes (either numbers or strings with 'px')
 */
export function getComponentSizeMap<T extends boolean>(
  maxLevel: number,
  withPx?: T,
  baseSize: number = 16
): Record<number, T extends true ? string : number> {
  // Create the map with the appropriate type
  const sizeMap = {} as Record<number, T extends true ? string : number>;

  // Populate the map with calculated sizes for each level
  for (let level = 1; level <= maxLevel; level++) {
    sizeMap[level] = generateComponentSize(level, withPx, baseSize);
  }

  return sizeMap;
}
/**
 * Example usage
 */
// Generate sizes for levels 1-8
// const sizes = getComponentSizeMap(8);
// console.log('Sizes by level:', sizes);

// // Calculate specific levels
// console.log('Level 1 =', generateComponentSize(1)); // 16
// console.log('Level 2 =', generateComponentSize(2)); // 24
// console.log('Level 3 =', generateComponentSize(3)); // 32
// console.log('Level 4 =', generateComponentSize(4)); // 48
// console.log('Level 5 =', generateComponentSize(5)); // 64
// console.log('Level 6 =', generateComponentSize(6)); // 96
