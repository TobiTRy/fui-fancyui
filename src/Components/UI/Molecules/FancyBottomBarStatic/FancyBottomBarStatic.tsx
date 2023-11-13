import React, { useEffect } from 'react';

import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';

import useFancyBottomBarStaticStore from './FancyBottomBarStatic.store';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { FancyBox } from '../../Atoms/FancyBox';
import { CSSProp, css } from 'styled-components';
import { fancyBarStyle } from './FancyBottomBarStatic.style';
import SwitchList from '../SwitchList/SwitchList';

// --------------------------------------------------------------------------- //
// ------------------ The Bottom Bar for the mobile navigation --------------- //
// --------------  use the store to controle the bar from outside ------------ //
interface IStaticBottomBar {
  buttons?: IFancyBottomBarIcon[];
  isVisible?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  externalStyle?: CSSProp;
  wichIndexIsActive?: string;
}
export default function FancyBottomBarStatic(props: IStaticBottomBar) {
  const { buttons, isVisible, externalStyle, wichIndexIsActive, ...bottomBarProps } = { ...defaultProps, ...props };
  const isVisibleState = useFancyBottomBarStaticStore((state) => state.isVisible);
  const setIsVisible = useFancyBottomBarStaticStore((state) => state.setIsVisible);
  const whichIsActive = useFancyBottomBarStaticStore((state) => state.whichIsActive);
  const setWhichIsActive = useFancyBottomBarStaticStore((state) => state.setWhichIsActive);

  useEffect(() => {
    setIsVisible(isVisible ? isVisible : true);
    setWhichIsActive(wichIndexIsActive ? wichIndexIsActive : '0');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ItterateButtons = () => {
    return buttons?.map((button, i) => (
      <div onClick={() => setWhichIsActive(i.toString())} key={i}>
        <FancyBottomBarIcon {...button} isActive={whichIsActive === i.toString()} />
      </div>
    ));
  }


  return (
    <>
      {isVisibleState && (
        <FancyBox
          {...bottomBarProps}
          externalStyle={css`
            ${fancyBarStyle}
            ${externalStyle}
          `}
        >
          <SwitchList whichIndexIsSelected={Number(whichIsActive)} $indicatorWidth={'70%'}>
            {ItterateButtons()}
          </SwitchList>
        </FancyBox>
      )}
    </>
  );
}

const defaultProps: IStaticBottomBar = {
  isVisible: true,
};
