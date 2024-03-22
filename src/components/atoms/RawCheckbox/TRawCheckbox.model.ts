import { HTMLAttributes } from 'react';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TLayer } from '@/types/TLayer';

// the props that will be passed to the input element
type NativeAttrs = Omit<HTMLAttributes<HTMLInputElement>, 'type'>;

// MAIN INCOMMING PROPS PASSED TO THE COMPONENT
export type TRawCheckbox = {
  themeType?: TUiColorsMain;
  layer?: TLayer;
} & NativeAttrs;
