import React from 'react';
import styled, { css, CSSProp } from 'styled-components';

const variants = {
  h1: css`
    font-size: 3.75rem;
    /* Add more styles as needed */
  `,
  h2: css`
    font-size: 3rem;
    /* Add more styles as needed */
  `,
  h3: css`
    font-size: 2.125rem;
    /* Add more styles as needed */
  `,
  h4: css`
    font-size: 1.5rem;
    /* Add more styles as needed */
  `,
  h5: css`
    font-size: 1.25rem;
    /* Add more styles as needed */
  `,
  h6: css`
    font-size: 1.1rem;
    /* Add more styles as needed */
  `,
  subtitle1: css`
    font-size: 1rem;
    font-weight: bold;
    /* Add more styles as needed */
  `,
  subtitle2: css`
    font-size: 0.875em;
    font-weight: bold;
    /* Add more styles as needed */
  `,
  button: css`
    font-size: 0.875rem;
    font-weight: 500;
    /* Add more styles as needed */
  `,
  caption: css`
    font-size: 0.875em;
    /* Add more styles as needed */
  `,
};

const Components = {
  h1: styled.h1,
  h2: styled.h2,
  h3: styled.h3,
  h4: styled.h4,
  h5: styled.h5,
  h6: styled.h6,
  subtitle1: styled.p,
  subtitle2: styled.p,
  button: styled.p,
  caption: styled.p,
}


interface ITypographyProps {
  type: keyof typeof Components;
  variant?: keyof typeof variants;
  children: React.ReactNode;
  style?: CSSProp;
}
const Typography = ({ type, variant = 'subtitle2', children, style }: ITypographyProps) => {
  const Component = Components[type]`
    ${variants[variant]}
    ${style}
  `;

  return <Component>{children}</Component>;
};

export default Typography;
