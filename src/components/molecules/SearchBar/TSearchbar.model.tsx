import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TSearchBar = {
  searchValue?: string;
  align?: TTextAlignLC;
  activeHandler?: (isActive: boolean) => void;
  handler?: (value: string) => void;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  placerholder?: string;
  size?: TComponentSizes;
};
