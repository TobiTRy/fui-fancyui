'use client';

import React, { useState, useLayoutEffect, useRef } from 'react';

import { PopoverContainer } from './Popover.style';

type PopoverProps = {
  buttonRef: React.RefObject<HTMLDivElement>;
  content: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
  xOffset?: number;
  yOffset?: number;
};

const Popover: React.FC<PopoverProps> = ({ buttonRef, content, isVisible, onClose, xOffset = 0, yOffset = 0 }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      !buttonRef.current?.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useLayoutEffect(() => {
    function updatePosition() {
      if (buttonRef.current && popoverRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();

        const isButtonOnLeftSide = buttonRect.left < window.innerWidth / 2;

        let newLeft = isButtonOnLeftSide
          ? buttonRect.left + xOffset
          : buttonRect.right - popoverRef.current.offsetWidth - xOffset;

        let newTop = buttonRect.bottom + yOffset;

        // Check for window boundaries
        if (newLeft < 0) {
          newLeft = xOffset; // Add space to avoid touching the window edge
        }
        if (newLeft + popoverRect.width > window.innerWidth) {
          newLeft = window.innerWidth - popoverRect.width - xOffset; // Subtract space to avoid touching the window edge
        }
        if (newTop + popoverRect.height > window.innerHeight) {
          newTop = buttonRect.top - popoverRect.height - yOffset;
        }

        const newPosition = {
          top: newTop,
          left: newLeft,
        };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, buttonRef, xOffset, yOffset, content]);

  return (
    <PopoverContainer ref={popoverRef} $isVisible={isVisible} style={position}>
      {content}
    </PopoverContainer>
  );
};

export default Popover;
