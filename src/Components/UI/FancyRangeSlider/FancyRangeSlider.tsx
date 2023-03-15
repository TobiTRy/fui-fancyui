import React, { SyntheticEvent, useEffect, useId, useRef, useState } from 'react';
import styled from 'styled-components';

import { uiColors } from '../Design/design';

interface IFancyRangeSlider {
  label?: string;
  currentValue?: number;
  minValue?: number;
  maxValue?: number;
  displayNumber?: boolean;
  handler?: (e: number) => void;
  icon?: JSX.Element;
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 0;
  width: 100%;
  flex-direction: column;
  text-align: left;
  margin: 0 0 0.2rem 0;
`;

const RangeSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0;
`;

const NumberInput = styled.input`
  border-radius: 0;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  background-color: transparent;
  color: white;
  border: none;
  margin-right: 10px;
  border-bottom: solid 2px;
`;

const RangeSlider = styled.input`
  -webkit-appearance: none;
  flex-grow: 1;
  margin: 0;
  height: 10px;
  background: gray;
  border-radius: 5px;
  background-image: linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.main_light});
  background-size: 70% 100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: ${uiColors.accent.hover};
    cursor: ew-resize;
    box-shadow: 0 0 8px 0 rgba(85, 85, 85, 0.516);
    transition: background 0.1s ease-in-out;
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`;

const Icon = styled.i`
  width: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.label`
  margin: 0 15px;
  text-align: center;
`;

export default function FancyRangeSlider(props: IFancyRangeSlider) {
  const { label, icon, displayNumber, currentValue, minValue, maxValue, handler } = props;
  const id = useId();
  const minVal = minValue ? minValue : 0;
  const maxVal = maxValue ? maxValue : 100;
  const currVal = currentValue ? currentValue.toString() : 50;

  const [sliderProgress, setSliderProgress] = useState(currVal);
  const inputSlider = useRef<HTMLInputElement | null>(null);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement> | { target?: HTMLInputElement | null }) => {
    let target = e.target;
    if (!target) return;
    let newVal = parseInt(target.value);
    
    if(newVal > maxVal) newVal = maxVal;
    const calcSliderProgress = ((newVal - minVal) * 100) / (maxVal - minVal);

    setSliderProgress(calcSliderProgress);

    //setValue(newVal)

    if ('type' in e && e.type === 'change') {
      if (handler) handler(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    const currVal = currentValue ? currentValue.toString() : '50';
    //fake event
    let e = { target: inputSlider.current };
    inputHandler(e);
  }, []);

  return (
    <Wrapper>
      {icon && <Icon>{icon}</Icon>}
      <RangeSliderContainer>
        {label && <Label htmlFor={id}>{label}</Label>}
        <RangeSlider ref={inputSlider} style={{backgroundSize: sliderProgress + '%'}} id={id} type="range" value={sliderProgress} onChange={inputHandler} />
      </RangeSliderContainer>
      {displayNumber && <NumberInput type="number" value={sliderProgress} min={minVal} max={maxVal} onChange={inputHandler}/>}
    </Wrapper>
  );
}
