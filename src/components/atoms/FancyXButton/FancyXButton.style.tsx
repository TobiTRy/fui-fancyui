import { CSSProp, styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import Color from 'color';

interface IStyledFancyXButton {
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
  theme: TTheme;
  $externalStyle?: CSSProp;
}
export const StyledFancyXButton = styled.button<IStyledFancyXButton>`
  padding: 0;
  background: none;
  border: none;
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  color: inherit;
  ${simpleColorTransition}

  &:hover {
    color: ${({ $themeType = 'accent', $layer, theme }) =>
      Color(getBackgroundColor({ $themeType, $layer, theme })).darken(0.5).hex()};
  }

  ${({ $externalStyle }) => $externalStyle}
`;
