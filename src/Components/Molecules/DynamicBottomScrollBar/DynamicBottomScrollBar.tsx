import React, { useEffect } from 'react';

import ScollAbleBar from '../../Atoms/ScrollableBar/ScrollableBar';

// Define types for the component
type TDynamicScrollBarProps = {
  scrollable?: boolean;
  activateScrollbar?: boolean;
  children?: React.ReactNode;
};

// Define the component
export default function DynamicBottomScrollBar(props: TDynamicScrollBarProps) {
  const { activateScrollbar, scrollable, children } = props;

  // Prevent body from scrolling when scrollbar is scrolling
  useEffect(() => {
    if (activateScrollbar) document.body.style.overflow = 'auto';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the component
  return <>{scrollable && activateScrollbar ? <ScollAbleBar>{children}</ScollAbleBar> : children}</>;
}
