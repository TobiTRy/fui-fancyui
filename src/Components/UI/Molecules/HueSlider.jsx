import React, { useEffect } from "react";

import useSlider from "../Organisms/ColorPicker/functions/useSilder";
import SliderMarker from "../Atoms/SliderMarker";
import styled from "styled-components";

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
  user-select: none;
`;

const HueSlider = ({ onHueChange }) => {
  const {
    sliderRef,
    markerPosition,
    handleInteractionStart,
    isInteracting,
    positionToColor,
  } = useSlider({ color: null, hue: 0, onColorChange: () => {}, type: 'hue' });

  useEffect(() => {
    if (isInteracting) {
      const newHue = positionToColor(markerPosition.x, 0, sliderRef.current.getBoundingClientRect());
      onHueChange(newHue);
    }
  }, [isInteracting, markerPosition.x, positionToColor, onHueChange, sliderRef]);


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