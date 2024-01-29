import React from 'react';
import { CSSProp } from 'styled-components';

import { TGenerateStyle, TypographyList } from './Typography.style';
import { themeStore } from '@/design/theme/themeStore';
import { generateFontVariants } from './utils/TypographyStyleVariants';
import { TTypography } from '@/components/atoms/Typography/Typography.model';

// --------------------------------------------------------------------------- //
// The Typography component can render differnet elements with different styles//
// ------------- like a "h4 can have the style of a p" ----------------------- //
export default function Typography(props: TTypography) {
  const { type, variant, children, weight, externalStyle, themeType, layer, addLineHeight, ...htmlProps } = props;
  // get the theme font sizes
  const themeFonts = themeStore((state) => state.theme.fontSizes);

  // generate the Typography component based on the type prop;
  const Component = TypographyList[type ?? 'caption'] as React.FC<TGenerateStyle>;

  // get the variant style based on the variant prop or the type prop;
  const fontVariants = generateFontVariants(themeFonts, addLineHeight);

  // get the variant style based on the variant prop or the type prop;
  const variantStyle = variant ? fontVariants[variant] : (fontVariants[type || 'caption'] as CSSProp);

  return (
    <Component
      $variant={variantStyle}
      $themeType={themeType}
      $layer={layer}
      $externalStyle={externalStyle}
      $weight={weight}
      {...htmlProps}
    >
      {children}
    </Component>
  );
}
