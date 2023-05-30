import React from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { calcIconPaddingAndAlign } from '../../HelperFunctions/generateIconPadding';


type ISizes = 'small' | 'medium' | 'large';

interface ISVGAtom {
  children: React.ReactNode;
  size: ISizes;
  externalStyle?: FlattenSimpleInterpolation;
}

const sizes = {
  small: '16px',
  medium: '18px',
  large: '20px',
};


const StyledSVG = styled.i<{ size: ISizes }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({size}) => sizes[size]}; 
  aspect-ratio: 1/1;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function SVGAtom(props: ISVGAtom) {
  const { children, size } = props;

  return <StyledSVG size={size}>{children}</StyledSVG>;
}

SVGAtom.defaultProps = {
  size: 'medium',
};