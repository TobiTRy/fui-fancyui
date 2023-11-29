import React from 'react';
import { styled } from 'styled-components';
import Color from 'color';

import { fontSize } from '../../Design/designSizes';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { TThemeTypesNotTrasparent } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';
import { TTheme } from '@/Components/UI/Interface/TTheme';

type FancyXButtonDesign = TThemeTypesNotTrasparent;

interface IStyledFancyXButton {
  $themeType?: FancyXButtonDesign;
  $layer?: TLayer;
  theme: TTheme;
}

const StyledFancyXButton = styled.button<IStyledFancyXButton>`
  padding: 0 ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xxs};
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
