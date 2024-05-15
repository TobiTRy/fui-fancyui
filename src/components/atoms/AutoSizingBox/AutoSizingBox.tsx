import React, { useState, useRef, useEffect } from 'react';
import { InnerContentWrapper } from './AutoSizingBox.style';

interface ExpandingBoxProps {
  children: React.ReactNode;
}

export default function AutoSizingBox({ children }: ExpandingBoxProps) {
  const [boxHeight, setBoxHeight] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a new ResizeObserver with a callback that updates the boxHeight state
    const resizeObserver = new ResizeObserver(() => {
      if (boxRef.current) {
        setBoxHeight(boxRef.current.scrollHeight);
      }
    });
    // Observe the boxRef
    if (boxRef.current) {
      resizeObserver.observe(boxRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [children]); // Update when children change

  return (
    <InnerContentWrapper style={{ height: boxHeight }}>
      <div ref={boxRef}>{children}</div>
    </InnerContentWrapper>
  );
}
