export interface IFancyButton {
  size?: "small" | "medium" | "large";
  wide?: boolean; 
  design?: "primary" | "secondary" | "accent" | "transparent";
  roundedCompletly?: boolean;
  align?: "left" | "right" | "center";
  color?: "primary" | "secondary" | "accent";
  hoverColor?: "primary" | "secondary" | "accent";
  label?: string;
  outlined?: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}