import Color from 'color';

import useSlider from '@/utils/hooks/useSlider/useSilder';

import SliderMarker from '@/components/atoms/SliderMarker/SliderMarker';
import { ColorIndicator } from '@/components/atoms/ColorIndicator';
import { CheckerBoardPattern } from '@/components/atoms/CheckerBoardPattern';

import { colorToPositionOpacity, positionToColorOpacity } from './utils/calcPosition';
import { Wrapper, SliderContainer, OpacityGradient } from './FancyOpacitySlider.style';

// --------------------------------------------------------------------------- //
// ------- The main FancyOpacitySlider Component to calclulates the opacity ------- //
// --------------------------------------------------------------------------- //
interface IOpacitySlider {
  color: Color;
  opacity: number;
  handler: (opacity: number) => void;
}
export default function FancyOpacitySlider({ color, opacity, handler }: IOpacitySlider) {
  //give the opacity back to the parent component
  const handleOpacityChange = (newHue: number) => handler(parseFloat(newHue.toFixed(2)));

  //use the useSlider hook handles all the interaction with the opacity slider
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    opacity: opacity ?? 1,
    sliderPositionToColorFunc: positionToColorOpacity,
    colorToPositionFunc: colorToPositionOpacity,
    handlerSlider: handleOpacityChange,
    type: 'opacity',
  });

  return (
    <Wrapper>
      <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        {/* the sliders marker with the color indicator which displays the opacity of the current color */}
        <SliderMarker position={markerPosition.x + '%'}>
          <ColorIndicator color={Color(color).alpha(opacity).string()} isActive={isInteracting} />
        </SliderMarker>

        {/* the opacity gradient for the slider*/}
        <OpacityGradient $color={color.toString()} />

        {/* the checkerboard pattern to display the transperancy*/}
        <CheckerBoardPattern externalStyle={{ position: 'absolute', top: 0, left: 0 }} />
      </SliderContainer>
    </Wrapper>
  );
}
