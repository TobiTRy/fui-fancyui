import { sizes } from "./Chip.style";

// Define the interface for the base chip props
interface IChipPropsBase {
  label: string;
  size?: keyof typeof sizes;
  icon?: React.ReactNode;
  image?: string;
  onClick?: () => void;
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
