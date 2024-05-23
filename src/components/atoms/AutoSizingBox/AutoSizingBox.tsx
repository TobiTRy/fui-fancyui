import React, { useState, useRef, useEffect } from 'react';
import { InnerContentWrapper } from './AutoSizingBox.style';
import { TAutoSizingBox } from './TAutoSizingBox.model';

// --------------------------------------------------------------------------- //
// A Box thats adjusts width and height dynamicly from the childs via animation//
// --------------------------------------------------------------------------- //
export default function AutoSizingBox(props: TAutoSizingBox) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { children, startHeight, startWidth, adjustHeight = true, adjustWidth, changeTrigger } = props;

  // State for the height and width of the box
  const [boxHeight, setBoxHeight] = useState(startHeight || 'auto');
  const [boxWidth, setBoxWidth] = useState(startWidth || 'auto');

  // Reference to the box element to get the scrollHeight and scrollWidth
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ResizeObserver to observe the box element
    const resizeObserver = new ResizeObserver(() => {
      if (boxRef.current) {
        if (adjustHeight) {
          setBoxHeight(boxRef.current.scrollHeight);
        }
        if (adjustWidth) {
          setBoxWidth(boxRef.current.scrollWidth);
        }
      }
    });

    if (boxRef.current) {
      // Start observing the box element for changes
      resizeObserver.observe(boxRef.current);
    }
    // Cleanup the observer on unmount or before re-running this effect
    return () => resizeObserver.disconnect();
  }, [children, adjustHeight, adjustWidth, changeTrigger]);

  return (
    <InnerContentWrapper style={{ height: boxHeight, width: boxWidth }}>
      <div ref={boxRef}>{children}</div>
    </InnerContentWrapper>
  );
}
