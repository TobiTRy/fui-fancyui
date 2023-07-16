import React, { useState } from 'react';
import Color from 'color';

import copyToClipboard from '../functions/copyToClipBoard';
import { CheckerboardPattern } from '../CheckBoardPattern';
import { ColorDisplayContainer, Wrapper, Content, WrapperSVG } from './ColorDisplay.style';
import ClipBoardIcon from '../../SVGIcons/SVGClipBoardIcon';
import ClipBoardIconCheck from '../../SVGIcons/SVGClipBoardIconChecked';

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
    <Wrapper $fullHeight={fullHeight} onClick={copyValue}>
      <Content $isBright={isBright} >
        {showText && <p>{color.toString()}</p>}
        <WrapperSVG>{copyd ? <ClipBoardIconCheck /> : <ClipBoardIcon />}</WrapperSVG>
      </Content>
      <ColorDisplayContainer color={color.toString()} opacity={opacity} />
      <CheckerboardPattern />
    </Wrapper>
  );
}
