import { ReactElement, ReactNode } from 'react';

import { TChipWithFancyPillAttrs } from '@/components/molecules/Chip';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyChip = {
  image?: ReactElement<HTMLImageElement>;
  label?: string;
  onDelete?: () => void;
  icon?: ReactNode;
  sizeC?: keyof typeof sizesSettings;
  textColor?: TUiColorsNotTransparent;
};

export type TFancyChipWithFancyPillAttrs = TChipWithFancyPillAttrs & TFancyChip;
