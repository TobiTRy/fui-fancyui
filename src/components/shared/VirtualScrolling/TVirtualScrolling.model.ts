export type TItem = {
  content: React.ReactNode;
  originalIndex: number;
};

export type TVirtualScrollProps = {
  children: React.ReactNode[];
  containerHeight?: string;
  itemHeight?: number;
  initialItemIndex?: number;
  enableScrollSnap?: boolean;
  itemGap?: number; // New prop for specifying the gap between children
};
