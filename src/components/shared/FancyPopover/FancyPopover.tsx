import React, { useState, useRef, useEffect } from 'react';

import { ContentContainer, RefContainer } from './Popover.style';

interface FancyPopoverProps {
  refComponent: React.ReactElement;
  contentComponent: React.ReactElement;
  offsetX?: number; // horizontal offset
  offsetY?: number; // vertical offset
}
export default function FancyPopover(props: FancyPopoverProps) {
  const { refComponent, contentComponent, offsetX = 0, offsetY = 0 } = props;
  const [isContentVisible, setContentVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setContentVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // this is the function that will position the content element relative to the ref element
    const handleWindowResize = () => {
      // Early return if refs are not set
      if (!contentRef.current || !ref.current) return;

      const refRect = ref.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const midpoint = window.innerWidth / 2;
      const isLeftSide = refRect.left < midpoint;

      const left = isLeftSide ? offsetX : 'auto';
      const right = isLeftSide ? 'auto' : offsetX;
      let top = refRect.height + offsetY;

      // Prevent content from going offscreen vertically
      if (refRect.bottom + contentRect.height + offsetY > window.innerHeight) {
        top = -contentRect.height - offsetY;
      }

      // Set content position
      contentRef.current.style.left = typeof left === 'number' ? `${left}px` : left;
      contentRef.current.style.right = typeof right === 'number' ? `${right}px` : right;
      contentRef.current.style.top = `${top}px`;
    };

    // Call once to set initial position
    handleWindowResize();

    // Add event listener to adjust on window resize
    window.addEventListener('resize', handleWindowResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [isContentVisible, offsetX, offsetY]); // Added dependencies

  // hanldeClick on the ref toggles the visibility of the content element
  const handleClick = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <RefContainer ref={ref} onClick={handleClick}>
      {refComponent}
      {isContentVisible && <ContentContainer ref={contentRef}>{contentComponent}</ContentContainer>}
    </RefContainer>
  );
}
