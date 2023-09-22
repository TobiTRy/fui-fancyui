import React, { useEffect } from 'react';

import BottomBar from '../../Atoms/BottomBar/BottomBar';
import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';
import IBottomBar from '../../Atoms/BottomBar/IBottomBar.model';

type TBoottomBarProps = Omit<IBottomBar, 'children'>;
import useFancyBottomBarStaticStore from './FancyBottomBarStatic.store';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

// --------------------------------------------------------------------------- //
// ------------------ The Bottom Bar for the mobile navigation --------------- //
// --------------  use the store to controle the bar from outside ------------ //
interface IStaticBottomBar {
  buttons?: IFancyBottomBarIcon[];
  isVisible?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function FancyBottomBarStatic(props: IStaticBottomBar & TBoottomBarProps) {
  const { buttons, isVisible, ...bottomBarProps } = {...defaultProps, ...props};
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
        <BottomBar {...bottomBarProps}>
          {buttons?.map((button, i) => (
            <FancyBottomBarIcon
              key={i}
              {...button}
              active={button.id === whichIsActive}
              handler={() => {
                button.handler && button.handler();
                setWhichIsActive(button.id!);
              }}
            />
          ))}
        </BottomBar>
      )}
    </>
  );
}

const defaultProps: IStaticBottomBar = {
  isVisible: true,
}