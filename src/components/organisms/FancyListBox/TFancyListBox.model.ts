import { TFancyLineWithHTMLAttributes } from '@/components/atoms/FancyLine/TFancyLine.model';
import { TListBox } from '@/components/molecules/ListBox/ListBox';
import { TListBoxItemProps } from '@/components/molecules/ListBox/ListBoxItem';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TFancyListBox = {
  children: React.ReactNode;
  seperator?: TFancyLineWithHTMLAttributes;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  itemSettings?: TListBoxItemProps;
} & TListBox;
