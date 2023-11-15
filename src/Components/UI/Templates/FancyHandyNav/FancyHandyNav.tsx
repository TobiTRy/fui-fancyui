import React from 'react';

import SwitchList from '../../Molecules/SwitchList/SwitchList';
import useFancyHandyNavStore from './FancyHandyNav.store';
import BottomBar from '../../Molecules/BottomBar/BottomBar';
import FancyBottomBarIcon, { IFancyBottomBarIcon } from '../FancyBottomBarIcon/FancyBottomBarIcon';


interface IFancyHandyNav {
  items?: IFancyBottomBarIcon[];

}
export default function FancyHandyNav(props: IFancyHandyNav) {
  const { items } = props;

  const isVisibleState = useFancyHandyNavStore((state) => state.isVisible);
  const setIsVisible = useFancyHandyNavStore((state) => state.setIsVisible);
  const whichIsActive = useFancyHandyNavStore((state) => state.whichIsActive);
  const setWhichIsActive = useFancyHandyNavStore((state) => state.setWhichIsActive);

  return (
    <BottomBar>
      <SwitchList whichIndexIsSelected={Number(whichIsActive)} $indicatorWidth={'70%'}>
        {items?.map((item, index) => (
          <FancyBottomBarIcon
            key={index}
            isActive={whichIsActive === index.toString()}
            {...item}
            onClick={() => {
              item.onClick && item.onClick();
              setWhichIsActive(index.toString());
              setIsVisible(false);
            }}
          />
        ))}
      </SwitchList>
    </BottomBar>
  );
}
