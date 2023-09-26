import { css, styled } from 'styled-components';
import { fontSize } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getTextColor } from '../../Design/color/colorCalculatorForComponet';

export const StyledYearSelector = styled.div<{ theme: TUiColorsType; $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${({ theme, $layer, $themeType }) => ($themeType ? theme[$themeType][$layer ?? 0] : theme.secondary[0])};
`;

export const StyledButton = styled.button<{ theme: TUiColorsType; $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme, $layer, $themeType = 'secondary' }) => getTextColor({ theme, $themeType, $textLayer: $layer })};
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const SVGDesignCSS = css<{ theme: TUiColorsType }>`
  svg {
    path: {
      stroke: ${({ theme }) => theme.secondary[0]};
      stroke-width: 2px;
    }
  }
`;
