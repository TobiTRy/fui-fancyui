import { TUiColorsType } from "../../Design/color/designColor";

interface IHeaderSlots {
  scale?: number;
  component?: React.ReactNode;
  toOpenComponent?: React.ReactNode;
}

export interface ISimpleHeader {
  leftSlot?: IHeaderSlots;
  middeSlot?: IHeaderSlots;
  rightSlot?: IHeaderSlots;
  themeType?: keyof TUiColorsType;
  layer?: number;
  headerHeight?: string;
  spacingLeftRight?: string;
}