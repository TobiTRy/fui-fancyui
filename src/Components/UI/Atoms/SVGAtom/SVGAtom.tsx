import React from 'react';
import styled from 'styled-components';
import { colorPalet, uiColors } from '../../Design/design';
import { ISVGAtom, IStyledSVGAtom, sizes } from './SVGAtom.model';

const calcIconColor = ($isActive?: boolean, errorMessage?: string | undefined) => {
  if (!errorMessage) {
    return $isActive ? uiColors.accent.main : uiColors.secondary.darkest;
  } else {
    return colorPalet.red_dark;
  }
};

const StyledSVG = styled.i<IStyledSVGAtom>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => sizes[$size]};
  aspect-ratio: 1/1;
  color: ${({ $isActive, $errorMessage }) => calcIconColor($isActive!, $errorMessage!)};
  transition: color 0.3s ease-in-out;
  ${({ $externalStyle }) => $externalStyle};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function SVGAtom(props: ISVGAtom) {
  const { children, size, isActive, errorMessage, externalStyle } = props;

  return (
    <StyledSVG $size={size} $isActive={isActive} $errorMessage={errorMessage} $externalStyle={externalStyle}>
      {children}
    </StyledSVG>
  );
}

SVGAtom.defaultProps = {
  size: 'medium',
};
