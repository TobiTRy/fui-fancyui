import React, { ChangeEvent } from 'react';

import RawInput from '../../Atoms/RawInput/RawInput';
import styled from 'styled-components';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel/AnimatedLabel.style';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline/InputUnderline';
import { uiColors } from '../../Design/design';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';

export interface IDateInputProps {
  id?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  errorMessage?: string;
  ariaLabel?: string;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
  align?: TRawInputAlign;
}

interface IStyledDatePicker {
  $errorMessage?: string;
  $align?: TRawInputAlign;
  value?: string;
}
const StyledDatePicker = styled(RawInput)<IStyledDatePicker>`
  color: ${({value}) => value ?  '' : 'transparent'};

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
  const { value, handler, activeHandler, name, disabled, errorMessage, align, id, ariaLabel } = props;

  //this function is used to toggle the active state of the input
  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <StyledDatePicker
      $errorMessage={errorMessage}
      $align={align}
      name={name}
      id={id}
      type="date"
      placeholder=""
      aria-label={ariaLabel}
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
