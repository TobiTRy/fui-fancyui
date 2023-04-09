import React, { useEffect, useId, useRef, useState } from 'react';
import IFancyRangeSlider from './FancyRangeSlider.model';
import { Icon, Label, NumberInput, NumberContainer, RangeSlider, RangeSliderContainer } from './FancyRangeSlider.style';

import { InputWarapper } from '../../Atoms/InputWrapper';
import UnderLine from '../../Atoms/InputUnderline';

// --------------------------------------------------------------------------- //
// -------------------- The main component for the slider--------------------- //
// --------------------------------------------------------------------------- //
export default function FancyRangeSlider(props: IFancyRangeSlider) {
  //the destructured values from the props
  const { label, labelAlign, icon, displayNumber, currentValue, minValue, maxValue, handler, disabled } = props;

  const [isActive, setIsActive] = useState(false);
  const [sliderProgress, setSliderProgress] = useState<number>(currentValue ? currentValue : 0);
  const [toutched, setToutched] = useState(false);

  const inputSlider = useRef<HTMLInputElement | null>(null);
  const id = useId();

  //initialize the min an max value when get it or not
  const minVal = minValue ? minValue : 0;
  const maxVal = maxValue ? maxValue : 50;

  //calc the the progress
  const calcBackgorundSize = !isNaN(sliderProgress) ? ((sliderProgress - minVal) * 100) / (maxVal - minVal) + '% 100%' : '0% 100%';
  const calcSliderProgress = !isNaN(sliderProgress) ? sliderProgress : 0;


  const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | { target?: HTMLInputElement | null }) => {
    //if handler become no valid traget, skip the function
    let target = e.target;
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
      if (handler) handler(calcValueForHanlder);

      setToutched(true);
    }
  };

  useEffect(() => {
    //initialize the current value
    const currVal = currentValue ? currentValue : 50;
    setSliderProgress(currVal);

    //fake event
    let e = { target: inputSlider.current };
    inputHandler(e);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <InputWarapper disabled={disabled}>
      {/* Icon for the left side of the slider */}
      {icon && <Icon active={isActive}>{icon}</Icon>}

      {/* label for the top side of the slider */}
      {label && (
        <Label htmlFor={id} align={labelAlign} active={isActive || toutched}>
          {label}
        </Label>
      )}
      <RangeSliderContainer>
        <RangeSlider
          disabled={disabled}
          ref={inputSlider}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          style={{ backgroundSize: calcBackgorundSize }}
          id={id}
          type="range"
          value={calcSliderProgress}
          min={minVal}
          max={maxVal}
          onTouchStart={() => inputSlider.current?.focus()}
          onChange={inputHandler}
        />
      </RangeSliderContainer>
      {/* Number input for typing the number */}
      {displayNumber && (
        <NumberContainer>
          <NumberInput
            disabled={disabled}
            type="number"
            width={calcSliderProgress.toString().length + 1 + 'ch'}
            active={isActive}
            value={!isNaN(sliderProgress) ? sliderProgress : ''}
            min={minVal}
            max={maxVal}
            onChange={inputHandler}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
          <UnderLine active={isActive} />
        </NumberContainer>
      )}
    </InputWarapper>
  );
}
