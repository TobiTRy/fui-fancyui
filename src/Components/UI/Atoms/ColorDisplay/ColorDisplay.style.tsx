import Color from 'color';
import { styled } from 'styled-components';
import { borderRadius, fontSize, uiColors } from '../../Design/design';

export const Content = styled.div<{ $isBright: boolean }>`
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
  font-size: ${fontSize.small};
  color: ${({ $isBright }) => (!$isBright ? uiColors.secondary.main : uiColors.primary.main)};
  transition: color 0.2s ease-in-out;

  p {
    user-select: none;
  }

  &:active {
    color: ${({ $isBright }) => ($isBright ? uiColors.primary.dark : uiColors.secondary.dark)};
  }

  &:hover {
    color: ${({ $isBright }) => ($isBright ? uiColors.primary.dark : uiColors.secondary.dark)};
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
  border-radius: ${borderRadius.small};
  z-index: 1;
`;
