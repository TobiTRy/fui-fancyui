import { TMenueItemWithHTMLAttrs } from '@/components/atoms/MenuItem/TMenueItem.model';
import { TFancyContent } from '@/components/molecules/FancyContent';

import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizesMid } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';

export type TFancyMenuItem = {
  label?: string;
  icon?: React.ReactNode;
  sizeC?: TComponentSizesMid;
  themeTypeText?: TUiColorsNotTransparent;
  layerText?: TLayer;
};

type TFancyContentAttrs = Pick<TFancyContent, 'gapBetweenIcon'>;

export type TFancyMenueItemWithMenuAttrs = TFancyMenuItem & TMenueItemWithHTMLAttrs & TFancyContentAttrs;
