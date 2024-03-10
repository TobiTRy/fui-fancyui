import { useState } from 'react';
import Color from 'color';

import { themeStore } from '@/design/theme/themeStore';

import { copyToClipBoard } from '@/utils/functions/copyToClipBoard';
import { CheckerBoardPattern } from '@/components/atoms/CheckerBoardPattern';
import { SVGClipBoardIcon } from '@/components/icons/SVGClipBoardIcon';
import { Typography } from '@/components/atoms/Typography';
import { SVGClipBoardIconChecked } from '@/components/icons/SVGClipBoardIconChecked';

import { ColorDisplayContainer, Content, Wrapper } from './ColorDisplay.style';
import { TColorDisplay } from './TColorDisplay.model';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { sizeSettings } from './sizeSettings';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

// --------------------------------------------------------------------------- //
// ----- The main ColorDisplay Component for display the color in a box ------ //
// --------------------------------------------------------------------------- //
function ColorDisplay(props: TColorDisplay) {
  const { sizeC = 'sm', color, opacity, showText, fullHeight, borderRadius } = props;

  const [copyd, setCopyd] = useState(false);
  const isDarkTheme = themeStore.getState().isDarkTheme;

  // Check if the color is bright and the opacity is high
  const notNullOpacity = opacity === undefined ? 1 : opacity;
  const isBright = Color(color).isLight() && notNullOpacity > 0.5;

  // transform the color to a color with the opacity
  const transformedColor = Color(color).rgb().alpha(notNullOpacity);

  // Function to copy the color to the clipboard
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
    <Wrapper
      $fullHeight={fullHeight}
      $height={globalElementsizes[sizeSettings[sizeC].height]}
      $borderRadius={borderRadius ? borderRadius : sizeSettings[sizeC].borderRadius}
      onClick={copyValue}
    >
      {/* The Content to display the color and the copy icon */}
      <Content $isBright={isBright} $isDarkTheme={isDarkTheme}>
        {showText && <Typography variant={sizeSettings[sizeC].typographyVariant}>{color.toString()}</Typography>}
      </Content>

      {/* The ColorDisplayContainer to display the color */}
      <ColorDisplayContainer style={{ background: `${transformedColor.toString()}` }} />

      {/* The ChekerboardPattern to make the transparency visible */}
      <CheckerBoardPattern />
    </Wrapper>
  );
}

export default ColorDisplay;
