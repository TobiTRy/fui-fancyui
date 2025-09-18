import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TTextAlignLRC, TAlignItemsValues, TComponentSizesMid } from '@/types';

// Import types from restructured components
export type { TFancyContentTwIconProps } from './components/FancyContentIconTw';
export type { TFancyContentTwTitleProps } from './components/FancyContentTitleTw';
export type { TFancyContentTwDescriptionProps } from './components/FancyContentDescriptionTw';

export type TFancyContentTw = {
  /** Layout mode for the content */
  layoutMode?: 'normal' | 'stack' | 'row' | 'span' | 'inline' | 'auto';
  /** Gap between text elements (title and description) using Tailwind spacing scale */
  gapBetweenText?: number;
  /** Gap between icon and content using Tailwind spacing scale */
  gapBetweenIcon?: number;
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

export type TFancyContentTwHTMLAttrs = TFancyContentTw & React.HTMLAttributes<HTMLDivElement>;

// Backwards compatibility aliases for existing code
export type { TFancyContentTwTitleProps as TFancyContentTwTextProps } from './components/FancyContentTitleTw';
