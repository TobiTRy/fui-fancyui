import type { TLayer } from '@/types/TLayer';
import type { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import type { TComponentSizesMid } from '@/types';
import type { TTypographyVariants } from '@/types/TTypographyVariants';
import type { TypographyList } from '@/components/atoms/Typography/Typography.style';

/**
 * Props interface for FancyContentTitleTw component
 *
 * Defines the component props that map to Typography while maintaining
 * the FancyContent-specific API. Extends Typography functionality.
 */
export type TFancyContentTwTitleProps = {
  /** Size of the text component that determines font size and styling */
  sizeC?: TComponentSizesMid;
  /** Font weight for the title text */
  fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Custom font variant override from design system */
  fontVariant?: TTypographyVariants;
  /** HTML element type to render (semantic markup) */
  type?: keyof typeof TypographyList;
  /** Custom line height override */
  lineHeight?: string;
  /** Theme color type for text styling */
  themeType?: TUiColorsNotTransparent;
  /** Color layer for theme colors (0-9) */
  layer?: TLayer;
  /** Additional CSS classes to apply */
  className?: string;
  /** Text content or React nodes */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;
