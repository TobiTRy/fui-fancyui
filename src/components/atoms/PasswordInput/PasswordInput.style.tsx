import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

export const WrapperEye = styled.div<{ theme: TTheme; $themeType?: TUiColorsNotTransparent; $layer?: TLayer }>`
  position: absolute;
  bottom: 0px;
  right: 0;
  padding: ${({ theme }) => `${theme.spacing.xs} 0 ${theme.spacing.xxs} ${theme.spacing.xs}`};
  box-sizing: border-box;

  svg {
    color: ${({ theme, $themeType = 'secondary', $layer = 4 }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
