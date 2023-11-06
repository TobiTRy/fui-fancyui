import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PopoverProps {
  isOpen: boolean;
  style: React.CSSProperties;
  content: React.ReactNode;
  updatePopoverStyle: () => void;
  popoverRef: React.RefObject<HTMLDivElement>;
}

const Popover: FC<PopoverProps> = ({ isOpen, style, content, updatePopoverStyle, popoverRef }) => {
  useEffect(() => {
    if (isOpen) {
      updatePopoverStyle();
    }
  }, [isOpen, updatePopoverStyle]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div ref={popoverRef} style={style}>
      {content}
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Popover;
