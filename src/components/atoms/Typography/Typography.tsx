import React, { ReactNode } from 'react';
import { CSSProp, css } from 'styled-components';

import { IStyledComponentProps, TypographyList } from './TypographyFontVariations.style';
import { themeStore } from '@/design/theme/themeStore';
import { generateFontVariants } from './TypographyStyleVariants';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';
import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

export type ITypography = {
  type?: keyof typeof TypographyList;
  variant?: keyof typeof TypographyList;
  children?: ReactNode;
  weight?: 'normal' | 'bold';
  externalStyle?: CSSProp;
  htmlFor?: string;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
// --------------------------------------------------------------------------- //
// The Typography component can render differnet elements with different styles//
// ------------- like a "h4 can have the style of a p" ----------------------- //
export default function Typography(props: ITypography) {
  const { type, variant, children, weight, externalStyle, themeType, layer, ...htmlProps } = props;
  // get the theme font sizes
  const themeFonts = themeStore((state) => state.theme.fontSizes);

  // generate the Typography component based on the type prop;
  // const Component = TypographyList[type] || TypographyList.content;
  const Component = TypographyList[type || 'content'] as React.FC<IStyledComponentProps>;

  const mixedStyle = generateStyle({ externalStyle, fontWeight: weight, themeType, layer });
  // get the variant style based on the variant prop or the type prop;
  const fontVariants = generateFontVariants(themeFonts);

  // get the variant style based on the variant prop or the type prop;
  const variantStyle = variant ? fontVariants[variant] : (fontVariants[type || 'content'] as CSSProp);

  return (
    <Component $variant={variantStyle} $style={mixedStyle} {...htmlProps}>
      {children}
    </Component>
  );
}

// generate the style for the component
type TGenerateStyle = {
  externalStyle?: CSSProp;
  fontWeight?: 'normal' | 'bold' | undefined;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
};
const generateStyle = (props: TGenerateStyle) => {
  const { externalStyle, fontWeight, themeType = 'secondary', layer = 0 } = props;
  return css<{ theme: TTheme }>`
    color: ${({ theme }) => getBackgroundColor({ theme, $themeType: themeType, $layer: layer })};
    font-weight: ${fontWeight};
    ${externalStyle};
  `;
};
