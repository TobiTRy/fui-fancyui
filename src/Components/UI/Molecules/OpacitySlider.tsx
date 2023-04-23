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
}

const OpacitySlider = ({ color, opacity, handler }: IOpacitySlider) => {
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting, positionToColor } = useSlider({
    color: color,
    opacity, 
    onColorChange: () => {},
    type: 'opacity', 
  });

  useEffect(() => {
    if(isInteracting) {
      const newOpacity = positionToColor(markerPosition.x, 0, sliderRef.current.getBoundingClientRect()) as number;
      handler(newOpacity);
    }
  }, [isInteracting, markerPosition.x, positionToColor, handler, sliderRef]);

  
  
  
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
