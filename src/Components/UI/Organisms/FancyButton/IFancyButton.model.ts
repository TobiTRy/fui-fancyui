import { ButtonHTMLAttributes } from "react";
import { borderRadius } from "../../Design/design";
import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";

type NativeButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type IFancyButton = {
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  wide?: boolean; 
  borderRadius?: keyof typeof borderRadius;
  align?: "left" | "right" | "center";
  iconAlign?: "left" | "right";
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  textColor?: Exclude<keyof TUiColorsType, "transparent">;
  hoverColor?: Exclude<keyof TUiColorsType, "transparent">;
  label?: string;
  outlined?: boolean;
  icon?: JSX.Element;
}

export type IFancyButtonProps = IFancyButton & NativeButtonAttributes;