import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

// Props for the FancySearchBar component
export type TFancySearchBar = {
  handlerSearchValue?: (searchValue: string) => void;
  children?: React.ReactNode;
  searchListWidth?: string;
  searchValue?: string;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  sizeC?: TComponentSizes;
  borderRadius?: TBorderRadiusSizes;
};
