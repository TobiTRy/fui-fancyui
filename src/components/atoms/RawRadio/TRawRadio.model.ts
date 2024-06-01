import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TRawRadio = {
  checked: boolean;
  themeType?: TUiColorsMain;
  layer?: TLayer;
};

export type TRawRadioWithHTMLAttrs = TRawRadio & React.InputHTMLAttributes<HTMLInputElement>;
