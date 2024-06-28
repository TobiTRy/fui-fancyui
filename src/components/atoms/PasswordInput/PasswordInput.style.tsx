import { styled } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';

export const WrapperEye = styled.div<{ theme: TTheme; $themeType?: TUiColorsNotTransparent; $layer?: TLayer }>`
  position: absolute;
  bottom: 50%;
  transform: translateY(65%);
  right: 0;
  box-sizing: border-box;

  svg {
    color: ${({ theme, $themeType = 'secondary', $layer = 4 }) => getBackgroundColor({ theme, $themeType, $layer })};
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
