import { css } from 'styled-components';

import { FancyBox } from '@/components/atoms/FancyBox';
import { TBottomBarWithFancyBoxAttrs } from '@/components/molecules/BottomBar/TBottomBar.model';
import { fancyBarStyle } from './BottomBar.style';

// --------------------------------------------------------------------------- //
// ------------------ The Bottom Bar for the mobile navigation --------------- //
// --------------  use the store to controle the bar from outside ------------ //
export default function BottomBar(props: TBottomBarWithFancyBoxAttrs) {
  const { isVisible = true, externalStyle, children, ...bottomBarProps } = props;

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
