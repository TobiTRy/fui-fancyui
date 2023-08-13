import React, { InputHTMLAttributes } from 'react';
import { TRawInputAlign } from '../../Atoms/RawInput/RawInput';
import StyledNumberInput from './NumberInput.styled';

export interface INumberInput extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  autoWidth?: boolean;
  active?: boolean;
  align?: TRawInputAlign;
  activeHandler?: (value: boolean) => void;
}

export default function NumberInput(props: INumberInput) {
  const { value, onChange, activeHandler, errorMessage, align, id, autoWidth, max, min, ...moreHTMLProps } = props;

  const maxValue = typeof(max) === 'string' ? Number(max) : max;
  const minValue = typeof(min) === 'string' ? Number(min) : min;


  // This function is used to make sure that the value is within the min and max value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(e.target.value);


    if (maxValue !== undefined && newValue > maxValue) {
      newValue = maxValue;
    } else if (minValue !== undefined && newValue < minValue) {
      newValue = minValue;
    }

    if (onChange) {
      e.target.value = newValue.toString();
      onChange(e);
    }
  };

  return (
    <StyledNumberInput
      id={id}
      type="number"
      required
      value={value}
      onChange={handleChange}
      min={minValue}
      max={maxValue}
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      $width={autoWidth ? (value ? value.toString().length + 1 + 'ch' : '2ch') : '100%'}
      $align={align}
      $errorMessage={errorMessage}
      {...moreHTMLProps}
    />
  );
}
