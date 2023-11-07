import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface FancyPopoverProps {
  refComponent: React.ReactElement;
  contentComponent: React.ReactElement;
  offsetX?: number; // horizontal offset
  offsetY?: number; // vertical offset
}

const RefContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ContentContainer = styled.div`
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1000;
`;

export default function FancyPopover(props: FancyPopoverProps) {
  const { refComponent, contentComponent, offsetX = 0, offsetY = 0 } = props;
  const [isContentVisible, setContentVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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


  const handleClick = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <RefContainer ref={ref} onClick={handleClick}>
      {refComponent}
      {isContentVisible && (
        <ContentContainer ref={contentRef}>{contentComponent}</ContentContainer>
      )}
    </RefContainer>
  );
}
