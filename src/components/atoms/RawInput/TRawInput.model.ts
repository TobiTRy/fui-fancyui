import { TLayer } from '@/types/TLayer';
import { TStyledPrefixAndPicker } from '@/types/TStyledPrefixAndPicker';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsMain } from '@/types/TUiColorsMain';

import { CSSProp } from 'styled-components';

export type TRawInput = {
  align?: TTextAlignLC;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  externalStyle?: CSSProp;
};

export type TRawInputWith$ = TStyledPrefixAndPicker<TRawInput>;

export type TRawInputWith$AndHTMLAttrs = TRawInput & React.InputHTMLAttributes<HTMLInputElement>;
