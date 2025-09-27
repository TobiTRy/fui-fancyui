import { combineClasses, getSpacingClass } from '@/utils/tailwind-bridge';

/**
 * Get container classes for inline layout
 * Creates a flex column container with appropriate spacing
 */
export function getContainerClasses(
  wide: boolean,
  gapTitleDescription: number,
  hasContent: boolean,
  hasDescription: boolean
): string {
  const baseClasses = ['flex', 'flex-col', 'text-left'];

  // Add width class
  if (wide) {
    baseClasses.push('w-full');
  } else {
    baseClasses.push('w-fit');
  }

  // Add gap between title row and description if both exist
  if (hasContent && hasDescription) {
    const gapClass = getSpacingClass(gapTitleDescription, 'gap');
    baseClasses.push(gapClass);
  }

  return combineClasses(...baseClasses);
}

/**
 * Get inline row classes for icon + title
 */
export function getInlineRowClasses(gapIconTitle: number, hasIcon: boolean, hasTitle: boolean): string {
  const inlineRowClasses = ['flex', 'flex-row', 'items-center'];

  // Add gap between icon and title if both exist
  if (hasIcon && hasTitle) {
    const gapClass = getSpacingClass(gapIconTitle, 'gap');
    inlineRowClasses.push(gapClass);
  }

  return combineClasses(...inlineRowClasses);
}

/**
 * Get element wrapper classes for inline elements
 */
export function getElementWrapperClasses(): string {
  return combineClasses(['flex', 'items-center']);
}

/**
 * Get description wrapper classes for full width description
 */
export function getDescriptionWrapperClasses(): string {
  return combineClasses(['flex', 'items-center', 'w-full']);
}
