'use client';

import Color from 'color';
import { useMemo } from 'react';

import { ColorIndicator } from '@/components/atoms/ColorIndicator';
import { useSlider } from '@/utils/hooks/useSlider';
import {
  ColorAreaContainer,
  CurrentColorArea,
  LightnessGradient,
  Marker,
  SaturationGradient,
  WrapperColorArea,
  WrapperMarker,
} from './FancyColorArea.style';
import { TColorAreaWithHTMLAttrs } from './TFancyColorArea.model';
import { colorToPosition, positionToColor } from './utils/calcPosition';

// --------------------------------------------------------------------------- //
// ----------- The main ColorArea Componet to pick a simple color ------------ //
// --------------------------------------------------------------------------- //
export default function FancyColorArea(props: TColorAreaWithHTMLAttrs) {
  const { colorValue = '#f00', hue = 0, handler, borderRadius = 'sm', externalStyle } = props;

  //transform the color to a color object
  const transformedColor = useMemo(() => Color(colorValue), [colorValue]);

  //use the useSlider hook handles all the interaction with the color area
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color: transformedColor,
    hue: hue,
    positionToColorFunc: positionToColor,
    colorToPositionFunc: colorToPosition,
    handlerColor: handler,
    type: 'color',
  });

  return (
    <WrapperColorArea $externalStyle={externalStyle}>
      {/* the color indicator that displays the current picked color (Moves with the marker)*/}
      <ColorIndicator
        position={{ y: markerPosition.y + '%', x: markerPosition.x + '%' }}
        color={transformedColor.toString()}
        isActive={isInteracting}
      />
      {/* the color area with the gradients (PickedColor / Lightness / Saturation) */}
      <ColorAreaContainer
        ref={sliderRef}
        $borderRadius={borderRadius}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <CurrentColorArea $borderRadius={borderRadius} style={{ background: `hsl(${hue}, 100%, 50%)` }} />
        <LightnessGradient />
        <SaturationGradient />
        {/* the marker to display there current picked color on the area */}
        <WrapperMarker style={{ transform: `translate(${markerPosition.x + '%'}, ${markerPosition.y + '%'})` }}>
          <Marker />
        </WrapperMarker>
      </ColorAreaContainer>
    </WrapperColorArea>
  );
}
