import styled from 'styled-components';

import { uiColors, spacingPx } from '../Design/design';
import { disabledStyle } from '../HelperFunctions/disableStyle';

export const Wrapper = styled.div<{disabled?: boolean}>`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  width: 100%;
  margin: 0 0 0.2rem 0;
  ${({disabled}) => disabled ? disabledStyle : ''}

  
`;

export const RangeSliderContainer = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  position: relative;
  width: 100%;
`;

export const NumberInput = styled.input<{active: boolean}>`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  border-radius: 0;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  background-color: transparent;
  color: white;
  border: none;
  margin-left: 10px;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  border-bottom:  solid ${({active}) => active ? uiColors.accent.main : 'gray' }  2px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const RangeSlider = styled.input`
  grid-template-columns: 1/2;
  grid-row: 2/3;
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  height: 6px;
  background: gray;
  border-radius: 5px;
  background-image: linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.main_light});
  background-size: 70% 100%;
  background-repeat: no-repeat;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: ${uiColors.accent.main};
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

export const Icon = styled.i<{ active?: boolean }>`
  grid-column: 1/2;
  grid-row: 2/3;
  color: ${({ active }) => (active ? uiColors.accent.main : 'gray')};
  margin-top: ${spacingPx.xxs};
  margin-right: ${spacingPx.sm};
  transition: 0.5s;
  display: flex;
  align-items: center;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Label = styled.label<{ align?: string; active?: boolean }>`
  grid-row: 0/1;
  grid-column: 2/3;
  display: flex;
  align-items: flex-end;
  justify-content: ${({align}) => align !== 'center' ? 'flex-start' : 'center' };
  width: 100%;
  color: gray;
  font-weight: bold;
  pointer-events: none;
  transition: 0.3s;
  user-select: none;
  color: ${({ active }) => (active ? uiColors.accent.main : 'gray')};
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  margin-bottom: ${spacingPx.xxs};
`;