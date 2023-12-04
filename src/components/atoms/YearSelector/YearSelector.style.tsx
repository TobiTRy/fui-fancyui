import { css, styled } from 'styled-components';

import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import { getBackgroundColor } from '../../../design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TTheme } from '@/interface/TTheme';

export const StyledYearSelector = styled.div<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${({ theme, $layer, $themeType }) => ($themeType ? theme.colors[$themeType][$layer ?? 0] : theme.colors.secondary[0])};
`;

export const StyledButton = styled.button<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
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
