import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { sizes } from "./FancyChip.style";

// Define the interface for the base chip props
export interface IChipProps {
  label: string;
  size?: keyof typeof sizes;
  isActive?: boolean;
  icon?: React.ReactNode;
  image?: string;
  outlined?: boolean;
  textColor?: Exclude<keyof TUiColorsType, 'transparent'>;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  textLayer?: TLayer;
  onDelete?: () => void;
  onClick?: () => void;
}


