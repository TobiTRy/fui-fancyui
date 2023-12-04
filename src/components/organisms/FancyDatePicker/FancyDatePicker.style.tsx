import { styled } from 'styled-components';

import { TLayer } from '@/interface/TLayer';
import getColorsForComponent, {
  getBackgroundColor,
} from '../../../design/designFunctions/colorCalculatorForComponent/colorCalculatorForComponent';
import { TTheme } from '@/interface/TTheme';
import { TThemeTypes } from '@/interface/TThemeTypes';

export const DatePickerContainer = styled.div<{ theme: TTheme; $themeType?: TThemeTypes; $layer?: TLayer }>`
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
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md}`};
  box-sizing: border-box;
`;

export const WrapperWeekdays = styled.div<{ theme: TTheme; $themeType?: TThemeTypes }>`
  width: 100%;
  border-bottom: solid 1px ${({ theme, $themeType = 'secondary' }) => getBackgroundColor({ theme, $themeType })};
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
`;
