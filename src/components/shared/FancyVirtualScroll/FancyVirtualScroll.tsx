'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Item, Wrapper } from './FancyVirtualScroll.style';
import { TVirtualScrollProps } from './TVirtualScroll.model';

export default function FancyVirtualScroll(props: TVirtualScrollProps) {
  const {
    children,
    containerHeight = '300px',
    itemHeight = 300,
    preRenderCount = 1,
    firstItemIndexInView = 0,
    scrollSnap = 'none',
    itemGap = 0,
    currentFirstItemsInViewHandler,
    attributesContainer,
    attributesItems,
    onScrollingStateChange,
  } = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [firstItemIndexInViewState, setfirstItemIndexInViewState] = useState(firstItemIndexInView);
  const [indexChange, setIndexChange] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized items to render
  // This is to avoid recalculating the items to render on every render
  const renderdItems = useMemo(() => {
    const indexToUse = indexChange ? firstItemIndexInView : firstItemIndexInViewState;

    const startIdx = Math.max(0, indexToUse - preRenderCount);
    const endIdx = Math.min(children.length - 1, indexToUse + preRenderCount);

    // give the index of the item that is currently in view to the parent component
    currentFirstItemsInViewHandler?.(indexToUse);
    setIndexChange(false);

    return children.slice(startIdx, endIdx + 1).map((content, index) => ({
      content,
      originalIndex: startIdx + index,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, preRenderCount, firstItemIndexInViewState, currentFirstItemsInViewHandler, indexChange]);

  // Calculate the index of the item that is currently in view and update the state
  const calculateVisibleItemIdx = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (indexChange) {
      return;
    }

    const containerScrollTop = container.scrollTop;
    const itemHeightWithGap = itemHeight + itemGap;
    const indexFromHeight = Math.floor(containerScrollTop / itemHeightWithGap);

    setfirstItemIndexInViewState(indexFromHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemHeight, itemGap]);

  // this effect is for the initial setup of the scroll event
  // and the cleanup of the event listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial calculation and setup for scroll event
    container.addEventListener('scroll', () => calculateVisibleItemIdx());

    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      container.removeEventListener('scroll', () => calculateVisibleItemIdx());
    };
  }, [calculateVisibleItemIdx, indexChange]);

  // Adjusts scroll position when firstItemIndexInView prop changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const newScrollTop = firstItemIndexInView * (itemHeight + itemGap); // Adjust so the item is fully in view
    container.scrollTop = newScrollTop;

    setIndexChange(true);
    setfirstItemIndexInViewState(firstItemIndexInView);
    setIsScrolling(false);

    // Force recalculation after adjusting scroll position
    calculateVisibleItemIdx();
  }, [firstItemIndexInView, itemHeight, itemGap, calculateVisibleItemIdx]);

  const handleScroll = useCallback(() => {
    if (!isScrolling) setIsScrolling(true); // Set isScrolling to true when scrolling starts
    onScrollingStateChange?.(true); // Notify parent component that scrolling has started
    // Clear the timeout if it's already set
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    // Set a timeout to update the isScrolling state after scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      onScrollingStateChange?.(false); // Notify parent component that scrolling has stopped
    }, 200); // Adjust the timeout duration as needed
  }, [isScrolling, onScrollingStateChange]);

  // This effect is for the initial setup of the scroll event and the cleanup of the event listener
  // It also handles the scrolling state
  useEffect(() => {
    const container = containerRef.current;
    if (!container || indexChange) return;

    container.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      container.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleScroll, firstItemIndexInView]);

  return (
    <Wrapper ref={containerRef} $scrollSnap={scrollSnap} $containerHeight={containerHeight} {...attributesContainer}>
      <div style={{ position: 'relative', height: `${children.length * (itemHeight + itemGap) - itemGap}px` }}>
        {renderdItems.map(({ content, originalIndex }) => (
          <Item
            style={{ top: `${originalIndex * (itemHeight + itemGap)}px`, marginBottom: '24px' }}
            key={originalIndex}
            $itemHeight={`${itemHeight}px`}
            $enableScrollSnap={Boolean(scrollSnap)}
            {...attributesItems}
          >
            {content}
          </Item>
        ))}
      </div>
    </Wrapper>
  );
}
