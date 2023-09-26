import Color from 'color';
import { styled } from 'styled-components';
import { borderRadius, fontSize } from '../../Design/design';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { TUiColorsType } from '../../Design/color/designColor';

const colorCalculation = ({ theme, $isBright, $isDarkTheme }: { theme: TUiColorsType; $isBright: boolean; $isDarkTheme: boolean }) => {
  if($isDarkTheme) return ($isBright ? theme.primary[0] : theme.secondary[0]);

  return ($isBright ? theme.secondary[0] : theme.primary[0]);
}


export const Content = styled.div<{ $isBright: boolean; theme: TUiColorsType, $isDarkTheme: boolean }>`
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
  color: ${({theme, $isBright, $isDarkTheme}) => colorCalculation({theme, $isBright, $isDarkTheme})};
  ${simpleColorTransition}

  p {
    user-select: none;
  }

  &:active, &:hover {
    color: ${({theme, $isBright, $isDarkTheme}) => ($isBright && $isDarkTheme) ? theme.primary[4] : theme.secondary[4] };
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

export const ColorDisplayContainer = styled.div.attrs(colorDisplayColor)<IColorDisplayColor>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.sm};
  z-index: 1;
`;
