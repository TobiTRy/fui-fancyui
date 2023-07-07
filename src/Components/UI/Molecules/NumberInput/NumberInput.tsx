import React from 'react';
import RawInput, { TRawInputAlign } from '../../Atoms/RawInput';
import styled from 'styled-components';
import { spacingPx } from '../../Design/design';

import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

interface INumberInput {
  id?: string;
  disabled?: boolean;
  value?: string | number;
  errorMessage?: string;
  autoWidth?: boolean;
  active?: boolean;
  minValue?: number;
  maxValue?: number;
  align?: TRawInputAlign;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
}

type IStyledNumberInput = IStyledPrefixAndPicker<INumberInput, 'align' | 'errorMessage'>
const StyledNumberInput = styled(RawInput)<IStyledNumberInput & { $width: string }>`
  box-sizing: border-box;
  border-radius: 0;
  width: ${({ width }) => (width ? width : '2ch')};
  background-color: transparent;
  border: none;
  padding: 0 0 ${spacingPx.xs} 0;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  outline: none;
  
  ${({ $align, $errorMessage }) => AnimatedLabelFocusStyle($align, $errorMessage)}
  //the focus animation for the underline
  ${({ $align }) => UnderLineFocusStyle(AnimatedInputLabel, $align)}
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
  // hide the arrows on the input for firefox
  -moz-appearance: textfield;
`;

export default function NumberInput(props: INumberInput) {
  const { value, handler, activeHandler, disabled, errorMessage, align, id, autoWidth, minValue, maxValue } = props;

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <StyledNumberInput
      id={id}
      type="number"
      placeholder=""
      value={value}
      autoComplete={'off'}
      onChange={handler}
      disabled={disabled}
      min={minValue}
      max={maxValue}
      required
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
      $width={autoWidth ? (value ? value.toString().length + 1 + 'ch' : '2ch') : '100%'}
      $align={align}
      $errorMessage={errorMessage}
    />
  );
}
