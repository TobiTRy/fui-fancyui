import { TComponentSizes } from '@/types/TComponentSizes';
import { TFancyBoxWithHTMLAttrs } from '@/components/atoms/FancyBox/FancyBox.model';

export type TListBox = {
  sizeC?: TComponentSizes;
  boxShadow?: boolean;
};

export type TListBoxWithFancyBoxAttrs = TListBox & Omit<TFancyBoxWithHTMLAttrs<'ul'>, 'as'>;
