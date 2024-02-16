import React, { useRef, useState, useEffect, useCallback } from 'react';
import { CSSProp } from 'styled-components';

interface Item {
  content: React.ReactNode;
  originalIndex: number;
}

interface VirtualScrollProps {
  items: React.ReactNode[];
  containerHeight?: string;
  itemHeight?: number;
  initialItemIndex?: number; // For specifying the initial item index
  enableScrollSnap?: boolean; // New prop for enabling scroll snap
}

const VirtualScroll: React.FC<VirtualScrollProps> = ({
  items,
  containerHeight = '300px',
  itemHeight = 300,
  initialItemIndex = 0,
  enableScrollSnap = true, // Default to false if not provided
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewportItems, setViewportItems] = useState<Item[]>([]);

  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const viewHeight = containerRef.current.clientHeight;
    const totalHeight = items.length * itemHeight;
    const startOffset = Math.max(0, scrollTop - itemHeight);
    const endOffset = Math.min(totalHeight, scrollTop + viewHeight + itemHeight);

    const startIndex = Math.floor(startOffset / itemHeight);
    const endIndex = Math.floor(endOffset / itemHeight);

    const newViewportItems = items.slice(startIndex, endIndex + 1).map((content, index) => ({
      content,
      originalIndex: startIndex + index,
    }));

    setViewportItems(newViewportItems);
  }, [items, itemHeight]);

  useEffect(() => {
    calculateVisibleItems();
    const container = containerRef.current;
    container?.addEventListener('scroll', calculateVisibleItems);

    return () => container?.removeEventListener('scroll', calculateVisibleItems);
  }, [calculateVisibleItems]);

  useEffect(() => {
    if (containerRef.current) {
      const initialScrollTop = initialItemIndex * itemHeight;
      containerRef.current.scrollTop = initialScrollTop;
    }
  }, [initialItemIndex, itemHeight]);

  const containerStyle: CSSProp = {
    height: containerHeight,
    overflowY: 'scroll',
    ...(enableScrollSnap && {
      scrollSnapType: 'y mandatory',
    }),
  };

  const itemStyle: CSSProp = {
    position: 'absolute',
    left: 0,
    right: 0,
    height: `${itemHeight}px`,
    overflow: 'hidden',
    ...(enableScrollSnap && {
      scrollSnapAlign: 'start',
    }),
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={{ position: 'relative', height: `${items.length * itemHeight}px` }}>
        {viewportItems.map(({ content, originalIndex }) => (
          <div
            key={originalIndex}
            style={{
              ...itemStyle,
              top: `${originalIndex * itemHeight}px`,
            }}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualScroll;
