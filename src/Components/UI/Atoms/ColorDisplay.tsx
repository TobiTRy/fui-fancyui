import React from 'react';
import Color from 'color';
import styled from 'styled-components';

import { borderRadius } from '../Design/design';
import { CheckerboardPattern } from './CheckBoardPattern';

interface IColorDisplay {
  color: Color;
  opacity?: number;
  fullHeight?: boolean;
}

const Wrapper = styled.div<{fullHeight?: boolean}>`
  position: relative;
  width: 100%;
  height: ${({fullHeight}) => (fullHeight ? '100%' : '20px')};
`;

const colorDisplayColor = ({ color, opacity }: { color: string; opacity?: number }) => {
  const checkOpacity = opacity === undefined ? 1 : opacity;
  const transformedColor = Color(color).rgb().alpha(checkOpacity);
  return {
    style: {
      background: `${transformedColor.toString()}`,
    },
  };
};

const ColorDisplayContainer = styled.div.attrs(colorDisplayColor)<{ color: string; opacity?: number; fullHeight?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.small};
  z-index: 1;
`;

// --------------------------------------------------------------------------- //
// ----- The main ColorDisplay Component for display the color in a box ----- //
// --------------------------------------------------------------------------- //
export default function ColorDisplay({ color, opacity, fullHeight }: IColorDisplay) {
  return (
    <Wrapper fullHeight={fullHeight}>
      <ColorDisplayContainer color={color.toString()} opacity={opacity} fullHeight={fullHeight}/>
      <CheckerboardPattern  />
    </Wrapper>
  );
}

