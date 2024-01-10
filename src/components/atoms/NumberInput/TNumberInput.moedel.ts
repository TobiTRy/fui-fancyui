import { InputHTMLAttributes } from 'react';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { CSSProp } from 'styled-components';

// the incoming props
export type TNumberInput = {
  autoWidth?: boolean;
  align?: TTextAlignLC;
  step?: number;
  decimalPlaces?: number;
  externalStyle?: CSSProp;
};

// the native props of the input element excluding the type attribute
export type TNumberInputNativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'step'>;

// the props of the input element with the native props
export type TNumberInputWithNativeAttrs = TNumberInput & TNumberInputNativeAttrs;
