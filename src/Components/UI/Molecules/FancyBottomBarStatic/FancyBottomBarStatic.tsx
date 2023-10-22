import React, { useEffect } from 'react';

import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';

import useFancyBottomBarStaticStore from './FancyBottomBarStatic.store';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { FancyBar } from '../../Atoms/FancyBar';
import { CSSProp, css } from 'styled-components';
import { fancyBarStyle } from './FancyBottomBarStatic.style';

// --------------------------------------------------------------------------- //
// ------------------ The Bottom Bar for the mobile navigation --------------- //
// --------------  use the store to controle the bar from outside ------------ //
interface IStaticBottomBar {
  buttons?: IFancyBottomBarIcon[];
  isVisible?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  externalStyle?: CSSProp;
}
export default function FancyBottomBarStatic(props: IStaticBottomBar) {
  const { buttons, isVisible, externalStyle ,...bottomBarProps } = {...defaultProps, ...props};
  const isVisibleState = useFancyBottomBarStaticStore((state) => state.isVisible);
  const setIsVisible = useFancyBottomBarStaticStore((state) => state.setIsVisible);
  const whichIsActive = useFancyBottomBarStaticStore((state) => state.whichIsActive);
  const setWhichIsActive = useFancyBottomBarStaticStore((state) => state.setWhichIsActive);

  useEffect(() => {
    setIsVisible(isVisible ? isVisible : true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isVisibleState && (
        <FancyBar {...bottomBarProps} style={css`${fancyBarStyle}${externalStyle}`}>

          {buttons?.map((button, i) => (
            <FancyBottomBarIcon
              key={i}
              {...button}
              active={button.id === whichIsActive}
              onClick={() => {
                button.onClick && button.onClick();
                setWhichIsActive(button.id!);
              }}
            />
          ))}
        </FancyBar>
      )}
    </>
  );
}

const defaultProps: IStaticBottomBar = {
  isVisible: true,
}