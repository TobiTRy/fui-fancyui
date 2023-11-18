import { TBorderRadiusSizes } from "@/Components/UI/Interface/TBorderRadius";
import { TUiColors } from '@/Components/UI/Interface/TUiColors';
import { TLayer } from "../../../Design/color/generateColorSteps";
import IStyledPrefixAndOmiter from "../../../Interface/IStyledPrefixAndOmiter.model";


export type IGenerateThemeItemProps = {
  outlined?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  size: 'sm' | 'md' | 'lg';
  label?: string;
  wide?: boolean;
  borderRadius?: TBorderRadiusSizes;
  themeType?: TUiColors;
  textColor?: Exclude<TUiColors, 'transparent'>;
  hoverColor?: Exclude<TUiColors, 'transparent'>;
  layer?: TLayer;
  align?: 'left' | 'right' | 'center';
};

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;
