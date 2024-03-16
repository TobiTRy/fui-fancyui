import { styled } from 'styled-components';

import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledHeading = styled.span<{ theme: TTheme; $themeType?: TUiColorsNotTransparent; $layer?: TLayer }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  word-break: keep-all;
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme, $themeType = 'secondary', $layer }) => getTextColor({ theme, $themeType, $textLayer: $layer })};
`;
