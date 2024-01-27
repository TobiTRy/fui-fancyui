import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import {
  getBackgroundColor,
  getTextColor,
} from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TSpacingArray } from '@/types/TSpacings';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';

type StyledMenuProps = {
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
  $padding?: TSpacingArray;
  $align?: TTextAlignLC;
  theme: TTheme;
  as?: 'a' | 'button';
};

export const StyledMenuItem = styled.button<StyledMenuProps>`
  display: flex;
  box-sizing: border-box;
  padding: ${({ $padding }) => arrayToCssValues($padding)};
  justify-content: ${({ $align }) => leftRightCenterToFlexJustify[$align ?? 'left']};
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${({ theme, $themeType }) => getTextColor({ theme, $themeType: $themeType ?? 'secondary', $textLayer: 1 })};

  &:hover {
    background-color: ${({ theme, $themeType, $layer }) =>
      getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 })};
  }
`;
