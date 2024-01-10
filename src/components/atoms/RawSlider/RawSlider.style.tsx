import { styled, css } from 'styled-components';

import { boxShadow } from '@/design/designFunctions/shadows/shadows';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TTheme } from '@/types/TTheme';
import { colorTransparencyCalculator } from '@/design/designFunctions/colorTransparencyCalculator';

const DragableThumb = css<{ theme: TTheme; $isActive?: boolean }>`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent[0]};
  cursor: ew-resize;
  border: 4px solid transparent;
  transition: box-shadow 0.2s ease-in-out;
  ${boxShadow.sm}

  box-shadow: ${({ $isActive, theme }) =>
    $isActive && `0 0 0 8px ${colorTransparencyCalculator(theme.colors.accent[0], 0.3)}`};
`;

type TStyledRawSlider = {
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  $isActive?: boolean;
};
export const StyledRawSlider = styled.input<TStyledRawSlider & { theme: TTheme }>`
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  height: 4px;
  margin: 14px 0 14px 0;
  background: ${({ theme, $themeType = 'secondary', $layer = 3 }) => getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: 5px;
  background-image: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.accent[0]}, ${theme.colors.accent[1]})`};
  background-size: 70% 100%;
  background-repeat: no-repeat;
  outline: none;

  /* Chrome */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${DragableThumb}
  }

  /* Firefox */
  &::-moz-range-thumb {
    ${DragableThumb}
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;
