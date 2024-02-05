import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

export const WeekdaysConatiner = styled.div<{ theme: TTheme; $themeType?: TUiColorsNotTransparent; $layer?: TLayer }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;

  color: ${({ theme, $themeType, $layer }) =>
    getBackgroundColor({ theme, $themeType: $themeType ?? 'secondary', $layer: $layer ?? 0 })};

  border-bottom: solid 1px ${({ theme, $themeType = 'secondary' }) => getBackgroundColor({ theme, $themeType })};
  padding-bottom: ${({ theme }) => theme.spacing.xs};

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
