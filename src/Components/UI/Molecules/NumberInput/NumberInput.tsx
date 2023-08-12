import React from 'react';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import StyledNumberInput from './NumberInput.styled';


// --------------------------------------------------------------------------- //
// --------------- The NumberInputcomponent for only the input --------------- //
// --------------------------------------------------------------------------- //
export interface INumberInput {
  id?: string;
  disabled?: boolean;
  value?: number;
  name?: string;
  errorMessage?: string;
  autoWidth?: boolean;
  active?: boolean;
  minValue?: number;
  maxValue?: number;
  align?: TRawInputAlign;
  ariaLabel?: string;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeHandler?: (value: boolean) => void;
}
export default function NumberInput(props: INumberInput) {
  const { value, handler, name, activeHandler, disabled, errorMessage, align, id, autoWidth, minValue, maxValue, ariaLabel } = props;

  // this function is used to make sure that the value is within the min and max value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(e.target.value, 10);

    if (maxValue !== undefined && newValue > maxValue) {
      newValue = maxValue;
    } else if (minValue !== undefined && newValue < minValue) {
      newValue = minValue;
    }

    if (handler) {
      e.target.value = newValue.toString();
      handler(e);
    }
  };


  return (
    <StyledNumberInput
      id={id}
      type="number"
      placeholder=""
      name={name}
      value={value}
      autoComplete={'off'}
      onChange={handleChange}
      disabled={disabled}
      min={minValue}
      max={100}
      aria-label={ariaLabel}
      required
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      $width={autoWidth ? (value ? value.toString().length + 1 + 'ch' : '2ch') : '100%'}
      $align={align}
      $errorMessage={errorMessage}
    />
  );
}
