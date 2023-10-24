import { TUiColorsType } from "../../../Design/color/designColor";
import { TLayer } from "../../../Design/color/generateColorSteps";
import { borderRadius } from "../../../Design/design";
import IStyledPrefixAndOmiter from "../../../Interface/IStyledPrefixAndOmiter.model";


export type IGenerateThemeItemProps = {
  outlined?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'left' | 'right';
  size: 'sm' | 'md' | 'lg';
  label?: string;
  wide?: boolean;
  borderRadius?: keyof typeof borderRadius;
  themeType?: keyof TUiColorsType;
  textColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  hoverColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  layer?: TLayer;
  align?: 'left' | 'right' | 'center';
};

export type IGenerateThemeItem = IStyledPrefixAndOmiter<IGenerateThemeItemProps>;
