import React, { useEffect, useRef } from 'react';

import { Bar, ItemWrapper, ScollAbleBar, Wrapper } from './BottomBar.style';
import IBottomBar from './ButtomBar.model';


export default function BottomBar(props: IBottomBar) {
  const { children, scrollable, bottomFixed = true, width, secondBar, spacingLeftRight } = props;
  const scrollAbleBar = useRef<HTMLDivElement>(null);
  const activateScrollbar = scrollable || (children?.length! > 4) ? true : false;

  //this function handles the horizontal scrooling with the mouse wheel
  const horizontalScrollingHandler = (e: React.WheelEvent) => {
    let box = scrollAbleBar.current;
    box!.scrollLeft += e.deltaY < 0 ? -30 : 30;
  };


  //this prevent the body from scrolling when the scrollbar is scrolling
  useEffect(() => {
    if (activateScrollbar) {
      document.body.style.overflow = 'auto';
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Wrapper $bottomFixed={bottomFixed} $width={width} $secondBar={secondBar} $spacingLeftRight={spacingLeftRight}>
      <Bar>
        {!activateScrollbar ? (
          children && children.map((item, i) => <ItemWrapper key={i} $secondBar={secondBar}>{item}</ItemWrapper>)
        ) : (
          <ScollAbleBar onWheel={horizontalScrollingHandler} ref={scrollAbleBar}>
            {children && children.map((item, i) => <ItemWrapper $secondBar={secondBar} key={i}>{item}</ItemWrapper>)}
          </ScollAbleBar>
        )}
      </Bar>
    </Wrapper>
  );
}
