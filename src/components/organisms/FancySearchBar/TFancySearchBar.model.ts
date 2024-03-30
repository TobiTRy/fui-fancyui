import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';
import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';

// Props for the FancySearchBar component
export type TFancySearchBar = {
  searchListWidth?: string;
  value?: string;
  openListWhenFocused?: boolean;
  themeType?: TUiColorsMain;
  layer?: TLayer;
  sizeC?: TComponentSizes;
  borderRadius?: TThemeArrayOrValueCSS;
  externalStyle?: CSSProp;
};

export type TFancySearchBarWithHTMLProps = TFancySearchBar & React.InputHTMLAttributes<HTMLInputElement>;
