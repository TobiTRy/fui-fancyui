import { useCallback, useEffect, useRef, useState } from 'react';

import { Item, Wrapper } from './FancyVirtualScroll.style';

import { TItem, TVirtualScrollProps } from './TVirtualScroll.model';
import { debounce } from '@/utils/functions/debounce';

export default function FancyVirtualScroll(props: TVirtualScrollProps) {
  const {
    children,
    containerHeight = '300px',
    itemHeight = 300,
    initialItemIndex = 0,
    scrollSnap = 'mandatory',
    itemGap = 0,
    currentItemsInView,
  } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewportItems, setViewportItems] = useState<TItem[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnVisibleItemsChange = useCallback(
    debounce((index: number) => currentItemsInView?.(index), 100),
    [currentItemsInView]
  );

  const calculateVisibleItems = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const viewHeight = containerRef.current.clientHeight;
    const effectiveItemHeight = itemHeight + itemGap;
    const totalHeight = children.length * effectiveItemHeight - itemGap; // Adjust total height calculation
    const startOffset = Math.max(0, scrollTop - effectiveItemHeight);
    const endOffset = Math.min(totalHeight, scrollTop + viewHeight + effectiveItemHeight);

    const startIndex = Math.floor(startOffset / effectiveItemHeight); // Adjust start index calculation
    const endIndex = Math.floor(endOffset / effectiveItemHeight); // Adjust end index calculation

    let mostVisibleItemIndex = -1;
    let maxVisibleHeight = 0;

    const newViewportItems = children.slice(startIndex, endIndex + 1).map((content, index) => ({
      content,
      originalIndex: startIndex + index,
    }));

    for (let i = 0; i < children.length; i++) {
      const itemTop = i * effectiveItemHeight;
      const itemBottom = itemTop + itemHeight;
      const viewBottom = scrollTop + viewHeight;

      // Calculate visibility of the current item
      const visibleTop = Math.max(scrollTop, itemTop);
      const visibleBottom = Math.min(viewBottom, itemBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // Update the most visible item if this item is more visible than previous ones
      if (visibleHeight > maxVisibleHeight) {
        mostVisibleItemIndex = i;
        maxVisibleHeight = visibleHeight;
      }
    }

    // Now mostVisibleItemIndex holds the index of the item most visible in the viewport
    if (mostVisibleItemIndex !== -1) {
      debouncedOnVisibleItemsChange(mostVisibleItemIndex);
    }

    setViewportItems(newViewportItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <Wrapper ref={containerRef} $scrollSnap={scrollSnap} $containerHeight={containerHeight}>
      <div style={{ position: 'relative', height: `${children.length * (itemHeight + itemGap) - itemGap}px` }}>
        {viewportItems.map(({ content, originalIndex }) => (
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
