import Color from 'color';

import { themeStore } from '@/design/theme/themeStore';
import { CheckerBoardPattern } from '@/components/atoms/CheckerBoardPattern';
import { globalElementsizes } from '@/design/theme/globalSizes';

import { ColorDisplayContainer, Content, Wrapper } from './ColorDisplay.style';
import { TColorDisplayWithHTMLAttrs } from './TColorDisplay.model';
import ClipBoardIcon from './components/ClipBoardIcon/ClipBoardIcon';
import ColorText from './components/ColorText/ColorText';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ----- The main ColorDisplay Component for display the color in a box ------ //
// --------------------------------------------------------------------------- //
function ColorDisplay(props: TColorDisplayWithHTMLAttrs) {
  const { sizeC = 'sm', colorValue, opacity, fullHeight, borderRadius, children, ...htmlProps } = props;
  const isDarkTheme = themeStore.getState().isDarkTheme;

  // Check if the color is bright and the opacity is high
  const notNullOpacity = opacity === undefined ? 1 : opacity;
  const isBright = Color(colorValue).isLight() && notNullOpacity > 0.5;

  // transform the color to a color with the opacity
  const transformedColor = Color(colorValue).rgb().alpha(notNullOpacity);

  return (
    <Wrapper
      $fullHeight={fullHeight}
      $height={globalElementsizes[sizeSettings[sizeC].height]}
      $borderRadius={borderRadius ? borderRadius : sizeSettings[sizeC].borderRadius}
      {...htmlProps}
    >
      {/* The Content to display the color and the copy icon */}
      <Content $isBright={isBright} $isDarkTheme={isDarkTheme}>
        {children}
      </Content>

      {/* The ColorDisplayContainer to display the color */}
      <ColorDisplayContainer style={{ background: `${transformedColor.toString()}` }} />

      {/* The ChekerboardPattern to make the transparency visible */}
      <CheckerBoardPattern externalStyle={{ position: 'absolute', top: '0', left: '0' }} />
    </Wrapper>
  );
}

ColorDisplay.ClipBoardIcon = ClipBoardIcon;
ColorDisplay.ColorValue = ColorText;

export default ColorDisplay;
