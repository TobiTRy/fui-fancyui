// PopoverContainer.ts
import styled from 'styled-components';

export const PopoverContainer = styled.div<{ $isVisible: boolean; position: { top: number; left: number; } }>`
  position: fixed;
  top: ${(props) => props.position.top}px;
  left: ${(props) => props.position.left}px;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;

// Popover.tsx
import React, { useState, useLayoutEffect, useRef } from 'react';

type PopoverProps = {
  buttonRef: React.RefObject<HTMLDivElement>;
  content: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
  xOffset?: number;
  yOffset?: number; 
};

const Popover: React.FC<PopoverProps> = ({
  buttonRef,
  content,
  isVisible,
  onClose,
  xOffset = 0,
  yOffset = 0
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef<HTMLDivElement>(null);


  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
      onClose();
    }
  };


  useLayoutEffect(() => {
    function updatePosition() {
      if (buttonRef.current && popoverRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();

        const newPosition = {
          top: buttonRect.bottom + yOffset,
          left: buttonRect.left + xOffset,
        };

        const popoverWidth = popoverRef.current.offsetWidth;
        const popoverHeight = popoverRef.current.offsetHeight;

        // Adjust for right side overflow
        if (newPosition.left + popoverWidth > window.innerWidth) {
          newPosition.left -= (newPosition.left + popoverWidth) - window.innerWidth;
        }
        // Adjust for bottom overflow
        if (newPosition.top + popoverHeight > window.innerHeight) {
          newPosition.top -= (newPosition.top + popoverHeight) - window.innerHeight;
        }

        // Adjust so it doesn't overlap the button
        if (newPosition.top < buttonRect.top) {
          newPosition.top = buttonRect.top - popoverHeight - yOffset;
        }

        setPosition(newPosition);
      }
    }

    if (isVisible) {
      updatePosition();
    }

    // Attach event listeners
    if (isVisible) {
      document.addEventListener('click', handleClickOutside, true);
      window.addEventListener('resize', updatePosition);
    }

    // Cleanup event listeners on cleanup
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible, buttonRef, xOffset, yOffset, content]); // Added `content` dependency to recalculate on content change

  return (
    <PopoverContainer
      ref={popoverRef}
      $isVisible={isVisible}
      position={position}
      style={position}
    >
      {content}
    </PopoverContainer>
  );
};

export default Popover;
