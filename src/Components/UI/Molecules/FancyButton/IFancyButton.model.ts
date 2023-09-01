import { ButtonHTMLAttributes } from "react";
import { borderRadius } from "../../Design/design";

type NativeButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type IFancyButton = {
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  wide?: boolean; 
  design?: "primary" | "secondary" | "accent" | "transparent";
  borderRadius?: keyof typeof borderRadius;
  align?: "left" | "right" | "center";
  color?: "primary" | "secondary" | "accent";
  hoverColor?: "primary" | "secondary" | "accent";
  label?: string;
  outlined?: boolean;
  icon?: JSX.Element;
}

export type IFancyButtonProps = IFancyButton & NativeButtonAttributes;