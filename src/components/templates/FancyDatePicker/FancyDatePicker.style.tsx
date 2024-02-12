import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';

import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { getColorsForComponent } from '@/design/designFunctions/colorCalculatorForComponent';

type TStyledYearSelector = {
  $themeType?: TUiColorsNotTransparent;
  $layer?: TLayer;
};
export const DatePickerContainer = styled.div<TStyledYearSelector & { theme: TTheme }>`
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
  padding: ${({ theme }) => `0 0 ${theme.spacing.xxs}`};
  box-sizing: border-box;
`;
