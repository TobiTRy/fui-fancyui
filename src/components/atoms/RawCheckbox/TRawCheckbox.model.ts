import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { InputHTMLAttributes } from 'react';

// the props that will be passed to the input element
type NativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

// MAIN INCOMMING PROPS PASSED TO THE COMPONENT
export type TRawCheckbox = {
  themeType?: TUiColorsMain;
  layer?: TLayer;
  checked?: boolean;
} & NativeAttrs;
