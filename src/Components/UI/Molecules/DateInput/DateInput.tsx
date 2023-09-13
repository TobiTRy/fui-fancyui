import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

import RawInput from '../../Atoms/RawInput/RawInput';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { TUiColorsType } from '../../Design/color/designColor';

type IStyledDatePicker = IStyledPrefixAndPicker<IDateInputProps, 'errorMessage' | 'align'> & { value?: string };
const StyledDatePicker = styled(RawInput)<IStyledDatePicker & {theme: TUiColorsType}>`
  color: ${({ value }) => (value ? '' : 'transparent')};

  &:focus {
    color: ${({theme}) => theme.secondary[0]};
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
