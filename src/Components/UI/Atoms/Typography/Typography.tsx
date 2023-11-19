import React, { ReactNode } from 'react';
import { CSSProp, css } from 'styled-components';

import { fontSizeVariants } from './TypographyStyleVariants';
import { IStyledComponentProps, TypographyList } from './TypographyFontVariations.style';

const generateStyle = (externalStyle: CSSProp, fontWeight: 'normal' | 'bold' | undefined) => {
  return css`
    font-weight: ${fontWeight};
    ${externalStyle};
  `;
};

export type ITypography = {
  type: keyof typeof TypographyList;
  variant?: keyof typeof TypographyList;
  children?: ReactNode;
  weight?: 'normal' | 'bold';
  style?: CSSProp;
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'>;
// --------------------------------------------------------------------------- //
// The Typography component can render differnet elements with different styles//
// ------------- like a "h4 can have the style of a p" ----------------------- //
export default function Typography({ type, variant, children, style, weight, ...htmlProps }: ITypography) {
  // generate the Typography component based on the type prop;
  // const Component = TypographyList[type] || TypographyList.content;
  const Component = (TypographyList[type] || TypographyList.content) as React.FC<IStyledComponentProps>;

  const mixedStyle = generateStyle(style, weight);
  // get the variant style based on the variant prop or the type prop;
  const variantStyle = variant ? fontSizeVariants[variant] : (fontSizeVariants[type] as CSSProp);

  return (
    <Component $variant={variantStyle} $style={mixedStyle} {...htmlProps}>
      {children}
    </Component>
  );
}
