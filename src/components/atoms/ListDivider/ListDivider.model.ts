import { TLayer } from '@/types/TLayer';
import { HTMLAttributes } from 'react';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TTextAlign = 'left' | 'center' | 'right';

type WithLabel = {
  label: string;
  textAlignment?: TTextAlign;
};

type WithoutLabel = {
  label?: never;
  textAlignment?: TTextAlign;
};

export type IListDivider = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  noLine?: boolean;
  fontWeight?: number | string;
  sizeC?: TComponentSizes;
  icon?: React.ReactNode;
} & (WithLabel | WithoutLabel) &
  HTMLAttributes<HTMLDivElement>;
