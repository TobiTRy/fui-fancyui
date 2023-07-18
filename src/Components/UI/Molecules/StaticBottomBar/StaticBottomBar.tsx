import React from 'react';

import BottomBar from '../../Atoms/BottomBar/BottomBar';
import { FancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model'
import IBottomBar from '../../Atoms/BottomBar/IBottomBar.model';

type TBoottomBarProps = Omit<IBottomBar, 'children'>;

interface IStaticBottomBar {
  buttons?: IFancyBottomBarIcon[];
}
export default function StaticBottomBar(props: IStaticBottomBar & TBoottomBarProps) {
  const { buttons, ...bottomBarProps} = props;

  return (
    <BottomBar {...bottomBarProps}>
      {buttons?.map((button, i) => (
        <FancyBottomBarIcon key={i} {...button} />
      ))}
    </BottomBar>
  );
}
