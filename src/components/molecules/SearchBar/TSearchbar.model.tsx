import { TLayer } from '@/types/TLayer';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TFancyTextInput } from '@/components/organisms/FancyTextInput/TFancyTextInput.model';

export type TSearchBar = {
  searchValue?: string;
  align?: TTextAlignLC;
  activeHandler?: (isActive: boolean) => void;
  themeType?: Exclude<TUiColorsMain, 'accent'>;
  layer?: TLayer;
  placerholder?: string;
  sizeC?: TComponentSizes;
};

export type TSearchBarWithFancyInputAttrs = TSearchBar & Omit<TFancyTextInput, 'type'>;
