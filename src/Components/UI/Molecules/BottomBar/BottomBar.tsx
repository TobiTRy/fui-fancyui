import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { FancyBox } from '../../Atoms/FancyBox';
import { CSSProp, css } from 'styled-components';
import { fancyBarStyle } from './BottomBar.style';

// --------------------------------------------------------------------------- //
// ------------------ The Bottom Bar for the mobile navigation --------------- //
// --------------  use the store to controle the bar from outside ------------ //
interface IBottomBar {
  isVisible?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
}
export default function BottomBar(props: IBottomBar) {
  const { isVisible, externalStyle, children, ...bottomBarProps } = { ...defaultProps, ...props };

  return (
    <>
      {isVisible && (
        <FancyBox
          {...bottomBarProps}
          externalStyle={css`
            ${fancyBarStyle}
            ${externalStyle}
          `}
        >
          {children}
        </FancyBox>
      )}
    </>
  );
}

const defaultProps: IBottomBar = {
  isVisible: true,
};
