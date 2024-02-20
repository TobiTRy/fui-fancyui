import { CSSProp } from 'styled-components';

export type TVirtualScrollProps = {
  children: React.ReactNode[];
  containerHeight?: string;
  preRenderCount?: number;
  itemHeight?: number;
  firstItemIndexInView?: number;
  scrollSnap?: 'mandatory' | 'proximity' | 'none';
  itemGap?: number; // New prop for specifying the gap between children
  currentItemsInViewHandler?: (index: number) => void;
  attributesContainer?: HTMLDivProps;
  attributesItems?: HTMLDivProps;
  onScrollingStateChange?: (isScrolling: boolean) => void;
};

type HTMLDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> & { $externalStyle: CSSProp };
