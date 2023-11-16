import React, { useEffect } from 'react';

import SwitchList from '../../Molecules/SwitchList/SwitchList';
import useFancyHandyNavStore from './FancyHandyNav.store';
import BottomBar from '../../Molecules/BottomBar/BottomBar';
import FancyBottomBarIcon, { IFancyBottomBarIcon } from '../FancyBottomBarIcon/FancyBottomBarIcon';
import RawNav from '../../Atoms/RawNav/RawNav';
import { TLayer } from '../../Design/color/generateColorSteps';
import { TUiColorsType } from '../../Design/color/designColor';

interface IFancyHandyNav {
  items?: IFancyBottomBarIcon[];
  isVisible?: boolean;
  wichIndexIsActive?: string;
  themeType?: keyof TUiColorsType;
  themeTypeIcons?: keyof TUiColorsType;
  themeTypeSwitchList?: keyof TUiColorsType;
  layer?: TLayer;
}
// --------------------------------------------------------------------------- //
// ---------- A handyNavBar that can dynamicly generated via objects---------- //
// --------------------------------------------------------------------------- //
export default function FancyHandyNav(props: IFancyHandyNav) {
  const { items, isVisible, wichIndexIsActive, themeType, themeTypeIcons, themeTypeSwitchList, layer } = props;

  // setup a global zustand store for the visibility and the active index
  const isVisibleState = useFancyHandyNavStore((state) => state.isVisible);
  const setIsVisible = useFancyHandyNavStore((state) => state.setIsVisible);
  const stateWhichIsActive = useFancyHandyNavStore((state) => state.whichIsActive);
  const setWhichIsActiveState = useFancyHandyNavStore((state) => state.setWhichIsActive);

  // Set the default values / initial values
  useEffect(() => {
    setWhichIsActiveState(wichIndexIsActive ?? '0');
  }, []);

  // handle the visibility of the nav
  useEffect(() => {
    setIsVisible(isVisible ?? true);
  }, [isVisible]);


  return (
    <>
      {isVisibleState && (
        // The Navbar container
        <RawNav>
          <BottomBar themeType={themeType} layer={layer} externalStyle={{borderBottom: 'none'}}>
            {/* The List with the items  */}
            <SwitchList whichIndexIsSelected={Number(stateWhichIsActive)} $themeType={themeTypeSwitchList} $indicatorWidth={'70%'}>
              {items?.map((item, index) => (
                <FancyBottomBarIcon
                  key={index}
                  themeType={themeTypeIcons}
                  layer={layer}
                  isActive={Number(stateWhichIsActive) === index}
                  onClick={() => setWhichIsActiveState(`${index}`)}
                  {...item}
                />
              ))}
            </SwitchList>
          </BottomBar>
        </RawNav>
      )}
    </>
  );
}
