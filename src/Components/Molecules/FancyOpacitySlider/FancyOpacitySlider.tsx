import React from 'react';
import Color from 'color';

import useSlider from '../../utils/hooks/useSlider/useSilder';
import SliderMarker from '../../Atoms/SliderMarker/SliderMarker';
import { Wrapper, SliderContainer, OpacityGradient } from './FancyOpacitySlider.style';
import CheckerboardPattern from '../../Atoms/CheckerBoardPattern/CheckerBoardPattern';
import ColorIndicator from '../../Atoms/ColorIndicator/ColorIndicator';

//define the min and max value for the opacity
const minOpacity = 0;
const maxOpacity = 1;

// calculate the color from the position on the slider
const positionToColorOpacity = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  //calculate the opacity from the marker position
  const opacity = (x / rect.width) * (maxOpacity - minOpacity);

  return Math.min(Math.max(opacity, minOpacity), maxOpacity);
};

// calculate the position from the color on the slider
const colorToPositionOpacity = (color: Color) => {
  const alpha = color.alpha(); // alpha values are set from 0.01 to 1
  const x = alpha * 100;

  return { x, y: 0 };
};

// --------------------------------------------------------------------------- //
// ------- The main FancyOpacitySlider Component to calclulates the opacity ------- //
// --------------------------------------------------------------------------- //
interface IOpacitySlider {
  color: Color;
  opacity: number;
  handler: (opacity: number) => void;
}
export default function FancyOpacitySlider({ color, opacity, handler }: IOpacitySlider) {
  //give the opacity back to the parent component
  const handleOpacityChange = (newHue: number) => handler(parseFloat(newHue.toFixed(2)));

  //use the useSlider hook handles all the interaction with the opacity slider
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    opacity: opacity ?? 1,
    sliderPositionToColorFunc: positionToColorOpacity,
    colorToPositionFunc: colorToPositionOpacity,
    handlerSlider: handleOpacityChange,
    type: 'opacity',
  });

  return (
    <Wrapper>
      <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        {/* the sliders marker with the color indicator which displays the opacity of the current color */}
        <SliderMarker position={markerPosition.x + '%'}>
          <ColorIndicator color={Color(color).alpha(opacity).string()} isActive={isInteracting} />
        </SliderMarker>

        {/* the opacity gradient for the slider*/}
        <OpacityGradient $color={color.toString()} />

        {/* the checkerboard pattern to display the transperancy*/}
        <CheckerboardPattern />
      </SliderContainer>
    </Wrapper>
  );
}
