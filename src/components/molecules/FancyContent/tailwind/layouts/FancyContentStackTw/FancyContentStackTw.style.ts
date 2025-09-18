import { combineClasses, getSpacingClass } from '@/utils/tailwind-bridge';

/**
 * Get container classes for stack layout
 * Stacks all elements vertically in a single column with center alignment
 */
export function getContainerClasses(wide: boolean, gapBetweenIcon: number, rowCount: number): string {
  const baseClasses = ['flex', 'flex-col', 'items-center', 'text-center'];

  // Add width class
  if (wide) {
    baseClasses.push('w-full');
  } else {
    baseClasses.push('w-fit');
  }

  // Add gap between elements
  if (rowCount > 1) {
    const gapClass = getSpacingClass(gapBetweenIcon, 'gap');
    baseClasses.push(gapClass);
  }

  return combineClasses(...baseClasses);
}

/**
 * Get icon wrapper classes for stack layout
 */
export function getIconWrapperClasses(): string {
  return combineClasses(['flex', 'items-center', 'justify-center']);
}

/**
 * Get title wrapper classes for stack layout
 */
export function getTitleWrapperClasses(): string {
  return combineClasses(['flex', 'items-center', 'justify-center', 'text-center']);
}

/**
 * Get description wrapper classes for stack layout
 */
export function getDescriptionWrapperClasses(): string {
  return combineClasses(['flex', 'items-center', 'justify-center', 'text-center']);
}

/**
 * Get text classes with center alignment for child elements
 */
export function getTextClasses(existingClassName?: string): string {
  return combineClasses('text-center', existingClassName || '');
}
