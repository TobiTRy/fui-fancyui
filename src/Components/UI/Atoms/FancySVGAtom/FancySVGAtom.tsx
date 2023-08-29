import React from 'react';
import { styled } from 'styled-components';
import { colorPalet, uiColors } from '../../Design/design';
import { ISVGAtom, IStyledSVGAtom, sizes } from './FancySVGAtom.model';

const calcIconColor = ($isActive?: boolean, errorMessage?: string | undefined): string => {
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
  width: ${({ $size }) => sizes[$size!]};
  aspect-ratio: 1/1;
  color: ${({ $isActive, $errorMessage, $isPassive }) => !$isPassive && calcIconColor($isActive, $errorMessage)};
  ${({ $externalStyle }) => $externalStyle};

  svg {
    width: 100%;
    height: 100%;
  }
`;

// --------------------------------------------------------------------------- //
// --------- This is a wrapper for SVGs to wrap them and style them ---------- //
// --------------------------------------------------------------------------- //
export default function FancySVGAtom(props: ISVGAtom) {
  const { children, isPassive, size, isActive, errorMessage, externalStyle, ariaLabel } = { ...defaultProps, ...props };

  return (
    <StyledSVG
      $size={size}
      $isPassive={isPassive}
      $isActive={isActive}
      $errorMessage={errorMessage}
      $externalStyle={externalStyle}
      aria-label={ariaLabel}
    >
      {children}
    </StyledSVG>
  );
}

const defaultProps: ISVGAtom = {
  size: 'md',
  isPassive: false,
  isActive: true,
};
