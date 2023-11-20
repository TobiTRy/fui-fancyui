import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from "@/Components/UI/Interface/TLayer";

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
  themeType?: TUiColors;
  layer?: TLayer;
  noLine?: boolean;
  bold?: boolean;
  icon?: React.ReactNode;
} & (WithLabel | WithoutLabel);