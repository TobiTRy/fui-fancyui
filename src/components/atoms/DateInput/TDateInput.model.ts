import { InputHTMLAttributes } from 'react';

import { TRawInput } from '@/components/atoms/RawInput';
import { TTextAlignLC } from '@/types/TTextAlignLC';

// the native props of the input element excluding the type attribute
export type TNativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>;

// the props of the input element
export type TDateInput = {
  value?: string;
  align?: TTextAlignLC;
  type?: 'week' | 'date' | 'month' | 'time' | 'datetime-local' | 'datetime';
} & TRawInput;

// the props of the input element with the native props
export type TDateInputPropsWithNativeAttrs = TDateInput & TNativeAttrs;
