import React, { useRef } from 'react';
import { styled } from 'styled-components';


export const ScollAbleBar = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export interface IScrollableBar {
  children?: React.ReactNode;
}
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

