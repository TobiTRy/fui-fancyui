import React from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { calcIconPaddingAndAlign } from '../../HelperFunctions/generateIconPadding';


interface ISVGAtom {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  aligned?: 'left' | 'right' | 'center';
  externalStyle?: FlattenSimpleInterpolation;
}


const StyledSVG = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function SVGAtom(props: ISVGAtom) {
  const { children} = props;

  return <StyledSVG >{children}</StyledSVG>;
}
