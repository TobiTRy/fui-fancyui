import type { TComponentSizesMid } from '@/types/TComponentSizes';
import type { TLayer } from '@/types/TLayer';
import type { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

/**
 * Props interface for FancyContentIconTw component
 *
 * Defines the component props that map to FancySVGAtom while maintaining
 * the FancyContent-specific API. Extends React HTML attributes.
 */
export type TFancyContentTwIconProps = {
  /** Component size that determines icon dimensions and padding */
  sizeC?: TComponentSizesMid;
  /** Remove default padding around the icon */
  noPadding?: boolean;
  /** Theme color type for the icon */
  themeType?: TUiColorsNotTransparent | 'inherit';
  /** Color layer for theme colors (0-9) */
  layer?: TLayer;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Icon content (usually SVG elements or React components) */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;
