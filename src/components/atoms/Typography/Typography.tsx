import React from 'react';
import { CSSProp, css } from 'styled-components';

import { IStyledComponentProps, TypographyList } from './TypographyFontVariations.style';
import { themeStore } from '@/design/theme/themeStore';
import { generateFontVariants } from './TypographyStyleVariants';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import IStyledPrefixAndPicker from '@/interface/IStyledPrefixAndPicker';

export type TTypography = {
  type?: keyof typeof TypographyList;
  variant?: keyof typeof TypographyList;
  weight?: 'normal' | 'bold';
  addLineHeight?: boolean;
  externalStyle?: CSSProp;
  htmlFor?: string;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
// --------------------------------------------------------------------------- //
// The Typography component can render differnet elements with different styles//
// ------------- like a "h4 can have the style of a p" ----------------------- //
export default function Typography(props: TTypography) {
  const { type, variant, children, weight, externalStyle, themeType, layer, addLineHeight, ...htmlProps } = props;
  // get the theme font sizes
  const themeFonts = themeStore((state) => state.theme.fontSizes);

  // generate the Typography component based on the type prop;
  // const Component = TypographyList[type] || TypographyList.content;
  const Component = TypographyList[type || 'content'] as React.FC<IStyledComponentProps>;

  const mixedStyle = generateStyle({
    $externalStyle: externalStyle,
    $weight: weight,
    $themeType: themeType,
    $layer: layer,
  });

  // get the variant style based on the variant prop or the type prop;
  const fontVariants = generateFontVariants(themeFonts, addLineHeight);

  // get the variant style based on the variant prop or the type prop;
  const variantStyle = variant ? fontVariants[variant] : (fontVariants[type || 'content'] as CSSProp);

  return (
    <Component $variant={variantStyle} $style={mixedStyle} {...htmlProps}>
      {children}
    </Component>
  );
}

type TGenerateStyle = IStyledPrefixAndPicker<TTypography, 'externalStyle' | 'weight' | 'themeType' | 'layer'>;
const generateStyle = (props: TGenerateStyle) => {
  const { $externalStyle, $weight, $themeType, $layer = 0 } = props;

  return css<{ theme: TTheme }>`
    color: ${({ theme }) => $themeType && getBackgroundColor({ theme, $themeType, $layer })};
    font-weight: ${$weight};
    ${$externalStyle};
  `;
};
