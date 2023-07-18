import React, { useEffect, useRef } from 'react';

import BottomBar from '../../Atoms/BottomBar/BottomBar';
import ScollAbleBar, { IScrollableBar } from '../../Atoms/ScrollableBar/ScrollableBar';

//interface IBottomScrollbar extends IScrollableBar {}

export default function BottomScrollbar(props: IScrollableBar) {
  const { childrenArray } = props;

  return (
    <BottomBar>
      <ScollAbleBar childrenArray={childrenArray}/>
    </BottomBar>
  );
} 

{
  // is needed for the parent
  /* <ItemWrapper $secondBar={secondBar} key={i}>
{item}
</ItemWrapper> */
}
