import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';

import { TLayer } from '@/types/TLayer';
import IStyledPrefixAndOmiter from '@/types/IStyledPrefixAndOmiter';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';
import { TUiColorTypes } from '@/types/TUiColorTypes';

export type IGenerateThemeItemProps = {
  outlined?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  size: 'sm' | 'md' | 'lg';
  label?: string;
  wide?: boolean;
  borderRadius?: TBorderRadiusSizes;
  themeType?: TUiColorTypes;
  textColor?: TThemeTypesNotTransparent;
  hoverColor?: TThemeTypesNotTransparent;
  layer?: TLayer;
  align?: 'left' | 'right' | 'center';
};

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;
