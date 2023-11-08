import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";

export type TTextAlign = 'left' | 'center' | 'right';

type WithLabel = {
  label: string;
  textAlignment?: TTextAlign;
};

type WithoutLabel = {
  label?: never;
  textAlignment?: TTextAlign;
};

export type IListDivider = {
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  icon?: React.ReactNode;
} & (WithLabel | WithoutLabel);