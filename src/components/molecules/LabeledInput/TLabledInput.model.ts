import { ReactElement } from 'react';

import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';

export type TLabeledInput = {
  id?: string;
  label?: string;
  hasPlaceholder?: boolean;
  inputElement?: ReactElement<HTMLInputElement>;
  systemMessageType?: TUiColorsSystemMessage;
  hasValue?: boolean;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  underline?: boolean;
  isActive?: boolean;
  align?: TTextAlignLC;
  labelVariant?: 'static' | 'animated';
};
