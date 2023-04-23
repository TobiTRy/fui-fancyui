import React, { useEffect, MouseEventHandler } from "react";

import useSlider from "../Organisms/ColorPicker/functions/useSilder";
import SliderMarker from "../Atoms/SliderMarker";
import styled from "styled-components";
import { borderRadius } from "../Design/design";
import Color from "color";

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 20px;
  background: linear-gradient(
    to right,
    red 0%,
    yellow 17%,
    lime 33%,
    cyan 50%,
    blue 67%,
    magenta 83%,
    red 100%
  );
  cursor: pointer;
  border-radius: ${borderRadius.small};
  user-select: none;
`;

interface IHueSlider {
  handler: (hue: number) => void;
  hue: number;
  color: Color;
}

const HueSlider = ({ color, hue, handler }: IHueSlider) => {
  const {
    sliderRef,
    markerPosition,
    handleInteractionStart,
    isInteracting,
    positionToColor,
  } = useSlider({ color: color, hue, onColorChange: () => {}, type: 'hue' });



  useEffect(() => {
    if (isInteracting) {
      const newHue = positionToColor(markerPosition.x, 0, sliderRef.current.getBoundingClientRect()) as number;
      handler(newHue);
    }
  }, [isInteracting, markerPosition.x, positionToColor, handler, sliderRef]);


  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
    >
      <SliderMarker style={{ left: markerPosition.x }} />
    </SliderContainer>
  );
};

export default HueSlider;