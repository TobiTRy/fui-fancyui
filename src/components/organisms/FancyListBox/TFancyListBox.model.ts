import { ReactNode } from 'react';
import { TFancyLineWithHTMLAttributes } from '@/components/atoms/FancyLine/TFancyLine.model';
import { TTitleForComponent } from '@/components/atoms/TitleForComponent';
import { TListBoxWithFancyBoxAttrs } from '@/components/molecules/ListBox';
import { TListBoxItemProps } from '@/components/molecules/ListBox/ListBoxItem';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TFancyListBox = {
  children?: ReactNode;
  seperator?: TFancyLineWithHTMLAttributes;
  boxTitle?: {
    titleAlign?: TTitleForComponent['titleAlign'];
    title: TTitleForComponent['title'];
  };
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  itemSettings?: TListBoxItemProps;
};

export type TFancyListBoxWithListBoxAttrs = TFancyListBox & TListBoxWithFancyBoxAttrs;
