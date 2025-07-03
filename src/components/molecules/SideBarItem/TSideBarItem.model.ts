import { TTextAlignLR } from '@/types/TTextAlignLR';
import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TFancyBoxWithHTMLAttrs } from '@/components/atoms/FancyBox/FancyBox.model';
import { TSpacings } from '@/types/TSpacings';
import { TTextAlignLRC } from '@/types/TTextAlignLRC';

export type TSideBarItem = Omit<TFancyBoxWithHTMLAttrs, 'siceC'> & {
  sizeC?: TComponentSizesMid;
  direction?: TTextAlignLR;
  justify?: TTextAlignLRC;
  gap?: TSpacings;
  wide?: boolean;
  noMargin?: boolean;
};
