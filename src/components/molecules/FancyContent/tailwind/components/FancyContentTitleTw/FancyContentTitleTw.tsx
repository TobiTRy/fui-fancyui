import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import type { TFancyContentTwTitleProps } from './FancyContentTitleTw.model';
import { sizes } from '../../../sizeSettings';

/**
 * FancyContentTitleTw - Tailwind version of FancyContentTitle
 *
 * A flexible title component for use within FancyContent layouts.
 * Uses the Typography component for consistent text rendering with the design system.
 *
 * Features:
 * - Responsive typography based on component size variants
 * - Flexible font weight control from normal to bold
 * - Custom font variant override support
 * - Theme-based color integration
 * - Semantic HTML element selection (span, h1-h6, p)
 * - Custom line height support for precise typography
 * - Layout-inherited text alignment for proper integration
 * - Leverages existing Typography component for design system consistency
 *
 * @param sizeC Component size that determines font size and styling
 * @param fontWeight Font weight for the title text (normal, medium, semibold, bold)
 * @param fontVariant Custom font variant override from design system
 * @param type HTML element type to render for semantic markup
 * @param lineHeight Custom line height override for typography control
 * @param themeType Theme color type for consistent color integration
 * @param layer Color layer for theme colors (0-9 scale)
 * @param className Additional CSS classes for custom styling
 * @param children Text content or React nodes to display
 */
export default function FancyContentTitleTw(props: TFancyContentTwTitleProps) {
  const {
    sizeC = 'md',
    fontWeight = 'bold',
    fontVariant,
    type = 'span',
    lineHeight,
    themeType,
    layer = 0,
    className,
    children,
    ...htmlProps
  } = props;

  return (
    <Typography
      elType={type}
      variant={fontVariant || sizes[sizeC].fontSizeTitle}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      themeType={themeType}
      layer={layer}
      className={className}
      {...htmlProps}
    >
      {children}
    </Typography>
  );
}
