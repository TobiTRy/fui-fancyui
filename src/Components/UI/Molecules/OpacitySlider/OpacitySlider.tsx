import React from 'react';
import Color from 'color';

import useSlider from '../../Organisms/ColorPicker/functions/useSilder';
import SliderMarker from '../../Atoms/SliderMarker/SliderMarker';
import { CheckerboardPattern, SliderContainer, SliderGradient } from './OpacitySlider.style';
import ColorIndicator from '../../Atoms/ColorIndicator/ColorIndicator';

interface IOpacitySlider {
  color: Color;
  opacity: number;
  handler: (opacity: number) => void;
}

const positionToColorOpacity = (clientX: number, rect: DOMRect) => {
  const minHue = 0;
  const maxHue = 1;

  const x = clientX - rect.left;
  const hue = (x / rect.width) * (maxHue - minHue);

  return Math.min(Math.max(hue, minHue), maxHue);
};

const colorToPositionOpacity = (color: Color) => {
  const alpha = color.alpha();
  const x = alpha * 100;
  return { x, y: 0 };
};

const OpacitySlider = ({ color, opacity, handler }: IOpacitySlider) => {
  const handleOpacityChange = (newHue: number) => handler(parseFloat(newHue.toFixed(2)));
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting} = useSlider({
    opacity,
    sliderPositionToColorFunc: positionToColorOpacity,
    colorToPositionFunc: colorToPositionOpacity,
    handlerSlider: handleOpacityChange,
    type: 'opacity',
  });


  return (
    <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
      <SliderMarker position={ markerPosition.x + '%' }>
        <ColorIndicator color={Color(color).alpha(opacity).string()} isActive={isInteracting}/>
      </SliderMarker>
      <SliderGradient color={color.toString()} />
      <CheckerboardPattern />
    </SliderContainer>
  );
};

export default OpacitySlider;
