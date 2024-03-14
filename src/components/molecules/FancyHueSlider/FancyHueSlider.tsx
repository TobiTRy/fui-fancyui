import { useSlider } from '@/utils/hooks/useSlider';
import { SliderMarker } from '@/components/atoms/SliderMarker';
import { ColorIndicator } from '@/components/atoms/ColorIndicator';

import { SliderContainer, SliderWrapper } from './FancyHueSlider.style';
import { colorToPositionHue, positionToColorHue } from './utils/calcPosition';
import { THueSlider } from './TFancyHueSlider.model';

// --------------------------------------------------------------------------- //
// --------  The main HueSlider Component to calulates the hue --------------- //
// --------------------------------------------------------------------------- //
export default function FancyHueSlider(props: THueSlider) {
  const { handler, hue = 0 } = props;
  //give back the new hue value to the parent component
  const handleHueChange = (newHue: number) => handler && handler(parseFloat(newHue.toFixed(1)));

  //use the useSlider hook handles all the interaction with the slider
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    hue,
    sliderPositionToColorFunc: positionToColorHue,
    colorToPositionFunc: colorToPositionHue,
    type: 'hue',
    handlerSlider: handleHueChange,
  });

  return (
    <SliderWrapper>
      <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        {/* the marker for the with the ColorIndicator to displays the current picked hue */}
        <SliderMarker position={markerPosition.x + '%'}>
          <ColorIndicator color={`hsl(${hue}, 100%, 50% )`} isActive={isInteracting} />
        </SliderMarker>
      </SliderContainer>
    </SliderWrapper>
  );
}
