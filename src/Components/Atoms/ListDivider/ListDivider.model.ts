import { TThemeTypes } from '@/components/Interface/TUiColors';
import { TLayer } from '@/components/Interface/TLayer';

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
  themeType?: TThemeTypes;
  layer?: TLayer;
  noLine?: boolean;
  bold?: boolean;
  icon?: React.ReactNode;
} & (WithLabel | WithoutLabel);
