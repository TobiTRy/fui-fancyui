import React, { useEffect, useState } from 'react';

import ScollAbleBar from '../../Atoms/ScrollableBar/ScrollableBar';
import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';

// Define types for the component
type TDynamicScrollBarProps = {
  scrollable?: boolean;
  buttons?: IFancyBottomBarIcon[];
};
type IBottomScrollbar =  TDynamicScrollBarProps;

// Define the component
export default function DynamicBottomScrollBar(props: IBottomScrollbar) {
  // Destructure props
  const { buttons, scrollable  } = props;
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
    <>
      {scrollable && activateScrollbar ? (
        <ScollAbleBar>
          {buttons?.map((item, i) => (
            <FancyBottomBarIcon
              key={i}
              {...item}
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
            active={item.id === activeButton}
            onClick={() => {
              item.onClick && item.onClick();
              setActiveButton(item.id!);
            }}
          />
        ))
      )}
    </>
  );
}
