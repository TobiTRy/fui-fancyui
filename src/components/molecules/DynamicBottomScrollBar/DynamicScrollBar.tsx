import { useEffect } from 'react';

import { ScrollableBar } from '@/components/atoms/ScrollableBar';
import { TDynamicScrollBar } from '@/components/molecules/DynamicBottomScrollBar/TDynamicScrollBar.model';

// --------------------------------------------------------------------------- //
// ------ The dynamic scrollbar gives the items a overvlow in y on prop ------ //
// --------------------------------------------------------------------------- //
export default function DynamicScrollBar(props: TDynamicScrollBar) {
  const { activateScrollbar, scrollable, children } = props;

  // Prevent body from scrolling when scrollbar is scrolling
  useEffect(() => {
    if (activateScrollbar) document.body.style.overflow = 'auto';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the component
  return <>{scrollable && activateScrollbar ? <ScrollableBar>{children}</ScrollableBar> : children}</>;
}
