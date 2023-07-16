interface IHeaderSlots {
  scale?: number;
  component?: React.ReactNode;
  toOpenComponent?: React.ReactNode;
}

export interface ISimpleHeader {
  leftSlot?: IHeaderSlots;
  middeSlot?: IHeaderSlots;
  rightSlot?: IHeaderSlots;
  headerHeight?: string;
  spacingLeftRight?: string;
}