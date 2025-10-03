import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import type { TFancyContentTwDescriptionProps } from './FancyContentDescriptionTw.model';
import { sizes } from '../../../sizeSettings';

/**
 * FancyContentDescriptionTw - Tailwind version of FancyContentDescription
 *
 * A flexible description component for use within FancyContent layouts.
 * Uses the Typography component for consistent text rendering with the design system.
 *
 * Features:
 * - Responsive typography based on component size variants
 * - Flexible font weight control optimized for body text readability
 * - Custom font variant override support
 * - Theme-based color integration
 * - Semantic HTML element selection (span, h1-h6, p)
 * - Custom line height support for precise typography
 * - Layout-inherited text alignment for proper integration
 * - Default styling optimized for description/body text use cases
 * - Leverages existing Typography component for design system consistency
 *
 * @param sizeC Component size that determines font size and styling
 * @param fontWeight Font weight for the description text (defaults to normal)
 * @param fontVariant Custom font variant override from design system
 * @param type HTML element type to render for semantic markup
 * @param lineHeight Custom line height override for typography control
 * @param themeType Theme color type for consistent color integration
 * @param layer Color layer for theme colors (0-9 scale)
 * @param className Additional CSS classes for custom styling
 * @param children Text content or React nodes to display
 */
export default function FancyContentDescriptionTw(props: TFancyContentTwDescriptionProps) {
  const {
    sizeC = 'md',
    fontWeight = 'normal',
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
      variant={fontVariant || sizes[sizeC].fontSizeDescription}
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
