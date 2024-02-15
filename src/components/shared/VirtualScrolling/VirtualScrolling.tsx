import React, { useRef, useState, useEffect, useCallback } from 'react';

interface Item {
  content: React.ReactNode;
  originalIndex: number;
}

interface VirtualScrollProps {
  items: React.ReactNode[];
  containerHeight?: string;
  itemHeight?: number;
  initialItemIndex?: number; // New prop for specifying the initial item index
}

const VirtualScroll: React.FC<VirtualScrollProps> = ({
  items,
  containerHeight = '300px',
  itemHeight = 300,
  initialItemIndex = 3, // Default to 0 if not provided
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

  // Adjust the initial scroll position based on the initialItemIndex
  useEffect(() => {
    if (containerRef.current) {
      const initialScrollTop = initialItemIndex * itemHeight;
      containerRef.current.scrollTop = initialScrollTop;
    }
  }, [initialItemIndex, itemHeight]);

  return (
    <div ref={containerRef} style={{ height: containerHeight, overflowY: 'scroll' }}>
      <div style={{ position: 'relative', height: `${items.length * itemHeight}px`, scrollSnapType: 'y mandatory' }}>
        {viewportItems.map(({ content, originalIndex }) => (
          <div
            key={originalIndex}
            style={{
              scrollSnapAlign: 'start',
              position: 'absolute',
              top: `${originalIndex * itemHeight}px`,
              left: 0,
              right: 0,
              height: `${itemHeight}px`,
              overflow: 'hidden',
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
