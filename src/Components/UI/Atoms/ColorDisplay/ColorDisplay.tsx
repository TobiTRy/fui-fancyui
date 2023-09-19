import React, { useState } from 'react';
import Color from 'color';

import Typography from '../Typography/Typography';
import copyToClipboard from '../../HelperFunctions/copyToClipBoard';
import CheckerBoardPattern from '../CheckerBoardPattern/CheckerBoardPattern';
import { ColorDisplayContainer, Wrapper, Content, WrapperSVG } from './ColorDisplay.style';
import ClipBoardIcon from '../../SVGIcons/SVGClipBoardIcon';
import ClipBoardIconCheck from '../../SVGIcons/SVGClipBoardIconChecked';
import themeStore from '../../Design/color/themeStore';

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
  const isDarkTheme = themeStore.getState().isDarkTheme;

  opacity = opacity !== undefined ? opacity : 1;
  const isBright = Color(color).isLight() && opacity > 0.5;

  const copyValue = () => {
    copyToClipboard(color.toString());
    setCopyd(true);
    setTimeout(() => setCopyd(false), 1000);
  };

  console.log(isBright, isDarkTheme)
  return (
    <Wrapper $fullHeight={fullHeight} onClick={copyValue}>
      <Content $isBright={isBright} $isDarkTheme={isDarkTheme}> 
        {showText && <Typography type="content">{color.toString()}</Typography>}
        <WrapperSVG>{copyd ? <ClipBoardIconCheck /> : <ClipBoardIcon />}</WrapperSVG>
      </Content>
      <ColorDisplayContainer color={color.toString()} opacity={opacity} />
      <CheckerBoardPattern />
    </Wrapper>
  );
}
