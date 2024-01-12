import { styled, css } from 'styled-components';

import { TThemeTypes } from '@/types/TThemeTypes';
import { TTheme } from '@/types/TTheme';
import { TLayer } from '@/types/TLayer';

import { boxShadow } from '@/design/designFunctions/shadows/shadows';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { colorTransparencyCalculator } from '@/design/designFunctions/colorTransparencyCalculator';
import { TRawSlider } from '@/components/atoms/RawSlider';
import { sizeSettings } from './sizeSettings';

const DragableThumb = css<{ theme: TTheme; $isActive?: boolean }>`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent[0]};
  border: 4px solid transparent;
  transition: box-shadow 0.2s ease-in-out;
  ${boxShadow.sm}

  box-shadow: ${({ $isActive, theme }) =>
    $isActive && `0 0 0 8px ${colorTransparencyCalculator(theme.colors.accent[0], 0.3)}`};

  &:active {
    background: ${({ theme }) => theme.colors.accent[1]};
  }
`;

const generateComponentSize = (componentSize: TRawSlider['componentSize']) => {
  return css`
    height: ${sizeSettings[componentSize || 'sm'].height};
    margin: 10px 0 10px 0; //TODO: ADJUST SIZE
  `;
};

type TStyledRawSlider = {
  $themeType?: TThemeTypes;
  $layer?: TLayer;
  $isActive?: boolean;
  $componentSize: TRawSlider['componentSize'];
};
export const StyledRawSlider = styled.input<TStyledRawSlider & { theme: TTheme }>`
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  ${({ $componentSize }) => generateComponentSize($componentSize)};
  background: ${({ theme, $themeType = 'primary', $layer = 1 }) => getBackgroundColor({ theme, $themeType, $layer })};
  border-radius: 5px;
  background-image: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.accent[0]}, ${theme.colors.accent[1]})`};
  background-size: 70% 100%;
  background-repeat: no-repeat;
  z-index: 1;
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
