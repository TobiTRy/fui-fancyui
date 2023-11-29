import React from 'react';
import Color from 'color';

import useSlider from '../../../utils/hooks/useSlider/useSilder';
import {
  WrapperColorArea,
  ColorAreaContainer,
  Marker,
  LightnessGradient,
  WrapperMarker,
  SaturationGradient,
  CurrentColorArea,
} from './FancyColorArea.style';
import ColorIndicator from '../../../Atoms/ColorIndicator/ColorIndicator';

//this function calculates the current color to a position using the HSV Color Type
//HSV can be better used for merging Lightness and Saturation (L: 100 and S:100) = Full Color
const positionToColor = (hue: number, clientX: number, clientY: number, rect: DOMRect) => {
  //calculate the position of the mouse in the color area(rect)
  const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
  const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

  //calculate the saturation and lightness(value) from the position
  const saturation = (x / rect.width) * 100;
  const value = 100 - (y / rect.height) * 100;

  return {
    h: hue ?? 0,
    s: saturation,
    v: value,
  };
};

//this function calculates the color to the position on the area using the HSV Color Type
const colorToPosition = (color: Color, rect: DOMRect) => {
  //get the saturation and lightness(value) from the color
  const hsvColor = color.hsv().object();
  const saturation = hsvColor.s;
  const value = hsvColor.v;

  //calculate the x and y position from the saturation and lightness(value)
  const x = (saturation * rect.width) / 100;
  const y = (1 - value / 100) * rect.height;

  //calculate the percentage of the position
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  return { x: Math.max(0, xPercent), y: Math.max(0, yPercent) };
};

// --------------------------------------------------------------------------- //
// ----------- The main ColorArea Componet to pick a simple color ------------ //
// --------------------------------------------------------------------------- //
interface IColorArea {
  color: Color;
  hue: number;
  handler: (color: Color) => void;
}
export default function FancyColorArea({ color, hue, handler }: IColorArea) {
  //use the hue from the parent component or set it to 0
  const currentHue = hue ?? 0;

  //use the useSlider hook handles all the interaction with the color area
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color,
    hue: currentHue,
    positionToColorFunc: positionToColor,
    colorToPositionFunc: colorToPosition,
    handlerColor: handler,
    type: 'color',
  });

  return (
    <WrapperColorArea>
      {/* the color indicator that displays the current picked color (Moves with the marker)*/}
      <ColorIndicator
        position={{ y: markerPosition.y + '%', x: markerPosition.x + '%' }}
        color={Color(color).toString()}
        isActive={isInteracting}
      />
      {/* the color area with the gradients (PickedColor / Lightness / Saturation) */}
      <ColorAreaContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        <CurrentColorArea $hue={hue} />
        <LightnessGradient />
        <SaturationGradient />
        {/* the marker to display there current picked color on the area */}
        <WrapperMarker style={{ transform: `translate(${markerPosition.x + '%'}, ${markerPosition.y + '%'})` }}>
          <Marker />
        </WrapperMarker>
      </ColorAreaContainer>
    </WrapperColorArea>
  );
}
