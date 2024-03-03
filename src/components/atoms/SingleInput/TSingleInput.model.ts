import { TLayer } from '@/types/TLayer';
import { TUiColorTypes } from '@/types/TUiColorTypes';
import { CSSProp } from 'styled-components';

export type TSingleInputAtom = {
  value: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  themeType?: TUiColorTypes;
  layer?: TLayer;
  externalStyle?: CSSProp;
};

export type TSingleInputAtomWithHTMLAttrs = TSingleInputAtom & React.InputHTMLAttributes<HTMLInputElement>;
