import { styled } from 'styled-components';

import { getTextColor } from '@/design/designFunctions/colorCalculatorForComponent';
import { TLayer } from '@/types/TLayer';
import { TTheme } from '@/types/TTheme';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledHeading = styled.a<{ theme: TTheme; $themeType?: TThemeTypesNotTransparent; $layer?: TLayer }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  word-break: keep-all;
  text-decoration: none;
  color: ${({ theme, $themeType = 'secondary', $layer }) => getTextColor({ theme, $themeType, $textLayer: $layer })};
`;
