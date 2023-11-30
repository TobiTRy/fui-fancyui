import { TBorderRadiusSizes } from '@/interface/TBorderRadius';
import { TThemeTypes, TThemeTypesNotTrasparent } from '@/interface/TUiColors';
import { TLayer } from '@/interface/TLayer';
import IStyledPrefixAndOmiter from '../../../interface/IStyledPrefixAndOmiter.model';

export type IGenerateThemeItemProps = {
  outlined?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  size: 'sm' | 'md' | 'lg';
  label?: string;
  wide?: boolean;
  borderRadius?: TBorderRadiusSizes;
  themeType?: TThemeTypes;
  textColor?: TThemeTypesNotTrasparent;
  hoverColor?: TThemeTypesNotTrasparent;
  layer?: TLayer;
  align?: 'left' | 'right' | 'center';
};

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;
