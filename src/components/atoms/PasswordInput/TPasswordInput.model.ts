import { InputHTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TPasswordInputProps = {
  value?: string;
  align?: TTextAlignLC;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  customEyeOpen?: React.ReactNode;
  customEyeCrossed?: React.ReactNode;
  showPassword?: boolean;
};

export type TNativePassowrdInputAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>;

export type TPasswordInputPropsWithNativeAttrs = TNativePassowrdInputAttrs & TPasswordInputProps;
