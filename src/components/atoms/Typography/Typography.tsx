import React, { ReactNode } from 'react';
import { CSSProp, css } from 'styled-components';

import { IStyledComponentProps, TypographyList } from './TypographyFontVariations.style';
import { themeStore } from '@/design/theme/themeStore';
import { generateFontVariants } from './TypographyStyleVariants';

export type ITypography = {
  type?: keyof typeof TypographyList;
  variant?: keyof typeof TypographyList;
  children?: ReactNode;
  weight?: 'normal' | 'bold';
  style?: CSSProp;
  htmlFor?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
// --------------------------------------------------------------------------- //
// The Typography component can render differnet elements with different styles//
// ------------- like a "h4 can have the style of a p" ----------------------- //
export default function Typography({ type, variant, children, style, weight, ...htmlProps }: ITypography) {
  // get the theme font sizes
  const themeFonts = themeStore((state) => state.theme.fontSizes);

  // generate the Typography component based on the type prop;
  // const Component = TypographyList[type] || TypographyList.content;
  const Component = TypographyList[type || 'content'] as React.FC<IStyledComponentProps>;

  const mixedStyle = generateStyle(style, weight);
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
const generateStyle = (externalStyle: CSSProp, fontWeight: 'normal' | 'bold' | undefined) => {
  return css`
    font-weight: ${fontWeight};
    ${externalStyle};
  `;
};