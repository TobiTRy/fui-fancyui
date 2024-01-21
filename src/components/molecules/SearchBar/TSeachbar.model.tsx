import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

export type TSearchBar = {
  searchValue?: string;
  align?: TTextAlignLC;
  activeHandler?: (isActive: boolean) => void;
  handler?: (value: string) => void;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  placerholder?: string;
};
