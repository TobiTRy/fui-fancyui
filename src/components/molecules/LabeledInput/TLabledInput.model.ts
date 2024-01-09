import { ReactElement } from 'react';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TTextAlignLC } from 'lib';

export type TLabeledInput = {
  id?: string;
  label?: string;
  placeholder?: string;
  inputElement?: ReactElement<HTMLInputElement>;
  systemMessageType?: TUiColorsSystemMessage;
  hasValue?: boolean;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  underline?: boolean;
  isActive?: boolean;
  align?: TTextAlignLC;
};
