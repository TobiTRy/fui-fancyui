import React, { useState } from 'react';
import Color from 'color';

import copyToClipboard from '../functions/copyToClipBoard';
import { CheckerboardPattern } from '../CheckBoardPattern';
import { ColorDisplayContainer, Wrapper, Content, WrapperSVG } from './ColorDisplay.style';

const ClipBoardIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
  <path d="M8.5 6.5a.5.5 0 0 0-1 0V8H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V9H10a.5.5 0 0 0 0-1H8.5V6.5Z"/>
</svg>
);

const ClipBoardIconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="currentColor" viewBox="0 0 16 16">
    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
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
  const [copyd, setCopyd] = useState(false);

  opacity = opacity !== undefined ? opacity : 1;
  const isBright = Color(color).isLight() && opacity > 0.5;

  const copyValue = () => {
    copyToClipboard(color.toString());
    setCopyd(true);
    setTimeout(() => setCopyd(false), 1000);
  };

  return (
    <Wrapper fullHeight={fullHeight} onClick={copyValue}>
      <Content isBright={isBright} >
        {showText && <p>{color.toString()}</p>}
        <WrapperSVG>{copyd ? <ClipBoardIconCheck /> : <ClipBoardIcon />}</WrapperSVG>
      </Content>
      <ColorDisplayContainer color={color.toString()} opacity={opacity} fullHeight={fullHeight} />
      <CheckerboardPattern />
    </Wrapper>
  );
}
