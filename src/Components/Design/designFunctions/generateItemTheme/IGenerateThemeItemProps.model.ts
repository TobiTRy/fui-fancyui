import { TBorderRadiusSizes } from '@/components/core/interface/TBorderRadius';
import { TThemeTypes, TThemeTypesNotTrasparent } from '@/components/core/interface/TUiColors';
import { TLayer } from '@/components/core/interface/TLayer';
import IStyledPrefixAndOmiter from '../../../core/interface/IStyledPrefixAndOmiter.model';

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
