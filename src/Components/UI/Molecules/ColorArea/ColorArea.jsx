import React from 'react';
import useSlider from '../../Atoms/ColorPicker/NewTry/functions/useSilder';
import {
  WrapperColorArea,
  WrapperColorIndicator,
  ColorAreaContainer,
  Marker,
  LightnessGradient,
  ColorIndicator,
  WrapperMarker,
} from './ColorArea.style';
import Color from 'color';

const ColorArea = ({ color, hue, handler }) => {
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color,
    hue,
    onColorChange: handler,
  });

  return (
    <WrapperColorArea>
      <WrapperColorIndicator style={{ top: markerPosition.y, left: markerPosition.x }}>
        <ColorIndicator color={Color(color).hex()} isActive={isInteracting} />
      </WrapperColorIndicator>
      <ColorAreaContainer hue={hue} ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        <LightnessGradient />
        <WrapperMarker style={{ top: markerPosition.y, left: markerPosition.x }}>
          <Marker />
        </WrapperMarker>
      </ColorAreaContainer>
    </WrapperColorArea>
  );
};

export default ColorArea;
