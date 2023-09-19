import { TthemeColorGroup } from "../../Design/color/designColor";

interface IHeaderSlots {
  scale?: number;
  component?: React.ReactNode;
  toOpenComponent?: React.ReactNode;
}

export interface ISimpleHeader {
  leftSlot?: IHeaderSlots;
  middeSlot?: IHeaderSlots;
  rightSlot?: IHeaderSlots;
  backgroundColor?: string | TthemeColorGroup; 
  headerHeight?: string;
  spacingLeftRight?: string;
}