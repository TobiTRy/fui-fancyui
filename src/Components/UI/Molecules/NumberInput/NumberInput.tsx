import React from 'react';
import { TRawInputAlign } from '../../Atoms/RawInput';
import StyledNumberInput from './NumberInput.styled';


// --------------------------------------------------------------------------- //
// --------------- The NumberInputcomponent for only the input --------------- //
// --------------------------------------------------------------------------- //
export interface INumberInput {
  id?: string;
  disabled?: boolean;
  value?: string | number;
  name?: string;
  errorMessage?: string;
  autoWidth?: boolean;
  active?: boolean;
  minValue?: number;
  maxValue?: number;
  align?: TRawInputAlign;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
}
export default function NumberInput(props: INumberInput) {
  const { value, handler, name, activeHandler, disabled, errorMessage, align, id, autoWidth, minValue, maxValue } = props;

  const focusHandler = (value: boolean) => {
    activeHandler && activeHandler(value);
  };

  return (
    <StyledNumberInput
      id={id}
      type="number"
      placeholder=""
      name={name}
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
