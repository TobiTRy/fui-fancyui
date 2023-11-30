import React, { useEffect } from 'react';
import { CSSProp, css } from 'styled-components';

import SwitchList from '../../molecules/SwitchList/SwitchList';
import useFancyHandyNavStore from './FancyHandyNav.store';
import BottomBar from '../../molecules/BottomBar/BottomBar';
import FancyBottomBarIcon, { IFancyBottomBarIcon } from '../FancyBottomBarIcon/FancyBottomBarIcon';
import RawNav from '../../atoms/RawNav/RawNav';
import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TUiColors';
interface IFancyHandyNav {
  items?: IFancyBottomBarIcon[];
  isVisible?: boolean;
  wichIndexIsActive?: string;
  themeType?: TThemeTypes;
  themeTypeIcons?: TThemeTypes;
  themeTypeSwitchList?: TThemeTypes;
  layer?: TLayer;
  outlined?: boolean;
  outlinedBackgroundStrength?: number;
  externalStyle?: CSSProp;
  className?: string;
}
// --------------------------------------------------------------------------- //
// ---------- A handyNavBar that can dynamicly generated via objects---------- //
// --------------------------------------------------------------------------- //
export default function FancyHandyNav(props: IFancyHandyNav) {
  const { items, isVisible, wichIndexIsActive, themeType, themeTypeIcons, themeTypeSwitchList, layer, externalStyle } = props;

  // setup a global zustand store for the visibility and the active index
  const isVisibleState = useFancyHandyNavStore((state) => state.isVisible);
  const setIsVisible = useFancyHandyNavStore((state) => state.setIsVisible);
  const stateWhichIsActive = useFancyHandyNavStore((state) => state.whichIsActive);
  const setWhichIsActiveState = useFancyHandyNavStore((state) => state.setWhichIsActive);

  // Set the default values / initial values
  useEffect(() => {
    setWhichIsActiveState(wichIndexIsActive ?? '0');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle the visibility of the nav
  useEffect(() => {
    setIsVisible(isVisible ?? true);
  }, [isVisible, setIsVisible]);

  return (
    <>
      {isVisibleState && (
        // The Navbar container
        <RawNav $externalStyle={externalStyle} className={props.className}>
          <BottomBar
            outlined={props.outlined}
            themeType={themeType}
            layer={layer}
            outlinedBackgroundStrength={props.outlinedBackgroundStrength}
            externalStyle={css`
              border-bottom: none;
            `}
          >
            {/* The List with the items  */}
            <SwitchList whichIndexIsSelected={Number(stateWhichIsActive)} $themeType={themeTypeSwitchList} $indicatorWidth={'70%'}>
              {items?.map((item, index) => (
                <FancyBottomBarIcon
                  key={index}
                  themeType={themeTypeIcons}
                  layer={layer}
                  isActive={Number(stateWhichIsActive) === index}
                  {...item}
                  onClick={() => {
                    setWhichIsActiveState(index.toString());
                    item.onClick && item.onClick();
                  }}
                />
              ))}
            </SwitchList>
          </BottomBar>
        </RawNav>
      )}
    </>
  );
}
