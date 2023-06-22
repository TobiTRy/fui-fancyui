import React from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { calcIconPaddingAndAlign } from '../../HelperFunctions/generateIconPadding';
import { colorPalet, uiColors } from '../../Design/design';


type ISizes = 'small' | 'medium' | 'large';



const sizes = {
  small: '16px',
  medium: '18px',
  large: '20px',
};

const calcIconColor = (active?: boolean, errorMessage?: string | undefined) => {
  if (!errorMessage) {
    return active ? uiColors.accent.main : uiColors.secondary.darkest;
  } else {
    return colorPalet.red_dark;
  }
}



const StyledSVG = styled.i<{ size: ISizes, active?: boolean, errorMessage?: string, externalStyle?: FlattenSimpleInterpolation }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({size}) => sizes[size]}; 
  aspect-ratio: 1/1;
  color: ${({ active, errorMessage }) => calcIconColor(active!, errorMessage!)};
  transition: color 0.3s ease-in-out;
  ${({ externalStyle }) => externalStyle};

  svg {
    width: 100%;
    height: 100%;
  }
`;

interface ISVGAtom {
  children: React.ReactNode;
  size: ISizes;
  isActive?: boolean;
  passivElement?: boolean;
  errorMessage?: string;
  externalStyle?: FlattenSimpleInterpolation;
}
export default function SVGAtom(props: ISVGAtom) {
  const { children, size, isActive, errorMessage, externalStyle } = props;

  return <StyledSVG size={size} active={isActive} errorMessage={errorMessage} externalStyle={externalStyle}>{children}</StyledSVG>;
}

SVGAtom.defaultProps = {
  size: 'medium',
};