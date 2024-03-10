import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { TThemeArrayOrValueCSS } from 'lib';

export type TChipList = {
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  outlined?: boolean;
  children?: React.ReactNode;
  borderRadius?: TThemeArrayOrValueCSS;
  sizeC?: 'sm' | 'md' | 'lg';
  systemMessage?: TUiColorsSystemMessage;
};
