import React from 'react';
import { CSSProp, css } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { FancyBox } from '@/components/atoms/FancyBox';
import { fancyBarStyle } from './BottomBar.style';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

type TBottomBar = {
  isVisible?: boolean;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  children?: React.ReactNode;
} & React.ComponentProps<typeof FancyBox>;
// --------------------------------------------------------------------------- //
// ------------------ The Bottom Bar for the mobile navigation --------------- //
// --------------  use the store to controle the bar from outside ------------ //
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

// default props for the bottom bar
const defaultProps: TBottomBar = {
  isVisible: true,
};
