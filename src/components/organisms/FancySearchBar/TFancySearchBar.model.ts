import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

// Props for the FancySearchBar component
export type TFancySearchBar = {
  handlerSearchValue?: (searchValue: string) => void;
  children?: React.ReactNode;
  searchListWidth?: string;
  searchValue?: string;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  size?: TComponentSizes;
  borderRadius?: TBorderRadiusSizes;
};
