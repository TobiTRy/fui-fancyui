import { InputHTMLAttributes } from 'react';
import { TRawInput } from '@/components/atoms/RawInput';

// the incoming props
export type TNumberInput = {
  autoWidth?: boolean;
  step?: number;
  decimalPlaces?: number;
} & TRawInput;

// the native props of the input element excluding the type attribute
export type TNumberInputNativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'step'>;

// the props of the input element with the native props
export type TNumberInputWithNativeAttrs = TNumberInput & TNumberInputNativeAttrs;
