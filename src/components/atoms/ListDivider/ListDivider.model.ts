import { TLayer } from '@/types/TLayer';
import { HTMLAttributes } from 'react';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';

type WithLabel = {
  label: string;
  textAlignment?: TTextAlignLRC;
};

type WithoutLabel = {
  label?: never;
  textAlignment?: TTextAlignLRC;
};

export type TListDivider = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  noLine?: boolean;
  fontWeight?: number | string;
  sizeC?: TComponentSizes;
  icon?: React.ReactNode;
} & (WithLabel | WithoutLabel);

export type TListDividerNativeAttrs = HTMLAttributes<HTMLDivElement>;

export type TListDividerWithNativeAttrs = TListDivider & TListDividerNativeAttrs;
