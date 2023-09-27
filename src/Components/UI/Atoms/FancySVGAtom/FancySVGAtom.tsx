import React from 'react';
import { styled } from 'styled-components';
import { colorPalet } from '../../Design/design';
import { ISVGAtomProps, IStyledSVGAtom, sizes } from './FancySVGAtom.model';
import { TUiColorsType } from '../../Design/color/designColor';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';

interface ICalcIconColor {
  theme: TUiColorsType;
  $isActive?: boolean;
  $errorMessage?: string | undefined;
  $themeType: keyof TUiColorsType;
  $layer?: number;
}

const calcIconColor = ({ theme, $isActive, $errorMessage, $themeType, $layer }: ICalcIconColor): string => {
  if (!$errorMessage) {
    return $isActive ? theme.accent[0] : getTextColor({ theme, $themeType, $textLayer: $layer });
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
  color: ${({ $isActive, $errorMessage, $isPassive, theme, $themeType = 'secondary', $layer = 0 }) =>
    !$isPassive && calcIconColor({ theme, $isActive, $errorMessage, $layer, $themeType })};
  ${({ $externalStyle }) => $externalStyle};
  will-change: transform;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// --------------------------------------------------------------------------- //
// --------- This is a wrapper for SVGs to wrap them and style them ---------- //
// --------------------------------------------------------------------------- //
export default function FancySVGAtom(props: ISVGAtomProps) {
  const { children, isPassive, size, isActive, errorMessage, externalStyle, themeType, layer, ...htmlProps } = { ...defaultProps, ...props };

  return (
    <StyledSVG
      $size={size}
      $isPassive={isPassive}
      $isActive={isActive}
      $errorMessage={errorMessage}
      $externalStyle={externalStyle}
      $themeType={themeType}
      $layer={layer}
      {...htmlProps}
    >
      {children}
    </StyledSVG>
  );
}

const defaultProps: ISVGAtomProps = {
  size: 'md',
  isPassive: false,
  isActive: false,
};
