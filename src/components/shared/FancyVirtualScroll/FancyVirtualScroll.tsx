import { useCallback, useEffect, useRef, useState } from 'react';

import { Item, Wrapper } from './FancyVirtualScroll.style';

import { TItem, TVirtualScrollProps } from './TVirtualScroll.model';
import { debounce } from '@/utils/functions/debounce';

export default function FancyVirtualScroll(props: TVirtualScrollProps) {
  const {
    children,
    containerHeight = '300px',
    itemHeight = 300,
    preRenderCount = 3,
    itemIndexInView = 2,
    scrollSnap = 'mandatory',
    itemGap = 0,
    currentItemsInViewHandler,
  } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [viewportItems, setViewportItems] = useState<TItem[]>([]);
  const [itemIndexInViewState, setitemIndexInViewState] = useState(itemIndexInView);

  const rangeHeight = children.length * (itemHeight + itemGap) - itemGap;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnVisibleItemsChange = useCallback(
    debounce((index: number) => currentItemsInViewHandler?.(index), 100),
    [currentItemsInViewHandler]
  );

  const calcHeightFromIndex = (index: number) => {
    console.log(index, 'index');
    return index * (itemHeight + itemGap);
  };

  const calcIndexFromHeight = (scrollTop: number, itemHeight: number) => {
    // This calculates the index at the current scroll position by dividing the scrollTop height by the height of each item.
    // Math.floor is used to ensure the index is a whole number, indicating the first fully visible item at the scrollTop position.
    return Math.floor(scrollTop / itemHeight);
  };

  const calculateVisibleItems = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerScrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    const itemHeightWithGap = itemHeight + itemGap;

    const scrollTopIndexPosition = itemHeightWithGap * itemIndexInViewState - itemHeight;

    const toTopOfIndexItem = calcHeightFromIndex(itemIndexInViewState);

    const indexFromHeight = calcIndexFromHeight(containerScrollTop, itemHeightWithGap);
    console.log('indexFromHeight', indexFromHeight, toTopOfIndexItem);

    // get index of the main index item
    // add the preRenderCount to the index and calculate the start and end index from that

    console.log('indexOfIndexItem', toTopOfIndexItem);

    const start = Math.max(0, Math.floor(toTopOfIndexItem - preRenderCount));
    const end = Math.min(start, Math.floor(toTopOfIndexItem + preRenderCount) + 1);

    //generate the start and end index from

    console.log('start', start, 'end', end);

    //update index
    setitemIndexInViewState(start);

    const items = children.slice(start, end);
    setViewportItems(items.map((content, index) => ({ content, originalIndex: start + index })));

    console.log('scrollTopIndexPosition', scrollTopIndexPosition);
  }, []);

  useEffect(() => {
    calculateVisibleItems();
    const container = containerRef.current;
    container?.addEventListener('scroll', calculateVisibleItems);

    return () => container?.removeEventListener('scroll', calculateVisibleItems);
  }, [calculateVisibleItems]);

  useEffect(() => {
    setitemIndexInViewState(itemIndexInView);
  }, [itemIndexInView]);

  return (
    <Wrapper ref={containerRef} $scrollSnap={scrollSnap} $containerHeight={containerHeight}>
      <div style={{ position: 'relative', height: `${rangeHeight}px` }}>
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
