import { TComponentSizes } from '@/types/TComponentSizes';
import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TSearchBar = {
  searchValue?: string;
  align?: TTextAlignLC;
  activeHandler?: (isActive: boolean) => void;
  handler?: (value: string) => void;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  placerholder?: string;
  size?: TComponentSizes;
};
