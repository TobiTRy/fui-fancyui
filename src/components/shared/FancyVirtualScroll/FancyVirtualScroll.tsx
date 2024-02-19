import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Item, Wrapper } from './FancyVirtualScroll.style';
import { TVirtualScrollProps } from './TVirtualScroll.model';

export default function FancyVirtualScroll(props: TVirtualScrollProps) {
  const {
    children,
    containerHeight = '300px',
    itemHeight = 300,
    preRenderCount = 1,
    itemIndexInView = 0,
    scrollSnap = 'proximity',
    itemGap = 0,
    currentItemsInViewHandler,
  } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemIndexInViewState, setItemIndexInViewState] = useState(itemIndexInView);
  const [indexChange, setIndexChange] = useState(false);

  // Memoized items to render
  // This is to avoid recalculating the items to render on every render
  const renderdItems = useMemo(() => {
    const startIdx = Math.max(0, itemIndexInViewState - preRenderCount);
    const endIdx = Math.min(children.length - 1, itemIndexInViewState + preRenderCount);

    // give the index of the item that is currently in view to the parent component
    currentItemsInViewHandler?.(itemIndexInViewState);

    return children.slice(startIdx, endIdx + 1).map((content, index) => ({
      content,
      originalIndex: startIdx + index,
    }));
  }, [children, preRenderCount, itemIndexInViewState]);

  // Calculate the index of the item that is currently in view and update the state
  const calculateVisibleItemIdx = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerScrollTop = container.scrollTop;
    const itemHeightWithGap = itemHeight + itemGap;
    let indexFromHeight = Math.floor(containerScrollTop / itemHeightWithGap);

    if (indexChange) indexFromHeight = itemIndexInView;

    setItemIndexInViewState(indexFromHeight);
  }, [itemHeight, itemGap]);

  // this effect is for the initial setup of the scroll event
  // and the cleanup of the event listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial calculation and setup for scroll event
    container.addEventListener('scroll', () => {
      calculateVisibleItemIdx();
    });

    return () => {
      container.removeEventListener('scroll', calculateVisibleItemIdx);
    };
  }, [calculateVisibleItemIdx, indexChange]);

  // Adjusts scroll position when itemIndexInView prop changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const newScrollTop = itemIndexInView * (itemHeight + itemGap); // Adjust so the item is fully in view
    container.scrollTop = newScrollTop;

    setIndexChange(true);
    setItemIndexInViewState(itemIndexInView);

    // Force recalculation after adjusting scroll position
    calculateVisibleItemIdx();
  }, [itemIndexInView, itemHeight, itemGap, calculateVisibleItemIdx]);

  return (
    <Wrapper ref={containerRef} $scrollSnap={scrollSnap} $containerHeight={containerHeight}>
      <div style={{ position: 'relative', height: `${children.length * (itemHeight + itemGap) - itemGap}px` }}>
        {renderdItems.map(({ content, originalIndex }) => (
          <Item
            style={{ top: `${originalIndex * (itemHeight + itemGap)}px` }}
            key={originalIndex}
            $itemHeight={`${itemHeight}px`}
            $enableScrollSnap={Boolean(scrollSnap)}
          >
            {content}
          </Item>
        ))}
      </div>
    </Wrapper>
  );
}
