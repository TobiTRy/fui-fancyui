import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

import RawInput from '../../Atoms/RawInput/RawInput';
import { uiColors } from '../../Design/design';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { simpleColorTransition } from '../../Design/simpleTransition';

type IStyledDatePicker = IStyledPrefixAndPicker<IDateInputProps, 'errorMessage' | 'align'> & { value?: string };
const StyledDatePicker = styled(RawInput)<IStyledDatePicker>`
  color: ${({ value }) => (value ? '' : 'transparent')};

  &:focus {
    color: ${uiColors.secondary[0]};
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  ${simpleColorTransition}
`;

export interface IDateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: string;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
  align?: TRawInputAlign;
}

// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function DateInput(props: IDateInputProps) {
  const { value, onChange, activeHandler, name, disabled, errorMessage, align, ...htmlInputProps } = props;

  return (
    <StyledDatePicker
      $errorMessage={errorMessage}
      $align={align}
      name={name}
      type="date"
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      {...htmlInputProps}
    />
  );
}
