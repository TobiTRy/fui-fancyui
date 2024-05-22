import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';
import { TTheme } from '@/types/TTheme';

import { css, styled } from 'styled-components';

const BarStyle = css<TStyledMeter & { theme: TTheme }>`
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  background-image: none;
  transition: all 0.4s ease;
  height: ${({ $height }) => arrayToCssValues($height, 'spacing')};
`;

type TStyledMeter = {
  $height?: TThemeValueOrCSS;
  $borderRadius?: TThemeArrayOrValueCSS;
};

export const StyledMeter = styled.meter<TStyledMeter & { theme: TTheme }>`
  background: none;
  width: 100%;
  display: block;
  border-color: transparent; /* Needed for Safari */
  height: ${({ $height }) => arrayToCssValues($height, 'spacing')};

  &::-webkit-meter-bar {
    height: ${({ $height }) => arrayToCssValues($height, 'spacing')};
    border: 0;
    background-color: transparent;
    background-image: none;
  }

  &::-webkit-meter-optimum-value {
    background-color: ${({ theme }) => theme.color.success[0]}; // Strongest (green)
    ${BarStyle}
  }

  &:-moz-meter-optimum::-moz-meter-bar {
    background-color: ${({ theme }) => theme.color.success[0]};
    ${BarStyle}
  }

  &::-webkit-meter-suboptimum-value {
    background-color: ${({ theme }) => theme.color.warning[0]}; // Medium (yellow)
    ${BarStyle}
  }

  &:-moz-meter-suboptimum::-moz-meter-bar {
    background-color: ${({ theme }) => theme.color.warning[0]};
    ${BarStyle}
  }

  &::-webkit-meter-even-less-good-value {
    background-color: ${({ theme }) => theme.color.error[0]}; // Weak (red)
    ${BarStyle}
  }

  &:-moz-meter-subsuboptimum::-moz-meter-bar {
    background-color: ${({ theme }) => theme.color.error[0]};
    ${BarStyle}
  }
`;
