import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TStyledPrefixAndPicker } from 'lib';

import { CSSProp } from 'styled-components';

export type TRawInput = {
  align?: TTextAlignLC;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  externalStyle?: CSSProp;
};

export type TRawInputWith$ = TStyledPrefixAndPicker<TRawInput>;

export type TRawInputWith$AndHTMLAttrs = TRawInput & React.InputHTMLAttributes<HTMLInputElement>;
