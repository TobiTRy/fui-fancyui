import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Color from 'color';

import useSlider from '../Organisms/ColorPicker/functions/useSilder';
import SliderMarker from '../Atoms/SliderMarker';


// Style for the Slider
const SliderContainer = styled.div.attrs<{color: Color}>(({color}) => {
  const transformdToColor = Color(color).hsl();
  const gradientStart = transformdToColor.alpha(0).toString();
  const gradientEnd = transformdToColor.alpha(1).toString();

  return {
    style: {
      background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
    },
  };
})<{color: string}>`
  overflow: hidden;
  position: relative;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  touch-action: none;
  user-select: none;
`;

interface IOpacitySlider {
  color: Color;
  opacity: number;
  handler: (opacity: number) => void;
};


const minHue = 0;
const maxHue = 1;

const positionToColorOpacity = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  const hue = (x / rect.width) * (maxHue - minHue);
  return Math.min(Math.max(hue, minHue), maxHue);

};


const colorToPositionOpacity = (color: Color, rect: DOMRect) => {
  const alpha = color.alpha();
  const x = alpha * rect.width;
  return { x, y: 0 };
};


const OpacitySlider = ({ color, opacity, handler }: IOpacitySlider) => {
  const handleOpacityChange = (newHue:number) => handler(parseFloat(newHue.toFixed(1)));
  const { sliderRef, markerPosition, handleInteractionStart } = useSlider({
    color: color,
    opacity, 
    sliderPositionToColorFunc: positionToColorOpacity,
    colorToPositionFunc: colorToPositionOpacity,
    handlerSlider: handleOpacityChange,
    type: 'opacity', 
  });


  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      color={color.toString()}
    >
      <SliderMarker style={{ left: markerPosition.x }} />
    </SliderContainer>
  );
};

export default OpacitySlider;
