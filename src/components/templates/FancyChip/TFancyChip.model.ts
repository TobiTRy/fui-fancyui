import { ReactElement, ReactNode } from 'react';

import { TChipProps } from '@/components/molecules/Chip/Chip';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyChip = {
  image?: ReactElement<HTMLImageElement>;
  label?: string;
  onDelete?: () => void;
  icon?: ReactNode;
  size?: keyof typeof sizesSettings;
  textColor?: TUiColorsNotTransparent;
} & TChipProps;
