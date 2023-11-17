import { ButtonHTMLAttributes } from "react";
import { borderRadius } from "../../Design/designSizes";
import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";

type NativeButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type IFancyButton = {
  isLoading?: boolean;
  align?: "left" | "right" | "center";
  iconAlign?: "left" | "right";
  icon?: JSX.Element;
}

export type IFancyButtonProps = IFancyButton & NativeButtonAttributes;