import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TTextAlignLRC, TAlignItemsValues, TComponentSizesMid } from '@/types';

// Import types from restructured components
export type { TFancyContentTwIconProps } from './components/FancyContentIconTw';
export type { TFancyContentTwTitleProps } from './components/FancyContentTitleTw';
export type { TFancyContentTwDescriptionProps } from './components/FancyContentDescriptionTw';

// Base props shared by all FancyContent layouts
export type TFancyContentTwBase = {
  /** Layout mode for the content */
  layoutMode?: 'normal' | 'stack' | 'row' | 'span' | 'inline' | 'auto';
  /** Content elements */
  children?: React.ReactNode;
  /** Theme color type */
  themeType?: TUiColorsNotTransparent;
  /** Color layer */
  layer?: TLayer;
  /** Position of icon relative to content */
  alignIcon?: 'left' | 'right';
  /** Horizontal alignment of all content */
  justify?: TTextAlignLRC;
  /** Vertical alignment of all content */
  align?: TAlignItemsValues;
  /** If true, the content will be full width */
  wide?: boolean;
  /** Size of the content component */
  sizeC?: TComponentSizesMid;
  /** Additional CSS classes */
  className?: string;
};

// Specific props for Stack layout (vertical stacking)
export type TFancyContentStackTwProps = TFancyContentTwBase & {
  /** Gap between icon and title using Tailwind spacing scale */
  gapIconTitle?: number;
  /** Gap between title and description using Tailwind spacing scale */
  gapTitleDescription?: number;
};

// Specific props for Normal layout (2x2 grid)
export type TFancyContentNormalTwProps = TFancyContentTwBase & {
  /** Gap between icon and title (horizontal) using Tailwind spacing scale */
  gapIconTitle?: number;
  /** Gap between title and description (vertical) using Tailwind spacing scale */
  gapTitleDescription?: number;
};

// Specific props for Row layout (horizontal row)
export type TFancyContentRowTwProps = TFancyContentTwBase & {
  /** Gap between all elements in the row using Tailwind spacing scale */
  gapBetweenElements?: number;
};

// Specific props for Span layout (icon spans both rows)
export type TFancyContentSpanTwProps = TFancyContentTwBase & {
  /** Gap between icon and content block using Tailwind spacing scale */
  gapIconContent?: number;
  /** Gap between title and description using Tailwind spacing scale */
  gapTitleDescription?: number;
};

// Specific props for Inline layout (icon and title inline)
export type TFancyContentInlineTwProps = TFancyContentTwBase & {
  /** Gap between icon and title using Tailwind spacing scale */
  gapIconTitle?: number;
  /** Gap between title row and description using Tailwind spacing scale */
  gapTitleDescription?: number;
};

// Main FancyContent type that includes all possible props for auto-layout detection
export type TFancyContentTw = TFancyContentTwBase & {
  // Legacy props for backward compatibility with auto-layout
  /** @deprecated Use layout-specific props instead */
  gapBetweenText?: number;
  /** @deprecated Use layout-specific props instead */
  gapBetweenIcon?: number;

  // New specific props - these will be used by individual layouts
  /** Gap between icon and title (used by Stack, Normal, Inline layouts) */
  gapIconTitle?: number;
  /** Gap between title and description (used by Stack, Normal, Span, Inline layouts) */
  gapTitleDescription?: number;
  /** Gap between all elements in a row (used by Row layout) */
  gapBetweenElements?: number;
  /** Gap between icon and content block (used by Span layout) */
  gapIconContent?: number;
};

// HTML attribute types for each layout
export type TFancyContentStackTwHTMLAttrs = TFancyContentStackTwProps & React.HTMLAttributes<HTMLDivElement>;
export type TFancyContentNormalTwHTMLAttrs = TFancyContentNormalTwProps & React.HTMLAttributes<HTMLDivElement>;
export type TFancyContentRowTwHTMLAttrs = TFancyContentRowTwProps & React.HTMLAttributes<HTMLDivElement>;
export type TFancyContentSpanTwHTMLAttrs = TFancyContentSpanTwProps & React.HTMLAttributes<HTMLDivElement>;
export type TFancyContentInlineTwHTMLAttrs = TFancyContentInlineTwProps & React.HTMLAttributes<HTMLDivElement>;

export type TFancyContentTwHTMLAttrs = TFancyContentTw & React.HTMLAttributes<HTMLDivElement>;

// Backwards compatibility aliases for existing code
export type { TFancyContentTwTitleProps as TFancyContentTwTextProps } from './components/FancyContentTitleTw';
