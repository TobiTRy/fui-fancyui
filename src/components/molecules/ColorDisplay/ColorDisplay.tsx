import { useState } from 'react';
import Color from 'color';

import { themeStore } from '@/design/theme/themeStore';

import { copyToClipBoard } from '@/utils/functions/copyToClipBoard';
import { CheckerBoardPattern } from '@/components/atoms/CheckerBoardPattern';
import { SVGClipBoardIcon } from '@/components/icons/SVGClipBoardIcon';
import { Typography } from '@/components/atoms/Typography';
import { SVGClipBoardIconChecked } from '@/components/icons/SVGClipBoardIconChecked';

import { ColorDisplayContainer, Wrapper, Content, WrapperSVG } from './ColorDisplay.style';

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
    copyToClipBoard(color.toString())
      .then(() => {
        setCopyd(true);
        setTimeout(() => setCopyd(false), 1000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Wrapper $fullHeight={fullHeight} onClick={copyValue}>
      <Content $isBright={isBright} $isDarkTheme={isDarkTheme}>
        {showText && <Typography type="content">{color.toString()}</Typography>}
        <WrapperSVG>{copyd ? <SVGClipBoardIconChecked /> : <SVGClipBoardIcon />}</WrapperSVG>
      </Content>
      <ColorDisplayContainer color={color.toString()} opacity={opacity} />
      <CheckerBoardPattern />
    </Wrapper>
  );
}
