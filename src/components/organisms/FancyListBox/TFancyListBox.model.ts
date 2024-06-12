import { ReactNode } from 'react';
import { TFancyLineWithHTMLAttributes } from '@/components/atoms/FancyLine/TFancyLine.model';
import { TTitleForComponent } from '@/components/atoms/TitleForComponent';
import { TListBoxWithFancyBoxAttrs } from '@/components/molecules/ListBox';
import { TListBoxItemProps } from '@/components/molecules/ListBox/ListBoxItem/TListBoxItem.model';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TFancyListBox = {
  children?: ReactNode;
  seperator?: TFancyLineWithHTMLAttributes | null;
  boxTitle?: {
    align?: TTitleForComponent['align'];
    title: TTitleForComponent['title'];
    gap?: TTitleForComponent['gap'];
  };
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  itemSettings?: TListBoxItemProps;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
};

export type TFancyListBoxWithListBoxAttrs = TFancyListBox & TListBoxWithFancyBoxAttrs;
