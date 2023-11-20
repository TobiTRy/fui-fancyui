import React from 'react';
import Color from 'color';

import useSlider from '../../HelperFunctions/hooks/useSlider/useSilder';
import SliderMarker from '../../Atoms/SliderMarker/SliderMarker';
import ColorIndicator from '../../Atoms/ColorIndicator/ColorIndicator';
import { SliderContainer, SliderWrapper } from './FancyHueSlider.style';

//define the min and max hue value for the slider
const minHue = 0;
const maxHue = 359.9; // 360 is red again, 360degree is the same as 0 degree

//calculate the hue from the position of the marker from the slider
const positionToColorHue = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  const hue = (x / rect.width) * (maxHue - minHue);

  return Math.min(Math.max(hue, minHue), maxHue);
};

//calculate the position of the slider from the hue value
const colorToPositionHue = (color: Color) => {
  if (!color) return { x: 0, y: 0 };
  //get the hue value from the current color
  const hue = Color(color).hsl().object().h;
  //calculate the percentage of the hue value
  const huePercentage = ((hue - minHue) / (maxHue - minHue)) * 100;

  return { x: huePercentage, y: 0 };
};

// --------------------------------------------------------------------------- //
// --------  The main HueSlider Component to calulates the hue --------------- //
// --------------------------------------------------------------------------- //
interface IHueSlider {
  handler?: (hue: number) => void;
  hue?: number;
  color?: Color;
}
export default function FancyHueSlider(props: IHueSlider) {
  const { handler, hue, color } = { ...defaultProps, ...props };
  //give back the new hue value to the parent component
  const handleHueChange = (newHue: number) => handler && handler(parseFloat(newHue.toFixed(1)));

  //use the useSlider hook handles all the interaction with the slider
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color,
    hue,
    sliderPositionToColorFunc: positionToColorHue,
    colorToPositionFunc: colorToPositionHue,
    type: 'hue',
    handlerSlider: handleHueChange,
  });

  return (
    <SliderWrapper>
      <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        {/* the marker for the with the ColorIndicator to displays the current picked hue */}
        <SliderMarker position={markerPosition.x + '%'}>
          <ColorIndicator color={`hsl(${hue!}, 100%, 50% )`} isActive={isInteracting} />
        </SliderMarker>
      </SliderContainer>
    </SliderWrapper>
  );
}

const defaultProps: IHueSlider = {
  hue: 0,
};
