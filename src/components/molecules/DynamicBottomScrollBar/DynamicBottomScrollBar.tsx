import { ReactNode, useEffect } from 'react';

import { ScrollableBar } from '@/components/atoms/ScrollableBar';

// Define types for the component
type TDynamicScrollBarProps = {
  scrollable?: boolean;
  activateScrollbar?: boolean;
  children?: ReactNode;
};
// --------------------------------------------------------------------------- //
// ------ The dynamic scrollbar gives the items a overvlow in y on prop ------ //
// --------------------------------------------------------------------------- //
export default function DynamicBottomScrollBar(props: TDynamicScrollBarProps) {
  const { activateScrollbar, scrollable, children } = props;

  // Prevent body from scrolling when scrollbar is scrolling
  useEffect(() => {
    if (activateScrollbar) document.body.style.overflow = 'auto';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the component
  return <>{scrollable && activateScrollbar ? <ScrollableBar>{children}</ScrollableBar> : children}</>;
}
