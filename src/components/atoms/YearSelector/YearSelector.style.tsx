import { css, styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TYearSelector } from '@/components/atoms/YearSelector/TYearSelector.model';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { generateBorderRadiusForComponent } from '@/design/designFunctions/generateBorderRadiusForComponent';
import { sizeSettings } from './sizeSettings';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

type TStyledYearSelector = TStyledPrefixAndPicker<TYearSelector, 'layer' | 'themeType' | 'sizeC' | 'borderRadius'> & {
  theme: TTheme;
};
export const StyledYearSelector = styled.div<TStyledYearSelector>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ $sizeC = 'md' }) => arrayToCssValues(sizeSettings[$sizeC].padding)};
  ${({ $borderRadius, theme, $sizeC }) =>
    generateBorderRadiusForComponent({ rounded: $borderRadius, theme, sizeC: $sizeC })};
  background-color: ${({ theme, $layer = 2, $themeType = 'primary' }) =>
    getBackgroundColor({ theme, $themeType, $layer })};
  height: ${({ $sizeC = 'md' }) => globalElementsizes[$sizeC]};
`;

export const StyledButton = styled.button<{ theme: TTheme; $themeType?: TUiColorsNotTransparent; $layer?: TLayer }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme, $layer, $themeType = 'secondary' }) => getBackgroundColor({ theme, $themeType, $layer })};
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const SVGDesignCSS = css<{ theme: TTheme }>`
  svg {
    path: {
      stroke: ${({ theme }) => theme.colors.secondary[0]};
      stroke-width: 2px;
    }
  }
`;
