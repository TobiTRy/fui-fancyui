import React, { useRef } from 'react';
import { ScollAbleBar } from './SrollableBar.style';

export interface IScrollableBar {
  children?: React.ReactNode;
}
// --------------------------------------------------------------------------- //
// -------- Handles the overflow in the scrollbar  with mac variation -------- //
// --------------------------------------------------------------------------- //
export default function ScrollableBar(props: IScrollableBar) {
  const { children } = props ;

  const scrollAbleBar = useRef<HTMLDivElement>(null);

  //this function handles the horizontal scrooling with the mouse wheel
  const horizontalScrollingHandler = (e: React.WheelEvent) => {
    if (/Mac/i.test(navigator.userAgent)) {
      return;
    }
  
    const box = scrollAbleBar.current;
    box!.scrollLeft += e.deltaY < 0 ? -30 : 30;
  };
  return (
    <ScollAbleBar onWheel={horizontalScrollingHandler} ref={scrollAbleBar}>
      { children }
    </ScollAbleBar>
  );
}

