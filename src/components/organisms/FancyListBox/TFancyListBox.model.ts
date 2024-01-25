import { TFancyBoxProps } from '@/components/atoms/FancyBox/FancyBox.model';
import { TFancyLineWithHTMLAttributes } from '@/components/atoms/FancyLine/TFancyLine.model';
import { TLayer } from '@/types/TLayer';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TFancyListBox = {
  children: React.ReactNode;
  seperator?: TFancyLineWithHTMLAttributes;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
} & TFancyBoxProps<'ul'>;
