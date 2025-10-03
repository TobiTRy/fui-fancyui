import { ReactElement, ReactNode } from 'react';

import { TChipWithFancyPillAttrs } from '@/components/molecules/Chip';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizesMid } from '@/types/TComponentSizes';

export type TFancyChip = {
  image?: ReactElement<HTMLImageElement>;
  label?: string;
  onDelete?: () => void;
  icon?: ReactNode;
  sizeC?: TComponentSizesMid;
  textColor?: TUiColorsNotTransparent;
};

export type TFancyChipWithFancyPillAttrs = TChipWithFancyPillAttrs & TFancyChip;
