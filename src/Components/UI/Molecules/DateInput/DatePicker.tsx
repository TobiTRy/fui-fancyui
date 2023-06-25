import React, { ChangeEvent } from 'react';

import RawInput, { IRawInput } from '../../Atoms/RawInput';
import styled from 'styled-components';
import { AnimatedInputLabel, AnimatedLabelFocusStyle } from '../../Atoms/AnimatedLabel';
import { UnderLineFocusStyle } from '../../Atoms/InputUnderline';
import { uiColors } from '../../Design/design';

export interface IDateInput extends IRawInput {
  id?: string;
  disabled?: boolean;
  value?: string;
  errorMessage?: string;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
}

const StyledDatePicker = styled(RawInput)<IDateInput>`
  color: ${({value}) => value ?  '' : 'transparent'};

  &:focus {
    color: ${uiColors.secondary.main};
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  transition: color 0.2s ease-in-out;

  ${({ align, errorMessage }) => AnimatedLabelFocusStyle(align, errorMessage)}
  //the focus animation for the underline
  ${({ align }) => UnderLineFocusStyle(AnimatedInputLabel, align)}
`;

export default function DateInput(props: IDateInput) {
  const { value, handler, activeHandler, disabled, errorMessage, align, id } = props;

  //this function is used to toggle the active state of the input
  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <StyledDatePicker
      id={id}
      type="date"
      placeholder=""
      errorMessage={errorMessage}
      align={align}
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
