import React, { useEffect, useState } from 'react';

// Import necessary components and interfaces
import BottomBar from '../../Atoms/BottomBar/BottomBar';
import ScollAbleBar from '../../Atoms/ScrollableBar/ScrollableBar';
import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';
import IBottomBar from '../../Atoms/BottomBar/IBottomBar.model';

// Define types for the component
type TBottomBarProps = Omit<IBottomBar, 'children'>;
type TDynamicScrollBarProps = {
  scrollable?: boolean;
  buttons?: IFancyBottomBarIcon[];
  secondBar?: boolean;
};
type IBottomScrollbar = TBottomBarProps & TDynamicScrollBarProps;

// Define the component
export default function DynamicBottomScrollBar(props: IBottomScrollbar) {
  // Destructure props
  const { buttons, secondBar, scrollable, ...bottomBarProps } = props;
  // Set state for active button
  const [activeButton, setActiveButton] = useState('');

  // Determine if scrollbar should be activated
  const activateScrollbar = buttons?.length! > 4 ? true : false;

  // Prevent body from scrolling when scrollbar is scrolling
  useEffect(() => {
    if (activateScrollbar) document.body.style.overflow = 'auto';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the component
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
              onClick={() => {
                item.onClick && item.onClick();
                setActiveButton(item.id!);
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
            onClick={() => {
              item.onClick && item.onClick();
              setActiveButton(item.id!);
            }}
          />
        ))
      )}
    </BottomBar>
  );
}
