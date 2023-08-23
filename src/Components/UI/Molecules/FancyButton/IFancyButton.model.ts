import { ButtonHTMLAttributes } from "react";

type NativeButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

type IFancyButton = {
  size?: "small" | "medium" | "large";
  loading?: boolean;
  wide?: boolean; 
  design?: "primary" | "secondary" | "accent" | "transparent";
  roundedCompletly?: boolean;
  align?: "left" | "right" | "center";
  color?: "primary" | "secondary" | "accent";
  hoverColor?: "primary" | "secondary" | "accent";
  label?: string;
  outlined?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
}

export type IFancyButtonProps = IFancyButton & NativeButtonAttributes;