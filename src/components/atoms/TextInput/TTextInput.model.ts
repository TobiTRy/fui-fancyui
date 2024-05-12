import { InputHTMLAttributes } from 'react';
import { TTextAlignLC } from '@/types/TTextAlignLC';

// the incoming props
export type TTextInput = {
  align?: TTextAlignLC;
  type?: 'text' | 'email' | 'tel' | 'url';
};

// the native props of the input element excluding the type attribute
export type TTextInputNativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

// the props of the input element with the native props
export type TTextInputWithNativeAttrs = TTextInput & TTextInputNativeAttrs;
