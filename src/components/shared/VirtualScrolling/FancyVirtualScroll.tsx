import { useCallback, useEffect, useRef, useState } from 'react';

import { TItem, TVirtualScrollProps } from './TVirtualScrolling.model';

export default function FancyVirtualScroll(props: TVirtualScrollProps) {
  const {
    children,
    containerHeight = '300px',
    itemHeight = 300,
    initialItemIndex = 0,
    enableScrollSnap = true,
    itemGap = 0,
  } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewportItems, setViewportItems] = useState<TItem[]>([]);

  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const viewHeight = containerRef.current.clientHeight;
    const effectiveItemHeight = itemHeight + itemGap;
    const totalHeight = children.length * effectiveItemHeight - itemGap; // Adjust total height calculation
    const startOffset = Math.max(0, scrollTop - effectiveItemHeight);
    const endOffset = Math.min(totalHeight, scrollTop + viewHeight + effectiveItemHeight);

    const startIndex = Math.floor(startOffset / effectiveItemHeight);
    const endIndex = Math.floor(endOffset / effectiveItemHeight);

    const newViewportItems = children.slice(startIndex, endIndex + 1).map((content, index) => ({
      content,
      originalIndex: startIndex + index,
    }));

    setViewportItems(newViewportItems);
  }, [children, itemHeight, itemGap]);

  useEffect(() => {
    calculateVisibleItems();
    const container = containerRef.current;
    container?.addEventListener('scroll', calculateVisibleItems);

    return () => container?.removeEventListener('scroll', calculateVisibleItems);
  }, [calculateVisibleItems]);

  useEffect(() => {
    if (containerRef.current) {
      const initialScrollTop = initialItemIndex * (itemHeight + itemGap);
      containerRef.current.scrollTop = initialScrollTop;
    }
  }, [initialItemIndex, itemHeight, itemGap]);

  const containerStyle = {
    height: containerHeight,
    overflowY: 'scroll',
    scrollSnapType: enableScrollSnap ? 'y mandatory' : 'none',
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={{ position: 'relative', height: `${children.length * (itemHeight + itemGap) - itemGap}px` }}>
        {viewportItems.map(({ content, originalIndex }) => (
          <div
            key={originalIndex}
            style={{
              position: 'absolute',
              top: `${originalIndex * (itemHeight + itemGap)}px`,
              left: 0,
              right: 0,
              height: `${itemHeight}px`,
              overflow: 'hidden',
              scrollSnapAlign: enableScrollSnap ? 'start' : 'none',
            }}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
