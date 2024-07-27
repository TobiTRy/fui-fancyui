'use client';

import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { StyledSideBarItem } from './SideBarItem.style';

import { Icon } from './SubComponents/Icon';
import { Label } from './SubComponents/Label';
import { TSideBarItem } from './TSideBarItem.model';

import { sizeSettings } from './sizeSettings';
import { leftRightToFlex } from '@/utils/functions/leftRightToFlex';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';

// --------------------------------------------------------------------------- //
// ------- The SideBarItem is a Item for the Sidebar menue wich can  --------- //
// ------- costumed styled with the icon and label                   --------- //
// --------------------------------------------------------------------------- //
function SideBarItem(props: TSideBarItem) {
  const { children, sizeC = 'sm', direction = 'left', justify = 'left', wide, noMargin, ...FancyBoxProps } = props;

  return (
    <StyledSideBarItem
      $sizeC={sizeC}
      sizeC={sizeSettings[sizeC].boxSize}
      borderRadius={wide ? '0' : sizeSettings[sizeC].borderRadius}
      padding={wide ? sizeSettings[sizeC].paddingWide : sizeSettings[sizeC].padding}
      $noMargin={noMargin}
      {...FancyBoxProps}
    >
      <FancyFlexBox
        justify={leftRightCenterToFlexJustify[justify]}
        direction={leftRightToFlex(direction)}
        align="center"
        gap={sizeSettings[sizeC].gapBetweenItems}
      >
        {children}
      </FancyFlexBox>
    </StyledSideBarItem>
  );
}

SideBarItem.Icon = Icon;
SideBarItem.Label = Label;

export default SideBarItem;
