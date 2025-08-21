import { TLayer } from '@/types';
import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { ReactNode } from 'react';
import { CSSProp } from 'styled-components';

export type TSwitch = {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  sizeC?: TComponentSizesMid;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  externalStyle?: CSSProp;
};

export type TSwitchWithNativeAttrs = TSwitch & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof TSwitch>;
