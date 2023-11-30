import React, { InputHTMLAttributes } from 'react';

import RawInput, { TRawInputAlign } from '../../atoms/RawInput/RawInput';

export interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: string | number;
  align?: TRawInputAlign;
  activeHandler?: (value: boolean) => void;
}

export default function TextInput(props: ITextInputProps) {
  const { value, activeHandler, onChange, align, ...htmlInputProps } = props;

  return (
    <RawInput
      type="text"
      value={value}
      onChange={onChange}
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      $align={align}
      {...htmlInputProps}
    />
  );
}
