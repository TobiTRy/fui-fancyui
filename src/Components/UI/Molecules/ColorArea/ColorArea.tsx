import React from 'react';
import useSlider from '../../Organisms/ColorPicker/functions/useSilder';
import {
  WrapperColorArea,
  ColorAreaContainer,
  Marker,
  LightnessGradient,
  WrapperMarker,
} from './ColorArea.style';
import Color from 'color';
import ColorIndicator from '../../Atoms/ColorIndicator/ColorIndicator';


interface IColorArea {
  color: Color;
  hue: number;
  handler: (color: Color) => void;
}


const positionToColor = (hue: number ,clientX: number, clientY: number, rect: DOMRect) => {
  const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
  const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

  const saturation = (x / rect.width) * 100;
  const lightness = (1 - y / rect.height) * (100 - (x / rect.width) * 50);
  return { h: hue ?? 0, s: saturation, l: lightness };
};


const colorToPosition = (color: Color, rect: DOMRect) => {
  const transformedColor = Color(color);
  const hslColor = transformedColor.hsl().object();
  const saturation = hslColor.s;
  const lightness = hslColor.l;

  const calcX = (saturation / 100) * rect.width;
  const x = saturation;

  const calcYpos = rect.height * (1 - lightness / Math.max(1, 100 - 50 * (calcX / rect.width)));
  const y = (calcYpos / rect.height) * 100;
  return { x, y };
};


const ColorArea = ({ color, hue, handler }:IColorArea) => {
  const handleColorChange = (newColor: Color) => handler(newColor);

  const currentHue = hue ?? 0;
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color,
    hue: currentHue,
    positionToColorFunc: positionToColor,
    colorToPositionFunc: colorToPosition,
    handlerColor:handleColorChange,
    type: 'color',
  });

  return (
    <WrapperColorArea>
      <ColorAreaContainer hue={hue} ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        <LightnessGradient />

        {/* the sliders marker with the color indicator that displays the current picked color */}
        <WrapperMarker style={{ top: markerPosition.y + '%', left: markerPosition.x + '%'}}>
          <Marker>
            <ColorIndicator color={Color(color).toString()} isActive={isInteracting}/>
          </Marker>
        </WrapperMarker>
        
      </ColorAreaContainer>
    </WrapperColorArea>
  );
};

export default ColorArea;
