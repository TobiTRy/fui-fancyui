import { TLayer } from '@/types/TLayer';
import { HTMLAttributes } from 'react';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
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
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  noLine?: boolean;
  bold?: boolean;
  size?: TComponentSizes;
  icon?: React.ReactNode;
} & (WithLabel | WithoutLabel) &
  HTMLAttributes<HTMLDivElement>;
