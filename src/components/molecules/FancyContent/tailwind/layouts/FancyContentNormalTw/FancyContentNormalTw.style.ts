import { combineClasses, getSpacingClass } from '@/utils/tailwind-bridge';

/**
 * Get container classes for normal layout (2x2 grid)
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
  gapBetweenIcon: number,
  gapBetweenText: number
): string {
  const gridClasses = [];

  if (hasIcon && hasTitle && hasDescription) {
    // Full 2x2 grid
    if (alignIcon === 'right') {
      gridClasses.push('grid-cols-[1fr_auto]');
      gridClasses.push('grid-rows-[auto_auto]');
    } else {
      gridClasses.push('grid-cols-[auto_1fr]');
      gridClasses.push('grid-rows-[auto_auto]');
    }

    // Add gap between icon and content
    const gapClass = getSpacingClass(gapBetweenIcon, 'gap');
    gridClasses.push(gapClass);

    // Add gap between text elements
    const textGapClass = `gap-y-${gapBetweenText}`;
    gridClasses.push(textGapClass);
  } else if (hasIcon && (hasTitle || hasDescription)) {
    // Single row with icon
    if (alignIcon === 'right') {
      gridClasses.push('grid-cols-[1fr_auto]');
    } else {
      gridClasses.push('grid-cols-[auto_1fr]');
    }
    gridClasses.push('grid-rows-[auto]');

    const gapClass = getSpacingClass(gapBetweenIcon, 'gap');
    gridClasses.push(gapClass);
  } else if (hasTitle && hasDescription) {
    // Text only, stacked
    gridClasses.push('grid-cols-1');
    gridClasses.push('grid-rows-[auto_auto]');

    const gapClass = getSpacingClass(gapBetweenText, 'gap');
    gridClasses.push(gapClass);
  } else {
    // Single element
    gridClasses.push('grid-cols-1');
    gridClasses.push('grid-rows-[auto]');
  }

  return combineClasses(...gridClasses);
}

/**
 * Get icon wrapper classes for normal layout
 */
export function getIconWrapperClasses(): string {
  return combineClasses(['flex', 'items-center', 'justify-center']);
}

/**
 * Get title wrapper classes for normal layout
 */
export function getTitleWrapperClasses(): string {
  return combineClasses(['flex', 'items-center']);
}

/**
 * Get description wrapper classes for normal layout
 */
export function getDescriptionWrapperClasses(hasIcon: boolean, hasTitle: boolean): string {
  const classes = ['flex', 'items-center'];

  if (hasIcon && hasTitle) {
    classes.push('col-span-2');
  } else {
    classes.push('col-span-1');
  }

  return combineClasses(classes);
}
