export type TItem = {
  content: React.ReactNode;
  originalIndex: number;
};

export type TVirtualScrollProps = {
  children: React.ReactNode[];
  containerHeight?: string;
  itemHeight?: number;
  initialItemIndex?: number;
  scrollSnap?: 'mandatory' | 'proximity';
  itemGap?: number; // New prop for specifying the gap between children
  currentItemsInView?: (index: number) => void;
};
