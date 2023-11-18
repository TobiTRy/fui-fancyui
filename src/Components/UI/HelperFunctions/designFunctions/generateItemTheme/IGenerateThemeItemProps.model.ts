import { TBorderRadiusSizes } from "@/Components/UI/Interface/TBorderRadius";
import { TUiColorsType } from "../../../Design/color/designColor";
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
  themeType?: keyof TUiColorsType;
  textColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  hoverColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  layer?: TLayer;
  align?: 'left' | 'right' | 'center';
};

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;
