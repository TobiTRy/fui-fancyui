import React, { useEffect, useRef, useState } from 'react';
import { StyledRawSlider } from './RawSlider.style';

// --------------------------------------------------------------------------- //
// ------------ Here is createt the Slider Atom (Range Slider) --------------- //
// --------------------------------------------------------------------------- //
interface IRawSlider {
  disabled?: boolean;
  id?: string;
  minValue?: number;
  maxValue?: number;
  value?: number;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
  ref?: React.RefObject<HTMLInputElement>;
}
export default function RawSlider(props: IRawSlider) {
  const { disabled, id, maxValue, minValue, value, handler, ref, activeHandler } = props;
  const inputSlider = useRef<HTMLInputElement | null>(null);
  const sliderProgress = value ? value : 0

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  //initialize the min an max value when get it or not
  const minVal = minValue ? minValue : 0;
  const maxVal = maxValue ? maxValue : 100;

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
      type="range"
      value={calcSliderProgress}
      min={minVal}
      max={maxVal}
      onTouchStart={() => {
        focusHandler(true);
        inputSlider.current?.focus();
      }}
      onTouchEnd={() => setTimeout(() => focusHandler(false), 500)}
      onChange={handler}
    />
  );
}
