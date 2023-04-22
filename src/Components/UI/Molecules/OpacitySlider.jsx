import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import useSlider from '../Atoms/ColorPicker/NewTry/functions/useSilder';
import SliderMarker from '../Atoms/SliderMarker';

const SliderContainer = styled.div.attrs(props => {
  const { color } = props;
  const gradientStart = color.alpha(0).toString();
  const gradientEnd = color.alpha(1).toString();

  return {
    style: {
      background: `linear-gradient(to right, ${ gradientStart}, ${gradientEnd})`,
    },
  };
})`
  position: relative;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  touch-action: none;
  user-select: none;
`;


const OpacitySlider = ({ color, opacity, onOpacityChange }) => {
  const { sliderRef, markerPosition, handleInteractionStart } = useSlider({
    color: null,
    opacity, // Pass the opacity
    onColorChange: () => {},
    onOpacityChange, // Pass the onOpacityChange callback
    type: 'opacity', // Set the type as 'opacity'
  });

  useEffect(() => {
    const rect = sliderRef.current.getBoundingClientRect();
    onOpacityChange(markerPosition.x / rect.width);
  }, [markerPosition.x, onOpacityChange, sliderRef]);

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      color={color}
    >
      <SliderMarker style={{ left: markerPosition.x }} />
    </SliderContainer>
  );
};

export default OpacitySlider;
