import { CSSProp } from "styled-components";
import { TLayer } from "../../Design/color/generateColorSteps";
import { borderRadius } from "../../Design/design";
import { tabSwitchSizes } from "./FancyBar.style";
import { TUiColorsType } from "../../Design/color/designColor";

export interface IFancyBarProps {
  rounded?: keyof typeof borderRadius;
  outlined?: boolean;
  layer?: TLayer;
  themeType?: keyof TUiColorsType;
  children?: React.ReactNode;
  height?: string;
  width?: string;
  spacingLeftRight?: string;
  spacingTopBottom?: string;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  padding?: keyof typeof tabSwitchSizes;
}