import React from 'react';
import useSlider from '../functions/useSilder';
import {WrapperColorArea, WrapperColorIndicator,ColorAreaContainer, Marker, LightnessGradient,  ColorIndicator, WrapperMarker } from './ColorArea.style';
import Color from 'color';


const ColorArea = ({ color, hue, handler }) => {
  //calculate the color from the marker position on the color area
  const positionToColor = (clientX, clientY, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    const saturation = (x / rect.width) * 100;
    const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
    return { h: hue, s: saturation, l: lightness };
  };

  //calculate the position of the marker from the color
  const colorToPosition = (color, rect) => {
    let hslColor;
    console.log(color);
    if (typeof color === 'string') {
      hslColor = Color(color).hsl();
    } else if (color.h !== undefined && color.s !== undefined && color.l !== undefined) {
      hslColor = Color({ h: color.h, s: color.s, l: color.l }).hsl();
    } else {
      // If the input color object doesn't have valid HSL values, use default values
      hslColor = Color({ h: 0, s: 0, l: 0 }).hsl();
    }

    const saturation = hslColor.color[1];
    const lightness = hslColor.color[2];
  
    const x = parseInt((saturation / 100) * rect.width);
    const y = parseInt(rect.height * (1 - lightness / Math.max(1, (100 - 50 * (x / rect.width)))));
    console.log(x,y);
    return { x, y };
  };
  
  //use the custom hook to handle the marker position and the interaction with the color area
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    initialValue: (rect) => colorToPosition(color, rect),
    colorToPosition: (value, rect) => colorToPosition(value, rect),
    positionToColor: (clientX, clientY, rect) => positionToColor(clientX, clientY, rect),
    onValueChange: handler,
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
