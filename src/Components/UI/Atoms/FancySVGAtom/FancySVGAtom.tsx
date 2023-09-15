import React from 'react';
import { styled } from 'styled-components';
import { colorPalet } from '../../Design/design';
import { ISVGAtomProps, IStyledSVGAtom, sizes } from './FancySVGAtom.model';
import { TUiColorsType } from '../../Design/color/designColor';

const calcIconColor = (theme: TUiColorsType, $isActive?: boolean, errorMessage?: string | undefined): string => {
  if (!errorMessage) {
    return $isActive ? theme.accent[0] : theme.secondary[4];
  } else {
    return colorPalet.red_dark;
  }
};

const StyledSVG = styled.i<IStyledSVGAtom & { theme: TUiColorsType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => sizes[$size!]};
  aspect-ratio: 1/1;
  color: ${({ $isActive, $errorMessage, $isPassive, theme }) => !$isPassive ? calcIconColor(theme, $isActive, $errorMessage ) : 'black'};
  ${({ $externalStyle }) => $externalStyle};

  svg {
    width: 100%;
    height: 100%;
  }
`;

// --------------------------------------------------------------------------- //
// --------- This is a wrapper for SVGs to wrap them and style them ---------- //
// --------------------------------------------------------------------------- //
export default function FancySVGAtom(props: ISVGAtomProps) {
  const { children, isPassive, size, isActive, errorMessage, externalStyle, ...htmlProps } = { ...defaultProps, ...props };

  return (
    <StyledSVG
      $size={size}
      $isPassive={isPassive}
      $isActive={isActive}
      $errorMessage={errorMessage}
      $externalStyle={externalStyle}
      {...htmlProps}
    >
      {children}
    </StyledSVG>
  );
}

const defaultProps: ISVGAtomProps = {
  size: 'md',
  isPassive: false,
  isActive: true,
};
