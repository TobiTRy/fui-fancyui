import { css } from 'styled-components';

import { getBackgroundColor } from '../../../../design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import {} from '../SwitchActiveIndicator';
import { TTheme } from '@/types/TTheme';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TActiveSwitchIndicator } from '@/components/atoms/SwitchActiveIndicator/TSwitchActiveindicator.model';

const generateHorzLine = ({
  theme,
  $themeType = 'accent',
  $layer,
  $indicatorHeight,
  $indicatorWidth,
}: IGenerateLine) => {
  const backgroundColor = getBackgroundColor({ theme, $themeType, $layer });

  return css`
    width: ${$indicatorWidth ?? '100%'};
    height: ${$indicatorHeight ?? '1.5px'};
    background-color: ${backgroundColor};
    border-radius: 10px;
  `;
};

const generateVertLine = ({
  theme,
  $themeType = 'accent',
  $layer,
  $indicatorHeight,
  $indicatorWidth,
}: IGenerateLine) => {
  const backgroundColor = getBackgroundColor({ theme, $themeType, $layer });

  return css`
    height: ${$indicatorHeight ?? '100%'};
    width: ${$indicatorWidth ?? '1.5px'};
    background-color: ${backgroundColor};
    border-radius: 10px;
  `;
};

// Define the function to generate an underline for the active indicator
type IGenerateLine = TStyledPrefixAndPicker<
  TActiveSwitchIndicator,
  'themeType' | 'layer' | 'indicatorHeight' | 'indicatorWidth'
> & { theme: TTheme };
export const generateUnderline = ({
  theme,
  $themeType = 'accent',
  $layer,
  $indicatorHeight,
  $indicatorWidth,
}: IGenerateLine) => {
  // Get the background color for the active indicator
  const line = generateHorzLine({ theme, $themeType, $layer, $indicatorHeight, $indicatorWidth });
  // Return the styled-component CSS for the active indicator
  return css`
    ${line}
    bottom: 0;
    box-sizing: border-box;
  `;
};

export const generateTopline = ({
  theme,
  $themeType = 'accent',
  $layer,
  $indicatorHeight,
  $indicatorWidth,
}: IGenerateLine) => {
  const line = generateHorzLine({ theme, $themeType, $layer, $indicatorHeight, $indicatorWidth });

  // Return the styled-component CSS for the active indicator
  return css`
    ${line}
    top: 0;
    box-sizing: border-box;
  `;
};

export const generateLeftLine = ({
  theme,
  $themeType = 'accent',
  $layer,
  $indicatorHeight,
  $indicatorWidth,
}: IGenerateLine) => {
  const line = generateVertLine({ theme, $themeType, $layer, $indicatorHeight, $indicatorWidth });

  // Return the styled-component CSS for the active indicator
  return css`
    ${line}
    left: 0;
    box-sizing: border-box;
  `;
};

export const generateRightLine = ({
  theme,
  $themeType = 'accent',
  $layer,
  $indicatorHeight,
  $indicatorWidth,
}: IGenerateLine) => {
  const line = generateVertLine({ theme, $themeType, $layer, $indicatorHeight, $indicatorWidth });

  // Return the styled-component CSS for the active indicator
  return css`
    ${line}
    right: 0;
    box-sizing: border-box;
  `;
};
