import { TFancyBoxWithHTMLAttrs } from '@/components/atoms/FancyBox/FancyBox.model';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TSideBarItem = Omit<TFancyBoxWithHTMLAttrs, 'siceC'> & {
  sizeC?: TComponentSizes;
};
