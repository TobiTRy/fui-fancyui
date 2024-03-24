import Color from 'color';
import { useMemo } from 'react';

import useSlider from '@/utils/hooks/useSlider/useSilder';

import SliderMarker from '@/components/atoms/SliderMarker/SliderMarker';
import { ColorIndicator } from '@/components/atoms/ColorIndicator';
import { CheckerBoardPattern } from '@/components/atoms/CheckerBoardPattern';

import { colorToPositionOpacity, positionToColorOpacity } from './utils/calcPosition';
import { Wrapper, SliderContainer, OpacityGradient } from './FancyOpacitySlider.style';

import { TFancyOpacitySliderWithHTMLProps } from './TFancyOpacitySlider.model';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ----- The main FancyOpacitySlider Component to calclulates the opacity ---- //
// --------------------------------------------------------------------------- //
export default function FancyOpacitySlider(props: TFancyOpacitySliderWithHTMLProps) {
  const { colorValue = '#f00', opacity = 1, handler, sizeC = 'sm', borderRadius, ...htmlProps } = props;
  //give the opacity back to the parent component
  const handleOpacityChange = (newHue: number) => handler?.(parseFloat(newHue.toFixed(2)));

  const color = useMemo(() => Color(colorValue), [colorValue]);

  //use the useSlider hook handles all the interaction with the opacity slider
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    opacity: opacity ?? 1,
    sliderPositionToColorFunc: positionToColorOpacity,
    colorToPositionFunc: colorToPositionOpacity,
    handlerSlider: handleOpacityChange,
    type: 'opacity',
  });

  return (
    <Wrapper $height={globalElementsizes[sizeSettings[sizeC].height]} {...htmlProps}>
      <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
        {/* the sliders marker with the color indicator which displays the opacity of the current color */}
        <SliderMarker position={markerPosition.x + '%'}>
          <ColorIndicator color={color.alpha(opacity).string()} isActive={isInteracting} />
        </SliderMarker>

        {/* the opacity gradient for the slider*/}
        <OpacityGradient
          $borderRadius={borderRadius ? borderRadius : sizeSettings[sizeC].borderRadius}
          style={{
            background: `linear-gradient(to right, ${color.hsl().alpha(0).toString()} 0%, ${color.hsl().alpha(1).toString()} 90%)`,
          }}
        />

        {/* the checkerboard pattern to display the transperancy*/}
        <CheckerBoardPattern externalStyle={{ position: 'absolute', top: 0, left: 0 }} />
      </SliderContainer>
    </Wrapper>
  );
}
