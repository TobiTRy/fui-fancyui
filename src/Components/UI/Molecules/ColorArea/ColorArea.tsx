import React from 'react';
import useSlider from '../../Organisms/ColorPicker/functions/useSilder';
import {
  WrapperColorArea,
  ColorAreaContainer,
  Marker,
  LightnessGradient,
  WrapperMarker,
  SaturationGradient
} from './ColorArea.style';
import Color from 'color';
import ColorIndicator from '../../Atoms/ColorIndicator/ColorIndicator';


interface IColorArea {
  color: Color;
  hue: number;
  handler: (color: Color) => void;
}

const positionToColor = (hue: number, clientX: number, clientY: number, rect: DOMRect) => {
  const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
  const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

  const saturation = (x / rect.width) * 100;
  const value = 100 - (y / rect.height) * 100;

  return {
    h: hue ?? 0,
    s: saturation,
    v: value
  };
};


const colorToPosition = (color: Color, rect: DOMRect) => {
  const hsvColor = color.hsv().object();
  const saturation = hsvColor.s;
  const value = hsvColor.v;

  const x = (saturation * rect.width) / 100;
  const y = (1 - value / 100) * rect.height;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  return { x: Math.max(0, xPercent), y: Math.max(0, yPercent) };
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
        <LightnessGradient hue={hue}/>
        <SaturationGradient hue={hue}/>

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
