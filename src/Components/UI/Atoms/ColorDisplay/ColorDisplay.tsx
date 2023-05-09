import React from 'react';
import Color from 'color';

import { CheckerboardPattern } from '../CheckBoardPattern';
import { ColorDisplayContainer, Wrapper, Content, WrapperSVG } from './ColorDisplay.style';

const ClipBoardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="currentColor" viewBox="0 0 16 16">
    <path
      fill-rule="evenodd"
      d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
    />
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
  </svg>
);

// --------------------------------------------------------------------------- //
// ----- The main ColorDisplay Component for display the color in a box ------ //
// --------------------------------------------------------------------------- //
interface IColorDisplay {
  color: Color | string;
  opacity?: number;
  showText?: boolean;
  fullHeight?: boolean;
}
export default function ColorDisplay({ color, opacity, showText, fullHeight }: IColorDisplay) {
  opacity = opacity ? opacity : 1;
  const isBright = Color(color).isLight() && opacity > 0.5;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.toString());
  };

  return (
    <Wrapper fullHeight={fullHeight} onClick={copyToClipboard}>
      <Content isBright={isBright}>
        {showText && <p>{color.toString()}</p>}
        <WrapperSVG>
          <ClipBoardIcon />
        </WrapperSVG>
      </Content>
      <ColorDisplayContainer color={color.toString()} opacity={opacity} fullHeight={fullHeight} />
      <CheckerboardPattern />
    </Wrapper>
  );
}
