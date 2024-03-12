import { styled } from 'styled-components';

import { TThemeArrayOrValueCSS, arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TTheme } from '@/types/TTheme';
import { simpleColorTransition } from '@/design/designFunctions/simpleColorTransition';

export const Wrapper = styled.button<{ $fullHeight?: boolean; $height: string; $borderRadius: TThemeArrayOrValueCSS }>`
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: ${({ $fullHeight, $height }) => ($fullHeight ? '100%' : $height)};
  border-radius: ${({ $borderRadius }) => arrayToCssValues($borderRadius, 'borderRadius')};
  overflow: hidden;
  touch-action: manipulation;
`;

// ---------- ColorCalculation for the color and the opacity ------- //
export const ColorDisplayContainer = styled.div<{ theme?: TTheme }>`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Content = styled.div<{ $isBright: boolean; theme: TTheme; $isDarkTheme: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
  gap: ${({ theme }) => theme.spacing.xxs};

  * {
    color: ${({ theme, $isBright, $isDarkTheme }) => colorCalculation({ theme, $isBright, $isDarkTheme })};
    ${simpleColorTransition}
  }
  p {
    user-select: none;
  }

  &:active,
  &:hover {
    color: ${({ theme, $isBright, $isDarkTheme }) =>
      $isBright && $isDarkTheme ? theme.colors.primary[4] : theme.colors.secondary[4]};
  }
`;

// calculate color on the isBright and isDarkTheme props
type TColorCalculation = {
  theme: TTheme;
  $isBright: boolean;
  $isDarkTheme: boolean;
};
const colorCalculation = ({ theme, $isBright, $isDarkTheme }: TColorCalculation) => {
  if ($isDarkTheme) return $isBright ? theme.colors.primary[0] : theme.colors.secondary[0];

  return $isBright ? theme.colors.secondary[0] : theme.colors.primary[0];
};
