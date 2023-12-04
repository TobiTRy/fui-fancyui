import { InputHTMLAttributes } from 'react';

import { TLayer } from '@/interface/TLayer';
import { StyledDatePicker } from '@/components/organisms/FancyDateInput/FancyDateInput.style';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TTextAlignLC } from '@/interface/TTextAlignLC';

type NativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>;
export type IDateInputPropsWithNativeAttrs = IDateInputProps & NativeAttrs;
export interface IDateInputProps {
  value?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
  activeHandler?: (value: boolean) => void;
  align?: TTextAlignLC;
  type?: 'week' | 'date' | 'month' | 'time' | 'datetime-local' | 'datetime';
}
// --------------------------------------------------------------------------- //
// -------------- A simple date input for all kind of types ------------------ //
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
