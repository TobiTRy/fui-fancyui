import { TMenueItemWithHTMLAttrs } from '@/components/atoms/MenuItem/TMenueItem.model';
import { TComponentSizes } from '@/types/TComponentSizes';

import { TFancyContent } from '@/components/molecules/FancyContent';

export type TFancyMenuItem = {
  label?: string;
  icon?: React.ReactNode;
  sizeC?: TComponentSizes;
};

type TFancyContentAttrs = Pick<TFancyContent, 'gapBetweenIcon'>;

export type TFancyMenueItemWithMenuAttrs = TFancyMenuItem & TMenueItemWithHTMLAttrs & TFancyContentAttrs;
