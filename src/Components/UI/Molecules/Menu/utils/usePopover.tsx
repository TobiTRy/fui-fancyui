import { useState, useCallback, useRef } from 'react';

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});
  const [popoverStyleApplied, setPopoverStyleApplied] = useState<boolean>(false);

  const updatePopoverStyle = useCallback(() => {
    if (anchorEl && popoverRef.current && !popoverStyleApplied) {
      const { top, left, width, height } = anchorEl.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();

      const spaceFromRight = window.innerWidth - left;
      const shouldAlignRight = spaceFromRight < popoverRect.width;

      const newStyle: React.CSSProperties = {
        position: 'absolute',
        top: top + height + window.scrollY,
        left: shouldAlignRight ? 'auto' : left + window.scrollX,
        right: shouldAlignRight ? window.innerWidth - left - width + window.scrollX : 'auto',
        zIndex: 1000,
      };
      setPopoverStyle(newStyle);
      setPopoverStyleApplied(true); // Mark that the style has been applied to prevent re-application
    }
  }, [anchorEl, popoverStyleApplied]);

  const togglePopover = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl === event.currentTarget) {
      setAnchorEl(null);
      setPopoverStyleApplied(false); // Reset when the popover is closed
    } else {
      setAnchorEl(event.currentTarget);
      setPopoverStyleApplied(false); // Ensure we can apply the style again if the popover reopens
    }
  };

  return { anchorEl, popoverStyle, updatePopoverStyle, togglePopover, popoverRef };
};

export default usePopover;
