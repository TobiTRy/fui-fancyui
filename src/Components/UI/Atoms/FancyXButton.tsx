import React from 'react';
import styled from 'styled-components';

import { uiColors, IUiColorsTypes, IUiColorsSystemMessageTypes, spacingPx, fontSize, systemMessages } from '../Design/design';
import Color from 'color';

type FancyXButtonDesign = IUiColorsTypes | IUiColorsSystemMessageTypes;

// this function picks the color from the design object and returns the color value
const pickColorObject = (design: FancyXButtonDesign | undefined | null) => {
  if (design && (design in uiColors)) {
    return uiColors[design as keyof typeof uiColors].main;
  } else if (design && (design in systemMessages)) {
    return systemMessages[design as keyof typeof systemMessages].light;
  }
};

const StyledFancyXButton = styled.button<{$colorValue?: string }>`
  padding: 0 ${spacingPx.sm} 2px;
  background: none;
  color: ${({ $colorValue }) => $colorValue ? $colorValue : uiColors.accent.main};
  border: none;
  font-size: ${fontSize.extraLarge};
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ $colorValue }) => $colorValue ? Color($colorValue).darken(0.3).hex() : uiColors.accent.dark};
  } 
`;

// --------------------------------------------------------------------------- //
// --------------- The main Component for the X Close Button------- ---------- //
// --------------------------------------------------------------------------- //
interface IFancyXButton {
  onClick?: () => void;
  design?: FancyXButtonDesign;
}
export default function FancyXButton({ onClick, design }: IFancyXButton) {
  //check wich design comes in and add the right color object uiColor or systemMessages  to the button 
  const colorValue = pickColorObject(design);

  return <StyledFancyXButton onClick={onClick} $colorValue={colorValue}>x</StyledFancyXButton>;
}
