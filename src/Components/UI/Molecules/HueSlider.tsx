import React, { useEffect, MouseEventHandler } from 'react';

import useSlider from '../Organisms/ColorPicker/functions/useSilder';
import SliderMarker from '../Atoms/SliderMarker';
import styled from 'styled-components';
import { borderRadius } from '../Design/design';
import Color from 'color';

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 20px;
  background: linear-gradient(to right, red 0%, yellow 17%, lime 33%, cyan 50%, blue 67%, magenta 83%, red 100%);
  cursor: pointer;
  border-radius: ${borderRadius.small};
  user-select: none;
`;

interface IHueSlider {
  handler: (hue: number) => void;
  hue: number;
  color: Color;
}

const minHue = 0;
const maxHue = 359.9;

const positionToColorHue = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  const hue = (x / rect.width) * (maxHue - minHue);
  console.log(Math.min(Math.max(hue, minHue), maxHue));
  return Math.min(Math.max(hue, minHue), maxHue);

};

const colorToPositionHue = (color: Color, rect: DOMRect) => {
  if(!color) return { x: 0, y: 0 };
  const trueColor = Color(color);
  const hue = trueColor.hsl().object().h;
  const x = ((hue - minHue) / (maxHue - minHue)) * rect.width;
  return { x, y: 0 };
};




const HueSlider = ({ color, hue, handler }: IHueSlider) => {
  const handleHueChange = (newHue:number) => console.log(newHue);
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider<number>({
    color: color,
    hue,
    sliderPositionToColorFunc: positionToColorHue,
    colorToPositionFunc: colorToPositionHue,
    type: 'hue',
    handler: handleHueChange,
  });


  return (
    <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
      <SliderMarker style={{ left: markerPosition.x }} />
    </SliderContainer>
  );
};

export default HueSlider;
