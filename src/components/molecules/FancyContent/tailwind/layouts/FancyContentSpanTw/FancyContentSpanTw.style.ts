import { combineClasses, getSpacingClass } from '@/utils/tailwind-bridge';

/**
 * Get container classes for span layout
 * Creates a 2-column grid where icon spans both title and description rows
 */
export function getContainerClasses(wide: boolean): string {
  const baseClasses = ['grid', 'text-left'];

  // Add width class
  if (wide) {
    baseClasses.push('w-full');
  } else {
    baseClasses.push('w-fit');
  }

  return combineClasses(...baseClasses);
}

/**
 * Get grid configuration classes based on content and alignment
 */
export function getGridClasses(
  hasIcon: boolean,
  hasTitle: boolean,
  hasDescription: boolean,
  alignIcon: 'left' | 'right',
  gapIconContent: number,
  gapTitleDescription: number
): string {
  const gridClasses = [];

  if (hasIcon && (hasTitle || hasDescription)) {
    if (alignIcon === 'right') {
      // Right-aligned icon: [content] [icon]
      gridClasses.push('grid-cols-[1fr_auto]');
      gridClasses.push('grid-rows-[auto_auto]');
    } else {
      // Left-aligned icon: [icon] [content]
      gridClasses.push('grid-cols-[auto_1fr]');
      gridClasses.push('grid-rows-[auto_auto]');
    }

    // Add gap between icon and content
    const gapClass = getSpacingClass(gapIconContent, 'gap');
    gridClasses.push(gapClass);
  } else {
    // No icon, just stack text elements
    gridClasses.push('grid-cols-1');
    if (hasTitle && hasDescription) {
      gridClasses.push('grid-rows-[auto_auto]');
      const gapClass = getSpacingClass(gapTitleDescription, 'gap');
      gridClasses.push(gapClass);
    } else {
      gridClasses.push('grid-rows-[auto]');
    }
  }

  return combineClasses(...gridClasses);
}

/**
 * Get icon wrapper classes for span layout (spans both rows)
 */
export function getIconWrapperClasses(): string {
  return combineClasses(['row-span-2', 'flex', 'items-center', 'justify-center']);
}

/**
 * Get title wrapper classes for span layout
 */
export function getTitleWrapperClasses(): string {
  return combineClasses(['flex', 'items-center']);
}

/**
 * Get description wrapper classes for span layout
 */
export function getDescriptionWrapperClasses(hasTitle: boolean, hasIcon: boolean, gapTitleDescription: number): string {
  const classes = ['flex', 'items-center'];

  // Add top margin if there's both title and description and no icon gap to handle
  if (hasTitle && !hasIcon) {
    const marginClass = getSpacingClass(gapTitleDescription, 'mt');
    classes.push(marginClass);
  }

  return combineClasses(classes);
}
