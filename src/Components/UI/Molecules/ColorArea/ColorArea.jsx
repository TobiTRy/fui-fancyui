import React, {useEffect} from 'react';
import useSlider from '../../Organisms/ColorPicker/functions/useSilder';
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


const positionToColor = (hue ,clientX, clientY, rect) => {
  const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
  const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

  const saturation = (x / rect.width) * 100;
  const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
  return { h: hue ?? 0, s: saturation, l: lightness };
};


const colorToPosition = (color, rect) => {
  const transformedColor = Color(color);
  const hslColor = transformedColor.hsl().object();
  const saturation = hslColor.s;
  const lightness = hslColor.l;

  const x = (saturation / 100) * rect.width;
  const y = rect.height * (1 - lightness / Math.max(1, 100 - 50 * (x / rect.width)));
  return { x, y };
};


const ColorArea = ({ color, hue, handler }) => {
  const currentHue = hue ?? 0;
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color,
    currentHue,
    positionToColorFunc: positionToColor,
    colorToPositionFunc: colorToPosition,
  });

  useEffect(() => {
    console.log('colorArea', color);
    const newColor = positionToColor(currentHue, markerPosition.x, markerPosition.y, sliderRef.current.getBoundingClientRect());
    handler(newColor)
  }, [color, currentHue, markerPosition, sliderRef, handler]);

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
