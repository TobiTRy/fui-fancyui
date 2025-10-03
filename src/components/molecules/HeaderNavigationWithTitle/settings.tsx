import type { TSizeSettings } from '@/types/TSizeSettings';
import type { TComponentSizesMid } from '@/types/TComponentSizes';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TButton } from '@/components/molecules/Button/Button.model';
import { SVGChevronLeft, SVGChevronRight } from '@/components/icons';

/**
 * Configuration object that defines the size mapping for different component elements.
 * Contains button size and title typography size for each size variant.
 */
type TSizeObj = {
  buttonSize: TComponentSizesMid;
  titleSize: TTypographyVariants;
};

/**
 * Size configuration settings for the HeaderNavigationWithTitle component.
 * Maps component sizes (sm, md, lg) to their corresponding button sizes and typography variants.
 * This ensures consistent sizing across all elements within the navigation header.
 */
export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    buttonSize: 'xs',
    titleSize: 'bodytextSm',
  },
  md: {
    buttonSize: 'sm',
    titleSize: 'bodytextMd',
  },
  lg: {
    buttonSize: 'md',
    titleSize: 'bodytextLg',
  },
};

/**
 * Icon configuration for navigation directions in the header component.
 * Provides consistent chevron icons for back and forward navigation actions.
 * These icons are used in the navigation buttons to indicate direction of movement.
 */
export const NAVIGATION_ICONS: Record<'back' | 'forward', React.ReactNode> = {
  back: <SVGChevronLeft />,
  forward: <SVGChevronRight />,
};

/**
 * Default button properties for navigation buttons in the header component.
 * Provides consistent styling and behavior for all navigation buttons.
 * Uses transparent theme with primary hover color for subtle visual feedback.
 */
export const defaultButtonProps: TButton = {
  themeType: 'transparent',
  layer: 4,
  hoverColor: 'primary',
};
