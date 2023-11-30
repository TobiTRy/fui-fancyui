import Color from 'color';
import { styled } from 'styled-components';

import { fontSize } from '../../design/theme/designSizes';
import { simpleColorTransition } from '../../design/designFunctions/simpleTransition';
import { TTheme } from '@/interface/TTheme';

const colorCalculation = ({ theme, $isBright, $isDarkTheme }: { theme: TTheme; $isBright: boolean; $isDarkTheme: boolean }) => {
  if ($isDarkTheme) return $isBright ? theme.colors.primary[0] : theme.colors.secondary[0];

  return $isBright ? theme.colors.secondary[0] : theme.colors.primary[0];
};

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
  gap: 3px;
  font-size: ${fontSize.sm};
  color: ${({ theme, $isBright, $isDarkTheme }) => colorCalculation({ theme, $isBright, $isDarkTheme })};
  ${simpleColorTransition}

  p {
    user-select: none;
  }

  &:active,
  &:hover {
    color: ${({ theme, $isBright, $isDarkTheme }) => ($isBright && $isDarkTheme ? theme.colors.primary[4] : theme.colors.secondary[4])};
  }
`;

export const WrapperSVG = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1px;
`;

export const Wrapper = styled.div<{ $fullHeight?: boolean }>`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: ${({ $fullHeight }) => ($fullHeight ? '100%' : '20px')};
  touch-action: manipulation;
`;

interface IColorDisplayColor {
  color?: string;
  opacity?: number;
}

const colorDisplayColor = ({ color, opacity }: IColorDisplayColor) => {
  const checkOpacity = opacity === undefined ? 1 : opacity;
  const transformedColor = Color(color).rgb().alpha(checkOpacity);
  return {
    style: {
      background: `${transformedColor.toString()}`,
    },
  };
};

export const ColorDisplayContainer = styled.div.attrs(colorDisplayColor)<IColorDisplayColor & { theme: TTheme }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  z-index: 1;
`;
