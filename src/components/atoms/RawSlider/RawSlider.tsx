import { useState } from 'react';

import { TRawSliderWithNativeAttrs } from '@/components/atoms/RawSlider/TRawSlider.model';
import { StyledRawSlider } from './RawSlider.style';

// --------------------------------------------------------------------------- //
// ------------ Here is createt the Slider Atom (Range Slider) --------------- //
// --------------------------------------------------------------------------- //
export default function RawSlider(props: TRawSliderWithNativeAttrs) {
  const { max, min, value, ref, themeType, layer, onChange, onTouchStart, style, onTouchEnd, ...htmlProps } = props;

  const [sliderProgressState, setSliderProgressState] = useState(value ? Number(value) : 0);
  //is the slider moving or not for mobile devices to handle the box shadow
  const [isMoving, setIsMoving] = useState(false);

  //initialize the min an max value when get it or not
  const minVal = min ? Number(min) : 0;
  const maxVal = max ? Number(max) : 100;

  //calc the the progress
  const calcBackgorundSize = !isNaN(sliderProgressState)
    ? ((sliderProgressState - minVal) * 100) / (maxVal - minVal) + '% 100%'
    : '0% 100%';

  return (
    <StyledRawSlider
      type="range"
      ref={ref}
      $isActive={isMoving}
      onMouseDown={() => setIsMoving(true)}
      onMouseUp={() => setIsMoving(false)}
      onTouchStart={(e) => {
        setIsMoving(true);
        onTouchStart?.(e);
      }}
      onTouchEnd={(e) => {
        setIsMoving(false);
        onTouchEnd?.(e);
      }}
      $themeType={themeType}
      $layer={layer}
      style={{ backgroundSize: calcBackgorundSize, ...style }}
      value={!isNaN(sliderProgressState) ? sliderProgressState : 0}
      min={minVal}
      max={maxVal}
      onChange={(e) => {
        onChange?.(e);
        setSliderProgressState(Number(e.target.value));
      }}
      {...htmlProps}
    />
  );
}
