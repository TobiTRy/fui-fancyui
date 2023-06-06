import styled, { css } from 'styled-components';

import { uiColors, spacingPx } from '../../Design/design';
import { AlignedInputLabel } from '../../Atoms/InputLabel';

import UnderLine from '../../Atoms/InputUnderline';

export const RangeSliderContainer = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  position: relative;
  width: 100%;
`;

export const RangeSlider = styled.input`
  grid-column: 1/2;
  grid-row: 2/3;
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  height: 6px;
  background: gray;
  border-radius: 5px;
  background-image: linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.light});
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

export const NumberContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  margin-left: 10px;
`;


//TODO: FIX PADDING ON MOBILE
export const NumberInput = styled.input<{ active: boolean, width: string }>`
  box-sizing: border-box;
  border-radius: 0;
  font-size: 16px;
  width: ${({width}) => width ? width : '2ch' };
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  border: none;
  text-align: center;
  padding: 0 0 ${spacingPx.xs} 0;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };

  &:focus ~ ${UnderLine}::before {
    opacity: 1;
  };
`;

//the label inhert the style from the AlignedInputLabel
export const Label = styled(AlignedInputLabel)`
  grid-row: 1/2;
  grid-column: 2/3;
`;
