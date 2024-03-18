import { styled } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import {
  getBackgroundColor,
  getTextColor,
} from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';

import { TSpacingArray } from '@/types/TSpacings';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TTheme } from '@/types/TTheme';
import { TMenueItem } from './TMenueItem.model';

type IStyledMenuItem = TStyledPrefixAndOmiter<TMenueItem, 'children'> & { theme?: TTheme; $padding?: TSpacingArray };
export const StyledMenuItem = styled.button<IStyledMenuItem>`
  display: flex;
  box-sizing: border-box;
  padding: ${({ $padding }) => arrayToCssValues($padding, 'spacing')};
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

  ${({ $externalStyle }) => $externalStyle};
`;
