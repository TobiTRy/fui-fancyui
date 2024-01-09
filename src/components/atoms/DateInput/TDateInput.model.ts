import { InputHTMLAttributes } from 'react';
import { TThemeTypes } from '@/types/TThemeTypes';
import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';

// the native props of the input element excluding the type attribute
export type TNativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>;

// the props of the input element
export type TDateInputProps = {
  value?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
  align?: TTextAlignLC;
  type?: 'week' | 'date' | 'month' | 'time' | 'datetime-local' | 'datetime';
};

// the props of the input element with the native props
export type TDateInputPropsWithNativeAttrs = TDateInputProps & TNativeAttrs;
