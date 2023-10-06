import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { IUiColorsTypes } from "../../Design/design";
import { sizes } from "./FancyChip.style";

// Define the interface for the base chip props
interface IChipPropsBase {
  label: string;
  size?: keyof typeof sizes;
  isActive?: boolean;
  icon?: React.ReactNode;
  image?: string;
  outlined?: boolean;
  textColor?: IUiColorsTypes;
  onClick?: () => void;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  textLayer?: TLayer;
}

// Define the interface for the chip props with an X button
interface IChipPropsWithXButton extends IChipPropsBase {
  deleteButton: true;
  onDelete: () => void;
}

// Define the interface for the chip props without an X button
interface IChipPropsWithoutXButton extends IChipPropsBase {
  deleteButton?: false;
  onDelete?: never;
}

// Define the type for the chip props
export type IChipProps = IChipPropsWithXButton | IChipPropsWithoutXButton;
