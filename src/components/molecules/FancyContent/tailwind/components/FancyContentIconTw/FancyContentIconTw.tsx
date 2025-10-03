import React from 'react';
import { css } from 'styled-components';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import type { TFancyContentTwIconProps } from './FancyContentIconTw.model';
import { sizes } from '../../../sizeSettings';
import { themeStore } from '@/design/theme/themeStore';

/**
 * FancyContentIconTw - Tailwind version of FancyContentIcon
 *
 * A flexible icon component for use within FancyContent layouts.
 * Uses FancySVGAtom for consistent icon rendering with the design system.
 *
 * Features:
 * - Responsive sizing based on component size variants
 * - Optional padding control for different layout needs
 * - Flexible content support for SVG icons and React components
 * - Consistent styling integration with FancyContent layout system
 * - Leverages existing FancySVGAtom for design system consistency
 *
 * @param sizeC Component size that determines icon dimensions and padding
 * @param noPadding Remove default padding around the icon
 * @param themeType Theme color for the icon
 * @param layer Color layer for theme colors
 * @param className Additional CSS classes for custom styling
 * @param children Icon content (usually SVG elements or React components)
 */
export default function FancyContentIconTw(props: TFancyContentTwIconProps) {
  const { children, sizeC = 'md', noPadding = false, themeType, layer, className, ...htmlProps } = props;

  const theme = themeStore((state) => state.theme);
  const sizeSettings = sizes[sizeC];

  return (
    <FancySVGAtom
      isPassive
      sizeC={sizeSettings.iconSize}
      themeType={themeType}
      layer={layer}
      className={className}
      externalStyle={css`
        flex-shrink: 0;
        padding: ${noPadding ? '0' : sizeSettings.iconPadding && theme.spacing[sizeSettings.iconPadding]};
        width: ${sizeSettings.iconHeight};
        height: ${sizeSettings.iconHeight};
      `}
      {...htmlProps}
    >
      {children}
    </FancySVGAtom>
  );
}
