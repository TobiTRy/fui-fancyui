import React, { useEffect } from 'react';
import useSlider from '../functions/useSilder';
import {WrapperColorArea, WrapperColorIndicator,ColorAreaContainer, Marker, LightnessGradient,  ColorIndicator, WrapperMarker } from './ColorArea.style';
import Color from 'color';


const ColorArea = ({ color, hue, onColorChange }) => {
  const positionToColor = (clientX, clientY, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const saturation = (x / rect.width) * 100;
    const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
    console.log({ h: hue, s: saturation, l: lightness });
    return { h: hue, s: saturation, l: lightness };
  };

  const colorToPosition = (color, rect) => {
    const hslColor = typeof color === 'string' ? Color(color).hsl() : Color({ h: color.h, s: color.s, l: color.l }).hsl();
    const saturation = hslColor.color[1];
    const lightness = hslColor.color[2];

    const x = parseInt((saturation / 100) * rect.width);
    const y = parseInt(rect.height * (1 - lightness / (100 - 50 * (x / rect.width))));
    return { x, y };
  };

  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    initialValue: (rect) => colorToPosition(color, rect),
    valueToPosition: (value, rect) => colorToPosition(value, rect),
    positionToValue: (clientX, clientY, rect) => positionToColor(clientX, clientY, rect),
    onValueChange: onColorChange,
  });

  return (
    <WrapperColorArea>
      <WrapperColorIndicator style={{ top: markerPosition.y, left: markerPosition.x }}>
          <ColorIndicator color={Color(color).hex()} isActive={isInteracting}/>
      </WrapperColorIndicator>
      <ColorAreaContainer hue={hue} ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        <LightnessGradient />
        <WrapperMarker style={{ top: markerPosition.y, left: markerPosition.x }}>
          <Marker></Marker>
        </WrapperMarker>
      </ColorAreaContainer>
    </WrapperColorArea>
  );
};

export default ColorArea;
