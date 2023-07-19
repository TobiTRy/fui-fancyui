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
  handler?: (value: string , e?: React.ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
  ref?: React.RefObject<HTMLInputElement>;
}
export default function RawSlider(props: IRawSlider) {
  const { disabled, id, maxValue, minValue, value, handler, ref, activeHandler } = props;
  const [sliderProgress, setSliderProgress] = useState<number>(0);
  const inputSlider = useRef<HTMLInputElement | null>(null);
  
  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  //initialize the min an max value when get it or not
  const minVal = minValue ? minValue : 0;
  const maxVal = maxValue ? maxValue : 50;

  //calc the the progress
  const calcBackgorundSize = !isNaN(sliderProgress) ? ((sliderProgress - minVal) * 100) / (maxVal - minVal) + '% 100%' : '0% 100%';
  const calcSliderProgress = !isNaN(sliderProgress) ? sliderProgress : 0;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | { target?: HTMLInputElement | null }) => {
    //if handler become no valid traget, skip the function
    const target = e.target;
    if (!target) return;

    //calc sting to vale
    let newVal = parseInt(target.value);

    //limit the value to the max value
    if (newVal > maxVal) newVal = maxVal;
    
    //save value in state
    setSliderProgress(newVal);
    //prevent the numberinput has a zero in front of the number
    target.value = newVal.toString()
    //if event change than give the value back to the parent
    if ('type' in e && e.type === 'change') {
      const calcValueForHanlder = !isNaN(newVal) ? newVal : 0;
      if (handler) handler(calcValueForHanlder.toString());
    }
  };


  useEffect(() => {
    //initialize the current value
    const currVal = value ? value : 50;
    setSliderProgress(currVal);

    //fake event
    const e = { target: inputSlider.current };
    inputHandler(e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //if the value change from the parent, set the new value
  useEffect(() => {
    setSliderProgress(value ? value : 0)
  }, [value])


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
        inputSlider.current?.focus()
        }}
      onTouchEnd={() => setTimeout(() => focusHandler(false), 500)}
      onChange={inputHandler}
    />
  );
}
