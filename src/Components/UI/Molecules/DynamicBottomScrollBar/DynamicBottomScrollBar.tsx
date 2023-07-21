import React, { useEffect, useState } from 'react';

import BottomBar from '../../Atoms/BottomBar/BottomBar';
import ScollAbleBar from '../../Atoms/ScrollableBar/ScrollableBar';
import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';
import IBottomBar from '../../Atoms/BottomBar/IBottomBar.model';

type TBottomBarProps = Omit<IBottomBar, 'children'>;
type TDynamicScrollBarProps = {
  scrollable?: boolean;
  buttons?: IFancyBottomBarIcon[];
  secondBar?: boolean;
};

type IBottomScrollbar = TBottomBarProps & TDynamicScrollBarProps;
export default function DynamicBottomScrollBar(props: IBottomScrollbar) {
  const { buttons, secondBar, scrollable, ...bottomBarProps } = props;
  const activateScrollbar = buttons?.length! > 4 ? true : false;
  const [activeButton, setActiveButton] = useState('');

  const activeHandler = (id: string) => {
    setActiveButton(id);
  };

  //this prevent the body from scrolling when the scrollbar is scrolling
  useEffect(() => {
    if (activateScrollbar) document.body.style.overflow = 'auto';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BottomBar {...bottomBarProps}>
      {scrollable && activateScrollbar ? (
        <ScollAbleBar>
          {buttons?.map((item, i) => (
            <FancyBottomBarIcon
              key={i}
              {...item}
              secondBar={secondBar}
              active={item.id === activeButton}
              handler={() => {
                item.handler && item.handler();
                activeHandler(item.id!)
              }}
            />
          ))}
        </ScollAbleBar>
      ) : (
        buttons?.map((item, i) => (
          <FancyBottomBarIcon
            key={i}
            {...item}
            secondBar={secondBar}
            active={item.id === activeButton}
            handler={() => {
              item.handler && item.handler();
              activeHandler(item.id!)
            }}
          />
        ))
      )}
    </BottomBar>
  );
}
