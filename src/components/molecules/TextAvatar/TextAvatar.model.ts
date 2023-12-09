import { CSSProp } from "styled-components";

import { TSize } from "@/components/molecules/TextAvatar/utils/getSize";
import { TLayer } from "@/interface/TLayer";
import { TThemeTypes } from "@/interface/TThemeTypes";
import { TTypography } from "@/interface/TTypography";

import { TgetBorderRadiusViaSize } from "@/design/designFunctions/getBorderRadiusViaSize";

export type TTextAvatarProps = {
  text?: string;
  rounded?: TgetBorderRadiusViaSize;
  size?: TSize | string;
  color?: string;
  backgroundColor?: string;
  themeType?: TThemeTypes;
  layer?: TLayer;
  externalStyle?: CSSProp;
  fontSizes?: TTypography;
  letterLength?: number;
};