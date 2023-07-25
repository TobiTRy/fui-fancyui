import React from 'react';
import styled, { css, CSSProp } from 'styled-components';
import { fontSizes } from '../../Design/design';
import brakePoints from '../../Design/brakePoints';



interface IComponentProps {
  $variant?: CSSProp;
  $style?: CSSProp;
}

const ComponentObj = {
  h1: styled.h1<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h2: styled.h2<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h3: styled.h3<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h4: styled.h4<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h5: styled.h5<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h6: styled.h6<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  subtitle1: styled.h6<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  subtitle2: styled.h6<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  button: styled.h6<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  caption: styled.h6<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  content: styled.p<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
};



interface ITypographyProps {
  type: keyof typeof variants;
  variant?: keyof typeof variants;
  children: React.ReactNode;
  style?: CSSProp;
}
export default function Typography({ type, variant, children, style }: ITypographyProps) {
  // generate the Typography component based on the type prop;
  const Component = ComponentObj[type];

  // get the variant style based on the variant prop or the type prop;
  const variantStyle = variant ? variants[variant] : variants[type];

  return (
    <>
      <Component $variant={variantStyle} $style={style}>
        {children}
      </Component>
    </>
  );
}
