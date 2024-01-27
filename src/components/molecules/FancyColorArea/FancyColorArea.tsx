import Color from 'color';

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
import { colorToPosition, positionToColor } from './utils/calcPosition';

// --------------------------------------------------------------------------- //
// ----------- The main ColorArea Componet to pick a simple color ------------ //
// --------------------------------------------------------------------------- //
interface IColorArea {
  color: Color;
  hue: number;
  handler: (color: Color) => void;
}
export default function FancyColorArea({ color, hue, handler }: IColorArea) {
  //use the hue from the parent component or set it to 0
  const currentHue = hue ?? 0;

  //use the useSlider hook handles all the interaction with the color area
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color,
    hue: currentHue,
    positionToColorFunc: positionToColor,
    colorToPositionFunc: colorToPosition,
    handlerColor: handler,
    type: 'color',
  });

  return (
    <WrapperColorArea>
      {/* the color indicator that displays the current picked color (Moves with the marker)*/}
      <ColorIndicator
        position={{ y: markerPosition.y + '%', x: markerPosition.x + '%' }}
        color={Color(color).toString()}
        isActive={isInteracting}
      />
      {/* the color area with the gradients (PickedColor / Lightness / Saturation) */}
      <ColorAreaContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        <CurrentColorArea $hue={hue} />
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
