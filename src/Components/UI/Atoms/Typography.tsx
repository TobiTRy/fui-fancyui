import React from 'react';
import styled, { css, CSSProp } from 'styled-components';

const nullifyStyle = css`
  margin: 0;
`;

const variants = {
  h1: css`
    ${nullifyStyle};
    font-size: 3.75rem;
  `,
  h2: css`
    ${nullifyStyle};
    font-size: 3rem;
  `,
  h3: css`
    ${nullifyStyle};
    font-size: 2.125rem;
  `,
  h4: css`
    ${nullifyStyle};
    font-size: 1.5rem;
  `,
  h5: css`
    ${nullifyStyle};
    font-size: 1.25rem;
  `,
  h6: css`
    ${nullifyStyle};
    font-size: 1.1rem;
  `,
  subtitle1: css`
    ${nullifyStyle};
    font-size: 1rem;
    font-weight: 400;
  `,
  subtitle2: css`
    ${nullifyStyle};
    font-size: 0.875em;
    font-weight: 400;
  `,
  button: css`
    ${nullifyStyle};
    font-size: 0.875rem;
  `,
  caption: css`
    ${nullifyStyle};
    font-size: 0.875em;
    font-weight: 400;
  `,
};

interface IComponentProps {
  $variant?: CSSProp;
  $style?: CSSProp;
}

const ComponentObj = {
  h1: styled.h1<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  h2: styled.h2<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  h3: styled.h3<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  h4: styled.h4<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  h5: styled.h5<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  h6: styled.h6<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  subtitle1: styled.h6<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  subtitle2: styled.h6<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  button: styled.h6<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
  caption: styled.h6<IComponentProps>`
    ${props => props.$variant};
    ${props => props.$style};
  `,
}


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
      <Component $variant={variantStyle} $style={style}>{children}</Component>
    </>
  );
}
