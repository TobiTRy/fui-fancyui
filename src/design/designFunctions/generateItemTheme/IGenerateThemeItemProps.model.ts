import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

import { TLayer } from '@/types/TLayer';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export type IGenerateThemeItemProps = {
  outlined?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  sizeC: 'sm' | 'md' | 'lg';
  label?: string;
  wide?: boolean;
  borderRadius?: TBorderRadiusSizes;
  themeType?: TUiColorTypes;
  textColor?: TUiColorsNotTransparent;
  hoverColor?: TUiColorsNotTransparent;
  layer?: TLayer;
  align?: 'left' | 'right' | 'center';
};

export type IGenerateThemeItem = TStyledPrefixAndOmiter<IGenerateThemeItemProps>;
