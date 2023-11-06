// Popover.tsx
import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const PopoverContainer = styled.div<{ $isVisible: boolean; $position: { top: number; left: number } }>`
  position: fixed;
  top: ${(props) => props.$position.top}px;
  left: ${(props) => props.$position.left}px;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;

type PopoverProps = {
  buttonRef: React.RefObject<HTMLDivElement>;
  content: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
};

export default function Popover({ buttonRef, content, isVisible, onClose }: PopoverProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
      onClose();
    }
  };

  // Adjust the position of the popover to make sure it stays in the viewport
  useLayoutEffect(() => {
    function updatePosition() {
      if (buttonRef.current && popoverRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();

        const newPosition = {
          top: buttonRect.bottom + window.scrollY,
          left: buttonRect.left + window.scrollX,
        };

        // Adjust for right side overflow
        if (newPosition.left + popoverRect.width > window.innerWidth) {
          newPosition.left = window.innerWidth - popoverRect.width;
        }
        // Adjust for bottom overflow
        if (newPosition.top + popoverRect.height > window.innerHeight) {
          newPosition.top = window.innerHeight - popoverRect.height;
        }

        setPosition(newPosition);
      }
    }

    updatePosition();

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
  }, [isVisible, buttonRef]);

  return (
    <PopoverContainer ref={popoverRef} $isVisible={isVisible} $position={position}>
      {content}
    </PopoverContainer>
  );
}
