import React from 'react';
import { styled } from 'styled-components';
import Color from 'color';

import themeStore from '../../Design/color/themeStore';

import { IUiColorsTypes, IUiColorsSystemMessageTypes, spacingPx, fontSize, systemMessages } from '../../Design/design';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

type FancyXButtonDesign = IUiColorsTypes | IUiColorsSystemMessageTypes;

// this function picks the color from the design object and returns the color value
const pickColorObject = (themeType: FancyXButtonDesign | undefined | null, layer: TLayer) => {
  const theme = themeStore.getState().theme;

  // check if the design is in the theme or systemMessages
  if (themeType && (themeType in theme)) {
    return theme[themeType as keyof typeof theme][layer || 0];
  } else if (themeType && (themeType in systemMessages)) {
    return theme[themeType as keyof typeof systemMessages][layer || 0];
  }
};

const StyledFancyXButton = styled.button<{$colorValue?: string, theme: TUiColorsType }>`
  padding: 0 ${spacingPx.sm} 2px;
  background: none;
  color: ${({ $colorValue, theme }) => $colorValue ? $colorValue : theme.accent[0]};
  border: none;
  font-size: ${fontSize.xl};
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  ${simpleColorTransition}

  &:hover {
    color: ${({ $colorValue, theme }) => $colorValue ? Color($colorValue).darken(0.1).hex() : theme.accent[1]};
  } 
`;

// --------------------------------------------------------------------------- //
// --------------- The main Component for the X Close Button------- ---------- //
// --------------------------------------------------------------------------- //
interface IFancyXButton {
  onClick?: () => void;
  themeType?: FancyXButtonDesign;
  layer: TLayer;
}
export default function FancyXButton({ onClick, themeType, layer }: IFancyXButton) {
  //check wich design comes in and add the right color object uiColor or systemMessages  to the button 
  const colorValue = pickColorObject(themeType, layer);

  return <StyledFancyXButton onClick={onClick} $colorValue={colorValue}>x</StyledFancyXButton>;
}
