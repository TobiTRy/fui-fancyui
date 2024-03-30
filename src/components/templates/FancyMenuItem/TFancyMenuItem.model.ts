import { TMenueItemWithHTMLAttrs } from '@/components/atoms/MenuItem/TMenueItem.model';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TFancyMenuItem = {
  label?: string;
  icon?: React.ReactNode;
  sizeC?: TComponentSizes;
};

export type TFancyMenueItemWithMenuAttrs = TFancyMenuItem & TMenueItemWithHTMLAttrs;
