export type TItem = {
  content: React.ReactNode;
  originalIndex: number;
};

export type TVirtualScrollProps = {
  children: React.ReactNode[];
  containerHeight?: string;
  preRenderCount?: number;
  itemHeight?: number;
  itemIndexInView?: number;
  scrollSnap?: 'mandatory' | 'proximity';
  itemGap?: number; // New prop for specifying the gap between children
  currentItemsInViewHandler?: (index: number) => void;
};
