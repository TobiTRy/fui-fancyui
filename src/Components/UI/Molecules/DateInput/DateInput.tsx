import React, { InputHTMLAttributes } from 'react';

import { TRawInputAlign } from '../../../Atoms/RawInput/RawInput';
import { TLayer } from '@/Components/Interface/TLayer';
import { StyledDatePicker } from '../../Organisms/FancyDateInput/FancyDateInput.style';
import { TThemeTypes } from '@/Components/Interface/TUiColors';

type NativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>;
export type IDateInputPropsWithNativeAttrs = IDateInputProps & NativeAttrs;
export interface IDateInputProps {
  value?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
  activeHandler?: (value: boolean) => void;
  align?: TRawInputAlign;
  type?: 'week' | 'date' | 'month' | 'time' | 'datetime-local' | 'datetime';
}
// --------------------------------------------------------------------------- //
// ---------- Here are the design variants for sizing and alignment ---------- //
// --------------------------------------------------------------------------- //
export default function DateInput(props: IDateInputProps & NativeAttrs) {
  const { value, activeHandler, align, themeType, layer, type, ...htmlInputProps } = props;

  return (
    <StyledDatePicker
      $align={align}
      type={type || 'date'}
      value={value}
      $layer={layer}
      $themeType={themeType}
      onFocus={() => activeHandler && activeHandler(true)}
      onBlur={() => activeHandler && activeHandler(false)}
      {...htmlInputProps}
    />
  );
}
