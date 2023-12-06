import { TBorderRadiusSizes } from '@/interface/TBorderRadius';
import { TThemeTypes } from '@/interface/TThemeTypes';
import { TLayer } from '@/interface/TLayer';
import IStyledPrefixAndOmiter from '../../../interface/IStyledPrefixAndOmiter.model';
import { TThemeTypesNotTransparent } from '@/interface/TThemeTypesNotTransparent';

export type IGenerateThemeItemProps = {
  outlined?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  size: 'sm' | 'md' | 'lg';
  label?: string;
  wide?: boolean;
  borderRadius?: TBorderRadiusSizes;
  themeType?: TThemeTypes;
  textColor?: TThemeTypesNotTransparent;
  hoverColor?: TThemeTypesNotTransparent;
  layer?: TLayer;
  align?: 'left' | 'right' | 'center';
};

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;
