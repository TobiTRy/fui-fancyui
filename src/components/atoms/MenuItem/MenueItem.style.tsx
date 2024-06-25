import { styled } from 'styled-components';

import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';

import { TSpacingArray } from '@/types/TSpacings';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TTheme } from '@/types/TTheme';
import { TMenueItem } from './TMenueItem.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { generateThemeForCard } from '@/design/designFunctions/generateThemeForCard';

type IStyledMenuItem = TStyledPrefixAndOmiter<TMenueItem, 'children'> & { theme?: TTheme; $padding?: TSpacingArray };
export const StyledMenuItem = styled.div<IStyledMenuItem>`
  display: flex;
  box-sizing: border-box;
  padding: ${({ $padding }) => arrayToCssValues($padding, 'spacing')};
  justify-content: ${({ $align }) => leftRightCenterToFlexJustify[$align ?? 'left']};
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-decoration: none;
  width: 100%;
  color: ${({ theme, $themeType }) =>
    getTextColor({ theme, $themeType: getOpositMainThemeType($themeType), $textLayer: 1 })};

  &:hover {
    box-sizing: border-box;
    ${({ theme, $themeType = 'primary', $layer, $outlined, $outlinedBackgroundStrength }) =>
      generateThemeForCard({
        $themeType,
        theme,
        $outlined,
        $layer,
        $outlinedBackgroundStrength,
        $outlinedRemoveBorder: true,
      })};
  }

  ${({ $externalStyle }) => $externalStyle};
`;
