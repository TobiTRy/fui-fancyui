'use client';
import React from 'react';

import { TTypography } from '@/components/atoms/Typography/Typography.model';
import { themeStore } from '@/design/theme/themeStore';
import { TGenerateStyle } from './Typography.style';
import { generateFontVariants } from './utils/TypographyStyleVariants';
import { mapVariantToElement } from './utils/mapVariantToElement';

// --------------------------------------------------------------------------- //
// The Typography component can render differnet elements with different styles//
// ------------- like a "h4 can have the style of a p" ----------------------- //
export default function Typography(props: TTypography) {
  const {
    elType,
    variant = 'bodytextMd',
    children,
    externalStyle,
    themeType,
    layer,
    lineHeight,
    fontWeight,
    letterSpacing,
    textAlign,
    ...htmlProps
  } = props;
  // get the theme font sizes
  const themeFonts = themeStore((state) => state.theme.fontSizes);

  // generate the Typography component based on the variant or type prop;
  const ComponentElement = mapVariantToElement(variant, elType) as React.FC<TGenerateStyle>;

  // get the variant style based on the variant prop or the type prop;
  const fontVariants = generateFontVariants({ themeFonts, lineHeight, fontWeight, letterSpacing });

  return (
    <ComponentElement
      $textAlign={textAlign}
      $variant={fontVariants[variant]}
      $themeType={themeType}
      $layer={layer}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </ComponentElement>
  );
}
