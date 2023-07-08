import React, { ChangeEvent } from 'react';

import RawInput, { IRawInput } from '../../Atoms/RawInput';
import styled from 'styled-components';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { uiColors } from '../../Design/design';
import { TRawInputAlign } from '../../Atoms/RawInput';

export interface IDateInputProps extends IRawInput {
  id?: string;
  disabled?: boolean;
  value?: string;
  errorMessage?: string;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
  align?: TRawInputAlign;
}

interface IStyledDatePicker {
  $errorMessage?: string;
  $align?: TRawInputAlign;
  $value?: string;
}
const StyledDatePicker = styled(RawInput)<IStyledDatePicker>`
  color: ${({$value}) => $value ?  '' : 'transparent'};

  &:focus {
    color: ${uiColors.secondary.main};
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  
  transition: color 0.2s ease-in-out;

  ${({ $align, $errorMessage }) => AnimatedLabelFocusStyle($align, $errorMessage)}
  //the focus animation for the underline
  ${({ $align }) => UnderLineFocusStyle(AnimatedInputLabel, $align)}
`;

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function DateInput(props: IDateInputProps) {
  const { value, handler, activeHandler, disabled, errorMessage, align, id } = props;

  //this function is used to toggle the active state of the input
  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <StyledDatePicker
      $errorMessage={errorMessage}
      $align={align}
      id={id}
      type="date"
      placeholder=""
      value={value}
      autoComplete={'off'}
      onChange={handler}
      disabled={disabled}
      required
      onFocus={() => focusHandler(true)}
      onBlur={() => focusHandler(false)}
    />
  );
}
