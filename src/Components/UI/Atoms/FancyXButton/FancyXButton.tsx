import React from 'react';
import { styled } from 'styled-components';
import Color from 'color';

import { IUiColorsTypes, IUiColorsSystemMessageTypes, spacingPx, fontSize } from '../../Design/design';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

type FancyXButtonDesign = IUiColorsTypes | IUiColorsSystemMessageTypes;

interface IStyledFancyXButton {
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  theme: TUiColorsType;
}

const StyledFancyXButton = styled.button<IStyledFancyXButton>`
  padding: 0 ${spacingPx.sm} 2px;
  background: none;
  color: ${({ $themeType = 'accent', theme, $layer }) => getBackgroundColor({ $themeType, theme, $layer })};
  border: none;
  font-size: ${fontSize.xl};
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  ${simpleColorTransition}

  &:hover {
    color: ${({ $themeType = 'accent', $layer, theme }) => Color(getBackgroundColor({ $themeType, $layer, theme })).darken(0.1).hex()};
  }
`;

// --------------------------------------------------------------------------- //
// --------------- The main Component for the X Close Button------- ---------- //
// --------------------------------------------------------------------------- //
interface IFancyXButton {
  onClick?: () => void;
  themeType?: FancyXButtonDesign;
  layer?: TLayer;
}
export default function FancyXButton({ onClick, themeType, layer }: IFancyXButton) {
  //check wich design comes in and add the right color object uiColor or systemMessages  to the button

  return (
    <StyledFancyXButton onClick={onClick} $themeType={themeType} $layer={layer}>
      x
    </StyledFancyXButton>
  );
}
