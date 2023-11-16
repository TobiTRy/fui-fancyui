import React from 'react';

import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { FancyBox } from '../../Atoms/FancyBox';
import { CSSProp, css } from 'styled-components';
import { fancyBarStyle } from './BottomBar.style';

// --------------------------------------------------------------------------- //
// ------------------ The Bottom Bar for the mobile navigation --------------- //
// --------------  use the store to controle the bar from outside ------------ //
type TBottomBar = {
  isVisible?: boolean;
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
} & React.ComponentProps<typeof FancyBox>;
export default function BottomBar(props: TBottomBar) {
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

const defaultProps: TBottomBar = {
  isVisible: true,
};
