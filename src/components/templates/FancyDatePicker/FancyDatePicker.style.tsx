import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';

import { getBackgroundColor, getColorsForComponent } from '@/design/designFunctions/colorCalculatorForComponent/';
import { TUiColorsNotTransparent } from 'lib';

export const DatePickerContainer = styled.div<{
  theme: TTheme;
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme, $themeType = 'primary', $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const WrapperYearSelector = styled.div<{ theme: TTheme }>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.md}`};
  box-sizing: border-box;
`;

export const WrapperWeekdays = styled.div<{ theme: TTheme; $themeType?: TUiColorsNotTransparent }>`
  width: 100%;
  border-bottom: solid 1px ${({ theme, $themeType = 'secondary' }) => getBackgroundColor({ theme, $themeType })};
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
`;
