import { TBorderRadiusSizes } from '@/Components/UI/Interface/TBorderRadius';
import { TThemeTypes, TThemeTypesNotTrasparent } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import IStyledPrefixAndOmiter from '../../../UI/Interface/IStyledPrefixAndOmiter.model';

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
