import { combineClasses, getSpacingClass } from '@/utils/tailwind-bridge';

/**
 * Get container classes for row layout
 * Arranges all elements horizontally in a single row
 */
export function getContainerClasses(wide: boolean, gapBetweenElements: number, hasMultipleElements: boolean): string {
  const baseClasses = ['flex', 'flex-row', 'items-center', 'text-left'];

  // Add width class
  if (wide) {
    baseClasses.push('w-full');
  } else {
    baseClasses.push('w-fit');
  }

  // Add gap between elements
  if (hasMultipleElements) {
    const gapClass = getSpacingClass(gapBetweenElements, 'gap');
    baseClasses.push(gapClass);
  }

  return combineClasses(...baseClasses);
}

/**
 * Get element wrapper classes for row layout elements
 */
export function getElementWrapperClasses(): string {
  return combineClasses(['flex', 'items-center']);
}
