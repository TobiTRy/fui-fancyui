import React from 'react';
import SwitchList from '../../Molecules/SwitchList/SwitchList';
import useFancyHandyNavStore from './FancyHandyNav.store';
import BottomBar from '../../Molecules/BottomBar/BottomBar';




export default function FancyHandyNav() {
  const isVisibleState = useFancyHandyNavStore((state) => state.isVisible);
  const setIsVisible = useFancyHandyNavStore((state) => state.setIsVisible);
  const whichIsActive = useFancyHandyNavStore((state) => state.whichIsActive);
  const setWhichIsActive = useFancyHandyNavStore((state) => state.setWhichIsActive);



  return (
    <BottomBar>
      <SwitchList whichIndexIsSelected={Number(whichIsActive)} $indicatorWidth={'70%'}>
        {ItterateButtons()}
      </SwitchList>
    </BottomBar>
  );
}
