import React from 'react';
import Color from 'color';

import useSlider from '../../Atoms/Hooks/useSilder';
import SliderMarker from '../../Atoms/SliderMarker/SliderMarker';
import { SliderContainer, SliderGradient } from './OpacitySlider.style';
import { CheckerboardPattern } from '../../Atoms/CheckBoardPattern';
import ColorIndicator from '../../Atoms/ColorIndicator/ColorIndicator';

interface IOpacitySlider {
  color: Color;
  opacity: number;
  handler: (opacity: number) => void;
};

const minHue = 0;
const maxHue = 1;

// the position is calculated to the opacity value
const positionToColorOpacity = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  const hue = (x / rect.width) * (maxHue - minHue);

  return Math.min(Math.max(hue, minHue), maxHue);
};

// the position of the marker on the slider
const colorToPositionOpacity = (color: Color) => {
  const alpha = color.alpha();
  const x = alpha * 100;

  return { x, y: 0 };
};


// --------------------------------------------------------------------------- //
// ------------------- The Main Opacity Slider component --------------------- //
// --------------------------------------------------------------------------- //
const OpacitySlider = ({ color, opacity, handler }: IOpacitySlider) => {
  const handleOpacityChange = (newHue: number) => handler(parseFloat(newHue.toFixed(2)));

  const { sliderRef, markerPosition, handleInteractionStart, isInteracting} = useSlider({
    opacity,
    sliderPositionToColorFunc: positionToColorOpacity,
    colorToPositionFunc: colorToPositionOpacity,
    handlerSlider: handleOpacityChange,
    type: 'opacity',
  });


  return (
    <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
      {/* the sliders marker with the color indicator that displays the opacity of the current color */}
      <SliderMarker position={ markerPosition.x + '%' }>
        <ColorIndicator color={Color(color).alpha(opacity).string()} isActive={isInteracting}/>
      </SliderMarker>
      {/* the gradients of the slider */}
      <SliderGradient color={color.toString()} />
      <CheckerboardPattern />

    </SliderContainer>
  );
};

export default OpacitySlider;
