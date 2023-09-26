import React, { InputHTMLAttributes, useRef } from 'react';
import { StyledRawSlider } from './RawSlider.style';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TUiColorsType } from '../../Design/color/designColor';



// --------------------------------------------------------------------------- //
// ------------ Here is createt the Slider Atom (Range Slider) --------------- //
// --------------------------------------------------------------------------- //
export interface IRawSlider extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  activeHandler?: (value: boolean) => void;
  ref?: React.RefObject<HTMLInputElement>;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function RawSlider(props: IRawSlider) {
  const { disabled, id, max, min, value, ref, activeHandler, themeType, layer, ...htmlProps } = props;
  const inputSlider = useRef<HTMLInputElement | null>(null);
  const sliderProgress = value ? Number(value) : 0;

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  //initialize the min an max value when get it or not
  const minVal = min ? Number(min) : 0;
  const maxVal = max ? Number(max) : 100;

  //calc the the progress
  const calcBackgorundSize = !isNaN(sliderProgress) ? ((sliderProgress - minVal) * 100) / (maxVal - minVal) + '% 100%' : '0% 100%';
  const calcSliderProgress = !isNaN(sliderProgress) ? sliderProgress : 0;

  return (
    <StyledRawSlider
      disabled={disabled}
      ref={ref}
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
      style={{ backgroundSize: calcBackgorundSize }}
      id={id}
      $themeType={themeType}
      $layer={layer}
      type="range"
      value={calcSliderProgress}
      min={minVal}
      max={maxVal}
      onTouchStart={() => {
        focusHandler(true);
        inputSlider.current?.focus();
      }}
      onTouchEnd={() => setTimeout(() => focusHandler(false), 500)}
      {...htmlProps}
    />
  );
}
